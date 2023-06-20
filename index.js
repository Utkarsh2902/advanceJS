let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

let is_store_open=true
let team=()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(console.log("call me sir"))
    },2000)
  })
}

 async function manage(){

  console.log("A")
  console.log("B")
  console.log("C")
  await  team()
  console.log("D")
  console.log("E")
    
   //  catch{
   //    console.log("not allowed")
   //  }
   // finally{
   //   console.log("meet next time")
   // }
 }

manage()
console.log("doing the dishes")
console.log("cleaning the tables")
console.log("taking orders")
































// let order=((time,work)=>{
// return new Promise((resolve,reject)=>{

//   if(is_store_open)
//   {
//     setTimeout(()=>{
//     resolve(work())     
//     },time)
//   }
//   else
//   {
//    reject(console.log("not served"))
//   }
// })  
// })

// order(1000,()=>{
//   console.log(`${stocks.Fruits[0]} is selected`)
// })

// .then(()=>{
//   return order(2000,()=>{
//     console.log("fruits are chopped")
//   })
// })

// .then(()=>{

//   return order(2000,()=>{
//     console.log(`select toppings ${stocks.toppings[0]} `)
//   })
// })
// .then(()=>{
//   return order(2000,()=>{
//  console.log("order is completed")
//   })
// })

// .catch(()=>{
//   console.log("not serving")
// })

// .finally(()=>{
//   console.log("will meet soon")
// }) 