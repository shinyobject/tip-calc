import React, { useState, useEffect } from 'react';
import { DollarSign, Users, Percent, Plus, Trash2 } from 'lucide-react';
import { calculateTotalPerPerson } from '../utils/calculations';
import AmountInput from './AmountInput';
import TipSelector from './TipSelector';
import PeopleInput from './PeopleInput';
import Result from './Result';

const TipCalculator: React.FC = () => {
  const [billAmount, setBillAmount] = useState<number | null>(null);
  const [tipPercentage, setTipPercentage] = useState<number>(15);
  const [numberOfPeople, setNumberOfPeople] = useState<number>(2);
  const [fixedAmounts, setFixedAmounts] = useState<Array<{ id: number, amount: number | null }>>([]);
  const [nextId, setNextId] = useState<number>(1);
  const [totalPerPerson, setTotalPerPerson] = useState<number | null>(null);

  const addFixedAmount = () => {
    setFixedAmounts([...fixedAmounts, { id: nextId, amount: null }]);
    setNextId(nextId + 1);
  };

  const removeFixedAmount = (id: number) => {
    setFixedAmounts(fixedAmounts.filter(item => item.id !== id));
  };

  const updateFixedAmount = (id: number, amount: number | null) => {
    setFixedAmounts(
      fixedAmounts.map(item => (item.id === id ? { ...item, amount } : item))
    );
  };

  useEffect(() => {
    if (billAmount !== null && numberOfPeople > 0) {
      const fixedTotal = fixedAmounts.reduce((acc, curr) => 
        acc + (curr.amount || 0), 0);
      
      setTotalPerPerson(
        calculateTotalPerPerson(billAmount, fixedTotal, tipPercentage, numberOfPeople)
      );
    } else {
      setTotalPerPerson(null);
    }
  }, [billAmount, tipPercentage, numberOfPeople, fixedAmounts]);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out">
      <div className="p-6">
        <div className="space-y-5">
          <AmountInput 
            icon={<DollarSign className="h-5 w-5 text-blue-500" />}
            label="Bill Amount"
            value={billAmount}
            onChange={setBillAmount}
            placeholder="0.00"
          />

          {fixedAmounts.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-gray-700">Individual Contributions</h3>
              {fixedAmounts.map((item) => (
                <div key={item.id} className="flex items-center space-x-2 animate-fadeIn">
                  <AmountInput
                    icon={<DollarSign className="h-5 w-5 text-green-500" />}
                    value={item.amount}
                    onChange={(value) => updateFixedAmount(item.id, value)}
                    placeholder="0.00"
                    small
                  />
                  <button
                    onClick={() => removeFixedAmount(item.id)}
                    className="p-2 text-red-500 hover:text-red-700 transition-colors"
                    aria-label="Remove fixed amount"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={addFixedAmount}
            className="flex items-center text-sm text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            <Plus size={16} className="mr-1" /> Add individual contribution
          </button>

          <TipSelector
            icon={<Percent className="h-5 w-5 text-purple-500" />}
            value={tipPercentage}
            onChange={setTipPercentage}
          />

          <PeopleInput
            icon={<Users className="h-5 w-5 text-indigo-500" />}
            value={numberOfPeople}
            onChange={setNumberOfPeople}
          />
        </div>
      </div>

      <Result totalPerPerson={totalPerPerson} />
    </div>
  );
};

export default TipCalculator;