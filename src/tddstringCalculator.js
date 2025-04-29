function add(numbers) {
  if (!numbers) return 0;

  let delimiters = [",", "\n"];

  if (numbers.startsWith("//")) {
    const delimiterSection = numbers.split("\n")[0];
    const numberSection = numbers.split("\n").slice(1).join("\n");

    const multiDelimiterMatches = [...delimiterSection.matchAll(/\[(.+?)\]/g)];
    if (multiDelimiterMatches.length > 0) {
      delimiters = multiDelimiterMatches.map((m) => m[1]);
    } else {
      const singleDelimiter = delimiterSection.charAt(2);
      delimiters = [singleDelimiter];
    }

    numbers = numberSection;
  }

  const regex = new RegExp(
    delimiters.map((d) => d.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|")
  );

  const numArray = numbers
    .split(regex)
    .map((n) => parseInt(n))
    .filter((n) => !isNaN(n));

  const negatives = numArray.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`Negatives not allowed: ${negatives.join(", ")}`);
  }

  return numArray.filter((n) => n <= 1000).reduce((acc, curr) => acc + curr, 0);
}

module.exports = add;