import { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { useLanguage } from '@context';


interface GreetingCardProps {
  text: string;
}

export const GreetingCard = ({ text }: GreetingCardProps) => {
  const [copied, setCopied] = useState(false);
    const { t } = useLanguage();

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-semibold text-blue-600">{t.yourGreeting}</h2>
        <button 
          onClick={handleCopy}
          className="flex cursor-copy items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
        >
          {copied ? (
            <>
              <FiCheck className="text-green-500" /> {t.copied}
            </>
          ) : (
            <>
              <FiCopy /> {t.copy}
            </>
          )}
        </button>
      </div>
      <pre className="whitespace-pre-wrap text-gray-700 font-sans">{text}</pre>
    </div>
  );
}