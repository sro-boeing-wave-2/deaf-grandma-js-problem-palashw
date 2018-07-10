/**
 * @fileOverview Generates random value in the Range
 */

/**
 * Gets random value in the min and max range
 * @param {number} min minValue to be included in the range
 * @param {number} max maxValue to be included in the range
 * @returns {number}
 */
const getRandomValue = (min, max) => {
  const r = Math.floor(Math.random() * (max - min + 1)) + min;
  return r;
};
module.exports = getRandomValue;
