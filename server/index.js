require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const { PassThrough } = require('stream');

const app = express();
const PORT = process.env.PORT || 5000;
const apiKey = process.env.OPENROUTER_API_KEY

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173'
}));
app.use(express.json());


app.post('/api/openrouter-stream', async (req, res) => {
  try {
    if (!apiKey) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    // заголовки для SSE
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    const passThrough = new PassThrough();
    passThrough.pipe(res);

    const response = await axios({
      method: 'POST',
      url: 'https://openrouter.ai/api/v1/chat/completions',
      data: {
        ...req.body,
        stream: true
      },
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      responseType: 'stream'
    });

    // Обработка закрытия соединения клиентом
    req.on('close', () => {
      response.data.destroy();
      passThrough.destroy();
    });

    // Пересылка данных клиенту
    response.data.on('data', (chunk) => {
      passThrough.write(chunk);
    });

    response.data.on('end', () => {
      passThrough.end();
    });

    response.data.on('error', (err) => {
      console.error('Stream error:', err);
      passThrough.end();
    });

  } catch (error) {
    console.error('API request error:', error);
    if (!res.headersSent) {
      return res.status(500).json({ error: error.message });
    }
  }
});

// Старт сервера
app.listen(PORT, () => {
  console.log(`AI Proxy Server running on port ${PORT}`);
});