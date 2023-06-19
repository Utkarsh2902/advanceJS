
//call back function with setTimeout and which leads to callback hell 
// better use promises
let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`your order ${stocks.Fruits[fruit_name]}`)
    setTimeout(() => {
      console.log("cut the fruit")
      setTimeout(() => {
        console.log(`add ${stocks.liquid[0]} and ${stocks.liquid[1]}`)
        setTimeout(()=>{
          console.log("start the machine")
          setTimeout(()=>{
           console.log(`select container ${stocks.holder[0]}`) 
            setTimeout(()=>{
              console.log(`select toppings ${stocks.toppings[0]} `)
              setTimeout(()=>{
                console.log("ice cream is ready")
              },2000)
            },3000)
          },2000)
        },1000)
      }, 1000)
    }, 2000)
    call_production();
  }, 2000)

}
let production = () => {
  console.log("go for production")
}
order("0", production)


// setTimeout(()=>{
//   console.log("hey after 2 sec")
// },2000)
// setTimeout(()=>{
//   console.log("hey after 2 sec")
// },2000)
//   setTimeout(()=>{
//   console.log("hey after 2 sec")
// },0000)