function add(numbers) {

  if (!numbers) return 0;

  if (!numbers.includes(",") && !numbers.includes("\n")) {
    return parseInt(numbers);
  }

}

module.exports = add;