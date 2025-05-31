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
  const [lastAddedId, setLastAddedId] = useState<number | null>(null);

  const addFixedAmount = () => {
    setFixedAmounts([...fixedAmounts, { id: nextId, amount: null }]);
    setLastAddedId(nextId); // track which one was added
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

  const handleReset = () => {
    setBillAmount(null);
    setTipPercentage(15);
    setNumberOfPeople(2);
    setFixedAmounts([]);
    setNextId(1);
    setTotalPerPerson(null);
    setLastAddedId(null);
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
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out">
      <div className="p-6">
        <div className="space-y-5">
          <AmountInput 
            icon={<DollarSign className="h-5 w-5 text-blue-500" />}
            label="Bill Amount"
            value={billAmount}
            onChange={setBillAmount}
            placeholder="0.00"
          />

{fixedAmounts.map((item) => {
  const isNew = item.id === lastAddedId;
  const inputRef = isNew ? React.createRef<HTMLInputElement>() : undefined;

  return (
    <div key={item.id} className="flex items-center space-x-2 animate-fadeIn">
      <AmountInput
        icon={<DollarSign className="h-5 w-5 text-green-500" />}
        value={item.amount}
        onChange={(value) => updateFixedAmount(item.id, value)}
        placeholder="0.00"
        small
        inputRef={inputRef}
      />
      <button
        onClick={() => removeFixedAmount(item.id)}
        className="p-2 text-red-500 hover:text-red-700 dark:hover:text-red-400 transition-colors"
        aria-label="Remove fixed amount"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
})}

          <button
            onClick={addFixedAmount}
            className="flex items-center text-sm text-blue-600 font-medium hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
          >
            <Plus size={16} className="mr-1" /> Paying separate
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

      <Result totalPerPerson={totalPerPerson} reset={handleReset}/>
    </div>
  );
};

export default TipCalculator;