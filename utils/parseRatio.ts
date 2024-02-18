/**
 * Parses a ratio string in the format "x/y" and returns the calculated ratio.
 *
 * @param {string} [ratio] - The ratio string to parse.
 * @returns {number} The calculated ratio as a floating-point number.
 * @throws {string} Throws an error if the input ratio is not in the correct format or if the resulting ratio is invalid.
 */
export function parseRatio(ratio?: string) {
  const parts = ratio?.split('/');

  if (parts?.length !== 2) {
    throw 'Please provide a ratio string in the format "x/y".';
  }

  const numerator = parseFloat(parts[0]);
  const denominator = parseFloat(parts[1]);

  if (!isNaN(numerator) && !isNaN(denominator) && denominator !== 0) {
    return numerator / denominator;
  }

  throw 'Please provide a valid ratio string.';
}
