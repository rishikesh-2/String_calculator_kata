const DEFAULT_DELIMITER = ",";
const NEW_LINE_DELIMITER = /[\n]+/;

const CUSTOM_DELIMITER_LINE = /^\/\/(?<delimiter>.+)$/m;
const FIRST_LINE = /^(.*)$/m;

function add(numbers) {
  const isEmpty = numbers === "";
  if (isEmpty) {
    return numbers;
  }

  let customDelimiter = null;

  const hasCustomDelimiter = CUSTOM_DELIMITER_LINE.test(numbers);
  if (hasCustomDelimiter) {
    const match = CUSTOM_DELIMITER_LINE.exec(numbers);
    customDelimiter = match.groups.delimiter;
    numbers = numbers.replace(FIRST_LINE, "").substr(1);
  }

  const delimiter = customDelimiter || DEFAULT_DELIMITER;
  numbers = numbers.replace(NEW_LINE_DELIMITER, delimiter);

  const integers = numbers
    .split(delimiter)
    .map((n) => parseInt(n))
    .filter((n) => n <= 1000);
  const negativeNumbers = integers.filter((n) => n < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(`negatives not allowed: ${negativeNumbers.join(",")}`);
  }

  return integers.reduce((acc, curr) => acc + curr, 0);
}

module.exports = add;
