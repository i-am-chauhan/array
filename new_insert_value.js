const assert=require('assert');

const insert=function(source,position,newElement){
  let newArray=[];
  let length=source.length;
  let key=0;
  for(let index=0 ; index<=length; index++){
    key=index;
    if(index>=position){
      key=index-1;
    }
    newArray[index]=source[key];
  }
  newArray[position]=newElement;
  return newArray;
}

let array=[12,23,34,45];
let index=4;
let newElement=13;
let result=insert(array,index,newElement);
console.log(result);
//console.log(array);
assert.deepEqual(insert(array,1,newElement),[12,13,23,34,45]);
assert.deepEqual(insert(array,2,newElement),[12,23,13,34,45]);
assert.deepEqual(array,[12,23,34,45]);
//this function is made to insert a newElement to particular index of an newArray. 

