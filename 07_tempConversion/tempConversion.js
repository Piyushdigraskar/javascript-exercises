const convertToCelsius = function(temp) {
  const celVal = Math.floor((temp - 32)*5/9)/10;
  return celVal;
};

const convertToFahrenheit = function(temp) {
  const farVal = Math.floor((temp * 9/5) + 32)/10;
  return farVal;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
