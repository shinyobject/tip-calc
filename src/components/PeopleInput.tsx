import React from 'react';

interface PeopleInputProps {
  icon?: React.ReactNode;
  value: number;
  onChange: (value: number) => void;
}

const PeopleInput: React.FC<PeopleInputProps> = ({ icon, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val > 0) {
      onChange(val);
    }
  };

  const increment = () => onChange(value + 1);
  const decrement = () => {
    if (value > 1) {
      onChange(value - 1);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Number of People
      </label>
      <div className="flex">
        <div className="relative flex-grow rounded-md shadow-sm">
          {icon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              {icon}
            </div>
          )}
          <input
            type="text"
            inputMode="numeric"
            value={value}
            onChange={handleChange}
            min="1"
            step="1"
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
            `}
          />
        </div>
        <div className="flex flex-col ml-2">
          <button
            type="button"
            onClick={increment}
            className="h-1/2 px-2 
              bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600
              text-gray-700 dark:text-gray-100
              rounded-t-md border border-gray-300 dark:border-gray-600
              transition-colors"
          >
            +
          </button>
          <button
            type="button"
            onClick={decrement}
            className="h-1/2 px-2 
              bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600
              text-gray-700 dark:text-gray-100
              rounded-b-md border border-t-0 border-gray-300 dark:border-gray-600
              transition-colors"
            disabled={value <= 1}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default PeopleInput;