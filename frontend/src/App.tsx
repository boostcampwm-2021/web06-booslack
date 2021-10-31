import Button from '@/components/atoms/Button';
import React from 'react';

const num: number = 10;

interface Props {
  label: string;
}

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
