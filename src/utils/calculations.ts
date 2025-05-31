/**
 * Calculates the total amount per person
 * 
 * @param billAmount - The total bill amount
 * @param fixedTotal - The sum of all fixed contributions
 * @param tipPercentage - The tip percentage
 * @param numberOfPeople - Number of people splitting the bill
 * @returns The calculated amount per person
 */
export const calculateTotalPerPerson = (
  billAmount: number,
  fixedTotal: number,
  tipPercentage: number,
  numberOfPeople: number
): number => {
  // Calculate remaining amount after fixed contributions
  const remainingAmount = Math.max(0, billAmount - fixedTotal);
  
  // Calculate tip amount on the remaining bill
  const tipAmount = (remainingAmount * tipPercentage) / 100;
  
  // Calculate total to be split (remaining amount + tip)
  const totalToSplit = remainingAmount + tipAmount;
  
  // Calculate per person amount (rounded to 2 decimal places)
  return Math.round((totalToSplit / numberOfPeople) * 100) / 100;
};