import React, { useState, useEffect } from 'react';

const useKeyboardNavigator = (
  array: any[],
  setValue: React.Dispatch<any>,
): number => {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIndex((prevIndex) => {
        return prevIndex === array.length - 1 ? 0 : prevIndex + 1;
      });
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setIndex((prevIndex) => {
        return prevIndex === 0 ? array.length - 1 : prevIndex - 1;
      });
    } else if (e.key === 'Enter') {
      e.preventDefault();
      setSelected(true);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    setIndex(0);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [array]);

  useEffect(() => {
    if (!selected) return;
    setValue(array[index]);
    setSelected(false);
  }, [selected]);

  return index;
};

export default useKeyboardNavigator;
