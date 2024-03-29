const convertToCelsius = function(temp) {
  let ans = (temp - 32) * (5 / 9);
  
  if(Number.isInteger(ans))
    return ans;

  return Math.round(ans * 10) / 10;
};

const convertToFahrenheit = function(temp) {
  let ans = (9 / 5) * temp + 32;

  if(Number.isInteger(ans))
    return ans;

  return Math.round(ans * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
