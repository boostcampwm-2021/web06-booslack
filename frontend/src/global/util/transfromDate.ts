function makeTwoZeroString(number) {
  const num = Number(number);
  if (number >= 0 && num < 10) return `0${num}`;
  return `${num}`;
}

export const transfromDate = (timestamp) => {
  const date = new Date(timestamp);
  return `${makeTwoZeroString(date.getFullYear())}-${makeTwoZeroString(
    date.getMonth() + 1,
  )}-${makeTwoZeroString(date.getDate())} ${makeTwoZeroString(
    date.getHours(),
  )}:${makeTwoZeroString(date.getMinutes())}:${makeTwoZeroString(
    date.getSeconds(),
  )}`;
};
