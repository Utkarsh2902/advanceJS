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

//***10 Find the Max and Min in the Array

var arrr=[12,2,11,4,5,6,7,8,0]

// console.log(Math.max(...arr))
// console.log(Math.min(...arr))

//***11=> Second Largest in array

var arrr=[12,2,11,4,5,6,7,8,0]

var highest=Math.max(...arrr)
//console.log(highest)

var index = arrr.indexOf(highest)
//console.log(index)

arrr.splice(index,1)
//console.log(arrr)
var secondhighest=Math.max(...arrr)
//console.log(secondhighest)

//****12=> JS Function to reverse a Number

function reverse(num){
  var rev=0
  while(num>0){
    var rem=num%10
    num=Math.floor(num/10)
    rev=rev*10+rem
    
  }
   //console.log(rev)
//shortcut
 // console.log(num.toString().split("").reverse().join("")
}
reverse(123445)

//***13=>function to check palindrome or not


function palindrome(str)
{

  var newstr=str.split("").reverse().join("")
  if(str==newstr)
  {
//console.log("true")
  }
  else
  {
    //console.log("false")
  }
  
}
palindrome("abcdcba")

//***14=> function that return string in alphabetical order

function alpha(str){
return str.split("").sort().join("")
  
}
//console.log(alpha("dcba"))

//***15=> function convert first letter upper case of string

function upper(str){
 var newstr= str.split(" ").map(function(word){
   return word.charAt(0).toUpperCase()+word.substring(1)
  })
 // console.log(newstr)
}
upper("my name is utkarsh gupta")


//***16=> function to return the type of the argument

function type(arg){
  return typeof arg
}
//console.log(type(""))


//17=> find missing elements in array

var arr2=[];
function missing(arr){
  var min=Math.min(...arr)
  var max=Math.max(...arr)

  for(var i=min;i<max;i++){
     if(arr.indexOf(i)<0)
     {
     arr2.push(i)  
     }
    }
  return arr2;
}
//console.log(missing([1,3,4,6,7,8]))

//18=>sum all elements in array

function sum(arrr)
{
  // var sum1=0;
  // for(var i=0;i<arrr.length;i++)
  //   {
  //     sum1+=arrr[i]
  //   }
  // return sum1;
  //better and short
  return arrr.reduce(function(a,b){
    return a+b
  })
}
//console.log(sum([1,2,3,4,5]))

//19=> factorial for a number

function fact(num){
  temp=1
  while(num>1)
    {
      temp=temp*num
      num--
    }
  return temp
}
//console.log(fact(4))

//20 prime number

function prime(num){
  for(var i=2;i<num;i++){
    if(num%i==0)
    {
      return false
    }
    else
      return true
  }
}
//console.log(prime(33))