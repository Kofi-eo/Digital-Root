function digital_root(n) {
  let result = 0;
  let num = String(n).split("");

  for (i = 0; i < String(n).length; i++) {
    result += Number(num[i]);
  }

  return result >= 10 ? digital_root(result) : result;
}

//EXAMPLE TEST
console.log(digital_root(12)); //Result ---> 3
