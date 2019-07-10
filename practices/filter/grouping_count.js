'use strict';

function grouping_count(collection) {

  //implement here
  var result = {};
  collection.forEach((item) => {
       let flag = false;
       for(let key in result){
          if(parseInt(key) == item){
             flag = true;
             result[`"${item}"`] ++;
          }
          if(!flag)
            result[`"${item}"`] = 1;
       } 
  });
  return result;
}

module.exports = grouping_count;
