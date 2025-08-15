// src/components/TemperatureConverter.tsx
import React from 'react';

type Unit = 'Celsius' | 'Fahrenheit' | 'Kelvin';

interface Props {
  value: number;
  unit: Unit;
}

const convertTemperature = (value: number, unit: Unit): { label: string; value: number }[] => {
  switch (unit) {
    case 'Celsius':
      return [
        { label: 'Celsius', value },
        { label: 'Fahrenheit', value: value * 9 / 5 + 32 },
        { label: 'Kelvin', value: value + 273.15 },
      ];
    case 'Fahrenheit':
      return [
        { label: 'Fahrenheit', value },
        { label: 'Celsius', value: (value - 32) * 5 / 9 },
        { label: 'Kelvin', value: (value - 32) * 5 / 9 + 273.15 },
      ];
    case 'Kelvin':
      return [
        { label: 'Kelvin', value },
        { label: 'Celsius', value: value - 273.15 },
        { label: 'Fahrenheit', value: (value - 273.15) * 9 / 5 + 32 },
      ];
    default:
      return [];
  }
};

export const TemperatureConverter: React.FC<Props> = ({ value, unit }) => {
  const conversions = convertTemperature(value, unit);

  return (
    <div>
      <h2>Conversión de temperatura</h2>
      <ul>
        {conversions.map((item, index) => (
          <li key={index}>
            {item.label}: {item.value.toFixed(2)}°
          </li>
        ))}
      </ul>
    </div>
  );
};