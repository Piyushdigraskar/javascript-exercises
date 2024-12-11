const removeFromArray = function(arr, ...num) {
       let newarray = arr.filter((ele)=>{
             return ele != num;
       })
       return newarray;
};

// Do not edit below this line
module.exports = removeFromArray;
