function add(numbers) {

  if (!numbers) return 0;

  if (!numbers.includes(",") && !numbers.includes("\n")) {
    return parseInt(numbers);
  }

  let delimiters = [",", "\\n"];
  const regex = new RegExp(delimiters.join("|"));
  const numArray = numbers.split(regex).map((n) => parseInt(n));
  return numArray.reduce((acc, curr) => acc + curr, 0);

}

module.exports = add;