import React from 'react';

interface AmountInputProps {
  icon?: React.ReactNode;
  label?: string;
  value: number | null;
  onChange: (value: number | null) => void;
  placeholder?: string;
  small?: boolean;
}

const AmountInput: React.FC<AmountInputProps> = ({
  icon,
  label,
  value,
  onChange,
  placeholder = '0.00',
  small = false,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '') {
      onChange(null);
    } else {
      const numValue = parseFloat(val);
      if (!isNaN(numValue) && numValue >= 0) {
        onChange(numValue);
      }
    }
  };

  return (
    <div className={small ? '' : 'space-y-2'}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}
      <div className="relative rounded-md shadow-sm">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type="number"
          value={value === null ? '' : value}
          onChange={handleChange}
          placeholder={placeholder}
          min="0"
          step="0.01"
          className={`
            block w-full rounded-md
            border border-gray-300 dark:border-gray-600
            bg-white dark:bg-gray-800
            text-gray-900 dark:text-gray-100
            placeholder-gray-400 dark:placeholder-gray-500
            focus:border-blue-500 focus:ring-blue-500
            sm:text-sm
            ${icon ? 'pl-10' : 'pl-3'}
            py-2 transition-all duration-200 ease-in-out
            ${small ? 'text-sm' : 'text-base'}
          `}
        />
      </div>
    </div>
  );
};

export default AmountInput;