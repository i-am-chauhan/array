let array1=[56,67,89,678,6787,87];
let array2=[9,10,56,67,89,67,14];
let array3=[56,13,14,67,89];
let array4=[56,67,454,65];

const testArray=function(array1){
  let result={};
  for(let index=0; index<array1.length; index++){
    result[array1[index]]=array1[index];
  }
  return result;
}

const intersection=function(firstSource,secSource){
  let answer=[];
  for(let index=0; index<secSource.length; index++){
    if(secSource[index]==firstSource[secSource[index]]){
      answer.push(secSource[index]);
    }
  }
  return answer;
}

let firstResult=intersection(testArray(array1),array2);
let secResult=intersection(testArray(firstResult),array3);
let finalResult=intersection(testArray(secResult),array4);
console.log(finalResult);
