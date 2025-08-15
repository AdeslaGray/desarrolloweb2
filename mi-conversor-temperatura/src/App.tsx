import React, { useState } from 'react';

interface TemperatureConverterProps {
  value: number;
  unit: 'Fahrenheit' | 'Celsius';
}

export const TemperatureConverter: React.FC<TemperatureConverterProps> = ({ value, unit }) => {
  const [inputValue, setInputValue] = useState<number>(value);
  const [inputUnit, setInputUnit] = useState<'Fahrenheit' | 'Celsius'>(unit);

  const convertTemperature = (val: number, from: 'Fahrenheit' | 'Celsius') => {
    return from === 'Fahrenheit'
      ? ((val - 32) * 5) / 9
      : (val * 9) / 5 + 32;
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  };

  const handleUnitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setInputUnit(e.target.value as 'Fahrenheit' | 'Celsius');
  };

  const convertedValue = convertTemperature(inputValue, inputUnit);
  const convertedUnit = inputUnit === 'Fahrenheit' ? 'Celsius' : 'Fahrenheit';

  return (
    <div>
      <h2>Temperature Converter</h2>
      <input
        type="number"
        value={inputValue}
        onChange={handleValueChange}
        style={{ marginRight: '1rem' }}
      />
      <select value={inputUnit} onChange={handleUnitChange}>
        <option value="Fahrenheit">Fahrenheit</option>
        <option value="Celsius">Celsius</option>
      </select>
      <div style={{ marginTop: '1rem' }}>
        Converted Value: {convertedValue.toFixed(2)} {convertedUnit}
      </div>
    </div>
  );
};