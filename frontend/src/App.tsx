import React from 'react';
import Button from '@/components/atoms/Button';

const num: number = 10;

interface Props {
  label: string;
}
const yee = 10;
const App = ({ label }: Props) => {
  return (
    <div>
      booslack {num} {label}
      <Button
        onClick={() => {
          console.log('pressed');
        }}
        label="press"
      />
    </div>
  );
};

export default App;
