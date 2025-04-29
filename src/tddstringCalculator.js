function add(numbers) {

  if (!numbers) return 0;

  if (!numbers.includes(",") && !numbers.includes("\n")) {
    return parseInt(numbers);
  }

  let delimiters = [",", "\\n"];

  if (numbers.startsWith("//")) {
    const singleDelimiter = numbers.charAt(2);
    delimiters.push(singleDelimiter);
    numbers = numbers.split("\n").slice(1).join("\n");
  }

  const regex = new RegExp(delimiters.join("|"));
  const numArray = numbers.split(regex).map((n) => parseInt(n));
  const negatives = numArray.filter((n) => n < 0);

  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  return numArray.reduce((acc, curr) => acc + curr, 0);

}

module.exports = add;