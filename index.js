//callback functions
function money(id){
console.log(`my name is utkarsh ${id}` )
} 

function reg(num1,num2,money){
  let sum=num1+num2;
  money(sum);
  console.log(`need your id ${sum}`)
}
reg(6,7,money);
