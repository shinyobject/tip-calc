import React from 'react';
import { formatCurrency } from '../utils/formatters';

interface ResultProps {
  totalPerPerson: number | null;
}

const Result: React.FC<ResultProps> = ({ totalPerPerson }) => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-blue-100 text-sm">Total per person</p>
          <h2 className="text-white text-3xl font-bold tracking-tight">
            {totalPerPerson !== null ? formatCurrency(totalPerPerson) : '$0.00'}
          </h2>
        </div>
        
        <div className="text-blue-200 text-xs">
          {totalPerPerson !== null && 'Final split amount'}
        </div>
      </div>
    </div>
  );
};

export default Result;