const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	let sum = 0;

  for(ele of arr)
    sum += ele;
  return sum;
};

const multiply = function(arr) {
  let product = 1;

  for(ele of arr)
  {
      product *= ele;
  }

  return product;
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(n) {
  let product = 1;

  for(let i = 1; i <= n; ++i)
  {
    product *= i;
  }

  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
