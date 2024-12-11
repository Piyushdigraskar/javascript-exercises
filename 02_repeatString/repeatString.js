const repeatString = function(givenStr, num) {
       let str = '';
       if(givenStr === '' || num === 0){
              return '';
       }
       if(num < 0) {
              return "ERROR";
       }
       for(let i = 0; i < num;i++){
              str += givenStr;
       }
       return str;
};

// Do not edit below this line
module.exports = repeatString;
