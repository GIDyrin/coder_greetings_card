import { useState, useEffect } from 'react';
import { GenerationForm, HistoryList, LanguageSwitcher } from './components';
import { LanguageProvider, useLanguage } from "./context"

export default function App() {
  return (
      <LanguageProvider>
        <MainApp />
      </LanguageProvider>
  );
}

const MainApp = () => {
  const [history, setHistory] = useState<{id: string; promt: string; response: string; date: string}[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    const savedHistory = localStorage.getItem('greeting-history');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (e) {
        console.error('Ошибка загрузки истории', e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('greeting-history', JSON.stringify(history));
  }, [history]);

  const addToHistory = (promt: string, response: string) => {
    const newItem = {
      id: Date.now().toString(),
      promt,
      response,
      date: new Date().toLocaleString()
    };
    setHistory(prev => [...prev, newItem]);
  };


  const handleDeleteHistoryItem = (id: string) => {
    setHistory(prev => prev.filter(item => item.id !== id));
  };

 return (
    <div className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className='max-w-3xl w-full flex-col items-center justify-center py-12 px-4'>
          <div className="flex justify-end mb-4 space-x-4">
            <LanguageSwitcher />
          </div>
          
          <h1 className="text-3xl font-bold text-center mb-8">
            {t.appTitle}
          </h1>
          
          <GenerationForm onGenerate={addToHistory} />
          
          <HistoryList 
              history={history} 
              onDelete={handleDeleteHistoryItem}  
          />
        </div>
      </div>
  );
}


