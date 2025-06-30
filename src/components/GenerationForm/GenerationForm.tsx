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
    if (!input.trim()) return;

    setIsLoading(true);
    try {
      const response = await mockApiCall(input);
      setGreeting(response);
      onGenerate(input, response);
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
        <div className="border-t border-gray-100">
          <GreetingCard text={greeting} />
        </div>
      )}
      </div>
    </div>
  );
}

// Моковая функция API 
async function mockApiCall(description: string): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Дорогой коллега!\n${description}\nС Днем Рождения!`);
    }, 1500);
  });
}