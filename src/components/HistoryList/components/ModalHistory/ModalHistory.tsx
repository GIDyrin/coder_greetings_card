import type { ReactNode } from "react";

interface ModalHistoryProps{
    isOpen: boolean,
    onClose: () => void,
    children: ReactNode
}

export const ModalHistory = ({ isOpen, onClose, children }: ModalHistoryProps) => {
  if (!isOpen) return null;

  return (
    <div 
    style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
    className="fixed inset-0 .bg-opacity-80 flex items-center justify-center z-50"
    >
      <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 cursor-pointer text-xl/tight"
          >
            x
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};