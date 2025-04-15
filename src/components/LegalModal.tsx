import React from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: React.ReactNode;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="text-sm text-gray-800 overflow-y-auto max-h-[70vh]">
          {content}
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
