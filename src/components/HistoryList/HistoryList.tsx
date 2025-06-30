import { FiClock, FiTrash2 } from 'react-icons/fi';
import { useLanguage } from '../../context';
import { useState } from 'react';
import { ModalHistory, ReviewRecord} from './components';

interface HistoryItem {
  id: string;
  promt: string;
  response: string;
  date: string;
}

interface HistoryListProps {
  history: HistoryItem[];
  onDelete: (id: string) => void;
}

export const HistoryList = ({ history, onDelete }: HistoryListProps) => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<HistoryItem | null>(null);

  const onSelect = (item: HistoryItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-md p-6 mt-8">
      <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
        <FiClock className="text-blue-500" /> {t.historyTitle}
      </h3>
      
      {history.length === 0 ? (
        <p className="text-gray-500">{t.emptyHistory}</p>
      ) : (
        <ul className="space-y-2">
          {history.map(item => (
            <li key={item.id} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
              <button 
                onClick={() => onSelect(item)}
                className="text-left flex-1 truncate cursor-pointer"
              >
                {item.promt}
              </button>
              <button 
                onClick={() => onDelete(item.id)}
                className="text-red-500 cursor-pointer hover:text-red-700 hover:bg-red-50 rounded p-1"
              >
                <FiTrash2 />
              </button>
            </li>
          ))}
        </ul>
      )}

      <ModalHistory isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {selectedItem && (
          <ReviewRecord 
            promt={selectedItem.promt} 
            response={selectedItem.response} 
          />
        )}
      </ModalHistory>
    </div>
  );
}