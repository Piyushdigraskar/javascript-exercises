const leapYears = function(year) {
       const isDivisibleby4 = year%4 === 0;
       const isDivisibleby400 = year%400 === 0;
       const isCentury = year%100 === 0;
       if(isDivisibleby4 && (!isCentury || isDivisibleby400)){
              return true;
       }else{
              return false;
       }
};

// Do not edit below this line
module.exports = leapYears;
