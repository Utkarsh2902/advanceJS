
//sort without methods

 let arr=[8,7,9,0,4,4]
// let temp;
// let flag=false
// while(!flag)
//   {
//     flag=true
//     for(let i=1;i<arr.length;i++)
//       {
//         if(arr[i-1]>arr[i])
//         {
//           flag=false
//          temp=arr[i-1];
//           arr[i-1]=arr[i]
//           arr[i]=temp
//         }
//       }
    
//   }
// console.log(arr)


//**max min with function in Array

// const min1=Math.max(...arr)
// console.log(min1)
//**max min without function in Array
// const newarr= (pre,cur)=>{
//     return pre>cur?pre:cur
//   }
// console.log(arr.reduce(newarr))


//**Second Largest Number
// var funfun=(arr1)=>{
//  var max= Math.max(...arr1)
//  var ind=arr.indexOf(max)
//   arr1.splice(6,1)
//   var max1= Math.max(...arr1)
//   return max1
// }
// console.log(funfun(arr))

//**sum of all
// const summ=(pre,cur)=>{
//   return pre+cur;
// }
// console.log(arr.reduce(summ))

//**find missing from 1 to 10

// var min1=Math.min(...arr)
// var max1=Math.max(...arr)
// var arr2=[];
// for(let i=1;i<max1;i++)
//   {
//     if(arr.indexOf(i)<0)
//     {
//       arr2.push(i)
//     }
//   }
// console.log(arr2)

//**factorial
// let fact=1
// for(let i=1;i<=arr;i++)
//   {
//     fact=fact*i
//   }
// console.log(fact)

//**prime number

// for(let i=2;i<arr;i++)
//   {
//     if(arr%i==0)
//     {
//       console.log("not prime")
//       break;
//     }
//     else
//     {
//       console.log("prime")
//     }
//   }


//reverse

// var arr1=arr.split("")
// var strtoarr=arr1.reverse()
// var arrtostr=arr1.join("")
// console.log(arrtostr)


//palindrome

// var strtoarr=arr.split("")
// var strtoarr1=strtoarr.reverse()
// var arrtostr=strtoarr1.join("")
// if(arrtostr==arr)
// {
 
// console.log("yes palin") 
// }
// else{
//   console.log("not")
// }

//**merge

//method1
// const mergearr=[...arr,...arr1]
// console.log(mergearr)
//method2

// const merge=arr.concat(arr1)
// console.log(merge)

//**duplicate

// const duparr=arr.filter((item,index,arr)=>arr.indexOf(item)!=index)
// console.log(duparr)