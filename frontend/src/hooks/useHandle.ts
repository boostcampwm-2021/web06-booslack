import { useState, useEffect, RefObject } from 'react';

const useRefLocate = (customRef: RefObject<HTMLElement>): [number, number] => {
  const [xWidth, setWidth] = useState<null | number>(null);
  const [yHeight, setHeight] = useState<null | number>(null);

  const handleResize = () => {
    setWidth(customRef?.current?.getBoundingClientRect()?.x);
    setHeight(customRef?.current?.getBoundingClientRect()?.y);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return [xWidth, yHeight];
};

export default useRefLocate;
