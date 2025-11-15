import React, { useState, useRef, useEffect, useCallback } from 'react';

export interface DropdownOption {
  value: string | number;
  label: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  selectedValue: string | number | null;
  onSelect: (value: string | number) => void;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedValue,
  onSelect,
  placeholder = 'Selecione uma opção',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); 

  const selectedLabel = 
    options.find(option => option.value === selectedValue)?.label || placeholder;

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);
  
  const handleSelect = (value: string | number) => {
    onSelect(value);
    setIsOpen(false); 
  };

  const buttonClasses = `
    w-30
    text-xs
    px-2 py-1
    text-left 
    bg-white
    border border-gray-300 
    rounded-md
    shadow-sm 
    flex justify-between items-center 
    cursor-pointer 
    hover:bg-gray-50 
    focus:outline-none focus:ring-2 focus:ring-blue-500
  `;

  const menuClasses = `
    absolute 
    z-10 
    mt-1
    w-30
    bg-white 
    rounded-md
    shadow-lg 
    max-h-60 
    overflow-auto
  `;

  const optionClasses = (isCurrent: boolean) => `
    px-2 py-2 
    text-xs
    cursor-pointer 
    ${isCurrent 
        ? 'bg-gray-500 text-white' 
        : 'text-gray-900 hover:bg-gray-200'
    }
  `;

  return (
    <div className="relative w-64" ref={dropdownRef}>
      <button
        type="button"
        className={buttonClasses}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{selectedLabel}</span>
        <svg
          className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className={menuClasses}>
          {options.map((option) => (
            <div
              key={option.value}
              className={optionClasses(option.value === selectedValue)}
              onClick={() => handleSelect(option.value)}
              role="option"
              aria-selected={option.value === selectedValue}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;