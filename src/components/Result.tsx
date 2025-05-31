import React from 'react';
import { formatCurrency } from '../utils/formatters';

interface ResultProps {
  totalPerPerson: number | null;
}

const Result: React.FC<ResultProps> = ({ totalPerPerson }) => {
  return (
    <div className="
      px-6 py-5 
      bg-gradient-to-r from-blue-600 to-blue-700 
      dark:from-blue-800 dark:to-blue-900
      transition-colors duration-300
    ">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-blue-100 dark:text-blue-200 text-sm">Total per person</p>
          <h2 className="text-white dark:text-blue-100 text-3xl font-bold tracking-tight">
            {totalPerPerson !== null ? formatCurrency(totalPerPerson) : '$0.00'}
          </h2>
        </div>
        
        <div className="text-blue-200 dark:text-blue-300 text-xs">
          {totalPerPerson !== null && 'Final split amount'}
        </div>
      </div>
    </div>
  );
};

export default Result;