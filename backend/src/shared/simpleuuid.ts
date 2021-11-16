const allString = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

/* eslint-disable arrow-body-style */
const generateUniqSerial = (): string => {
  return 'xxxxxx'.replace(/[x]/g, () => {
    const number = allString[Math.floor(Math.random() * (allString.length - 1))];
    return number.toUpperCase();
  });
};

export default generateUniqSerial;
