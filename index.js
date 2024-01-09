const { isArray } = require("util");

//***1=> Reverse a string
var str = "utkarsh";
// var s= str.split("")
// s.reverse()
// console.log(s.join(""))

//one liner
//console.log(str.split("").reverse().join(""))

//***2=> checking array or object

var a=[]
var b={}
//console.log(isArray(b))

//***3=> how to emply an array

var arr=[1,2,3,4,5]
arr.length=0;
//console.log(arr)

//***4=> how to check if it is interger or not

var a=10.5;
// console.log(Number.isInteger(a))//yes
// console.log(a%1==0)

//***5=> this duplicate array
var arr=[1,2,3]
//console.log(arr.concat(arr))

//***6=> how to find duplicates
var arr=[11,44,55,55,7,2,2]
var a=arr.filter((element,index,array)=>array.indexOf(element)!==index)
//console.log(a)