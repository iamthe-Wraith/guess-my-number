export const generateRandomNumber = (min: number, max: number, exclude?: number): number => {
  if ((max - min) <= 1) return min;

  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (typeof exclude === 'number' && rndNum === exclude) return generateRandomNumber(min, max, exclude);

  return rndNum;
};