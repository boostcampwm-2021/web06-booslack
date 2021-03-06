import { useState, useEffect, RefObject } from 'react';

const useRefLocate = (
  customRef: RefObject<HTMLElement>,
  timer = 100,
): [number, number] => {
  const [xWidth, setWidth] = useState<null | number>(null);
  const [yHeight, setHeight] = useState<null | number>(null);
  const [throttle, setThrottle] = useState(false);

  const handleResize = () => {
    if (throttle) return;
    if (!customRef) return;

    setThrottle(true);
    setTimeout(() => {
      setWidth(customRef?.current?.getBoundingClientRect()?.x);
      setHeight(customRef?.current?.getBoundingClientRect()?.y);
      setThrottle(false);
    }, timer);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return [xWidth, yHeight];
};

export default useRefLocate;
