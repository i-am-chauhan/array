const assert=require('assert');

const insert=function(array,index,newElement){
  let newArray=array.slice();
  let previousValue=newArray[index];
  let currentValue=newElement;
  let length=newArray.length;
  for(let loopIndex=index ; loopIndex<=length; loopIndex++){
    newArray[loopIndex]=currentValue;
    currentValue=previousValue;
    previousValue=newArray[loopIndex+1];
  }
  return newArray;
}

let array=[12,23,34,45];
let index=1;
let newElement=13;
let result=insert(array,index,newElement);
console.log(result);
console.log(array);
assert.deepEqual(result,[12,13,23,34,45]);
assert.deepEqual(array,[12,23,34,45]);
//this function is made to insert a newElement to particular index of an newArray. 

