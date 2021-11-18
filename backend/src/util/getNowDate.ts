export const getNowDate = () => {
  const today: Date = new Date();
  return `${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`;
};

export const getNowDateAndTime = () => {
  const today: Date = new Date();
  const Dates = `${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`;
  const hour = (`0${today.getHours()}`).slice(-2);
  const minute = (`0${today.getMinutes()}`).slice(-2);
  const second = (`0${today.getSeconds()}`).slice(-2);
  return `${Dates} ${hour}-${minute}-${second}`;
};
