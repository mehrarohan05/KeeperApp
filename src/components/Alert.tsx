import React, { useEffect } from 'react';
import { AlertCircle, X } from 'lucide-react';

interface AlertProps {
  message: string;
  onClose: () => void;
  isVisible: boolean;
}

const Alert: React.FC<AlertProps> = ({ message, onClose, isVisible }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-slide-in">
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 shadow-lg max-w-sm">
        <div className="flex items-start">
          <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 mr-3" />
          <div className="flex-1">
            <p className="text-sm text-red-800">{message}</p>
          </div>
          <button
            onClick={onClose}
            className="ml-3 text-red-400 hover:text-red-600 transition-colors duration-200"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;