'use strict';

function grouping_count(collection) {

  //implement here
  let result = collection.reduce((initValue, cur)=>{
    if(cur in initValue)
      initValue[cur]++;
    else
      initValue[cur] =1;
    
    return initValue;
  },{});
  return result;
}

module.exports = grouping_count;
