#!/bin/bash
npm install
cd server
npm install
cd ..

echo "OPENROUTER_API_KEY=" > .env
