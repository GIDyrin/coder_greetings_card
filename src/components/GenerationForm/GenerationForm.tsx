import { useState } from 'react';
import { FiSend, FiLoader } from 'react-icons/fi';
import { GreetingCard } from "./components"
import { useLanguage } from '../../context';

interface GenerationFormProps {
  onGenerate: (description: string, response: string) => void;
}

export const GenerationForm = ({ onGenerate }: GenerationFormProps) => {
  const [input, setInput] = useState('');
  const [greeting, setGreeting] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setGreeting('');
    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/openrouter-stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: "google/gemma-3n-e4b-it:free",
          messages: [{
            role: "user",
            content: t.promtDescription + input
          }]
        })
      });

      if (!response.body) throw new Error('No response body');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let fullResponse = '';
      
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value);
        const events = chunk.split('\n\n').filter(e => e.startsWith('data:'));
        
        for (const event of events) {
          try {
            const jsonStr = event.replace('data:', '').trim();
            if (jsonStr === '[DONE]') continue;
            
            const data = JSON.parse(jsonStr);
            const content = data.choices[0]?.delta?.content || '';
            
            // Обновляем состояние и накапливаем полный ответ
            setGreeting(prev => {
              const newGreeting = prev + content;
              fullResponse = newGreeting;
              return newGreeting;
            });
          } catch (e) {
            console.error('Parsing error:', e);
          }
        }
      }
      
      onGenerate(input, fullResponse);
    } catch (error) {
      console.error('Request failed:', error);
      setGreeting(t.errorGenerating);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {t.createGreeting}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t.descriptionPlaceholder}
            className="w-full focus:ring-1 focus:ring-blue-400 p-4 rounded-lg resize-none outline-0 shadow-blue-500 shadow"
            rows={5}
            disabled={isLoading}
            required
          />
          
          <div className='flex justify-end mb-6'>
            <button
              type="submit"
              disabled={isLoading}
              className="flex cursor-pointer items-center justify-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-30 "
            >
              {isLoading ? (
                <>
                  <FiLoader className="animate-spin" /> {t.generating}
                </>
              ) : (
                <>
                  <FiSend /> {t.createGreeting}
                </>
              )}
            </button>
          </div>
        </form>

        {greeting && (
          <div className="mt-6 border-t border-gray-100 pt-4">
            <h3 className="text-lg font-medium text-gray-700 mb-2">
              {t.yourGreeting}
            </h3>
            <GreetingCard text={greeting} />
          </div>
        )}
      </div>
    </div>
  );
}