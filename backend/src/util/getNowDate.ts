const getNowDate = () => {
  const today = new Date();
  return `${today.getFullYear()}-${today.getMonth()}-${today.getDay()}`;
};

export default getNowDate;
