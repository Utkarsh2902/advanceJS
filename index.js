
//call back function with setTimeout and which leads to callback hell 

// better use promises
let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let store_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (store_open) {
      setTimeout(() => {
        resolve(work())
      }, time)

    }
    else {
      reject(console.log('it is closed'))
    }
  })
}

order(1000, () => console.log(`${stocks.Fruits[0]} is selected`))

.then(()=>{
return order(1000, () => console.log(`waitingg.....`)) 
})
.then(()=>{
  return order(1000,()=> console.log("i am hungry pls do fast"))
})


.catch(()=>{
  console.log("failed")
})

.finally(()=>{
  console.log("will come later soon")
})