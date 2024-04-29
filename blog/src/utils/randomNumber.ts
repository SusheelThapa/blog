function getRandomNumber(min: number, max: number): number {
  // Ensure min is less than max
  if (min >= max) {
    throw new Error("Minimum value must be less than maximum value.");
  }

  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

export default getRandomNumber;
