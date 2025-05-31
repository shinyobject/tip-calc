import React from 'react';

interface TipSelectorProps {
  icon?: React.ReactNode;
  value: number;
  onChange: (value: number) => void;
}

const TipSelector: React.FC<TipSelectorProps> = ({ icon, value, onChange }) => {
  const tipOptions = [5, 10, 15, 18, 20, 25, 30];

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Tip Percentage</label>
      <div className="relative rounded-md shadow-sm">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <select
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className={`
            block w-full rounded-md border-gray-300 shadow-sm 
            focus:border-blue-500 focus:ring-blue-500 sm:text-sm
            ${icon ? 'pl-10' : 'pl-3'}
            py-2 transition-all duration-200 ease-in-out
          `}
        >
          {tipOptions.map((tip) => (
            <option key={tip} value={tip}>
              {tip}%
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default TipSelector;