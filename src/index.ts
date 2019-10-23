export const getRandomString = () =>
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

export const getRandomNumbers = (max: number, min: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
