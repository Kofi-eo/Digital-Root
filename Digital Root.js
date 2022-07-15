function digital_root(n) {
  let result = 0;
  String(n)
    .split("")
    .map((num) => {
      result += Number(num);
    });
  return result >= 10 ? digital_root(result) : result;
}
console.log(digital_root(456));
