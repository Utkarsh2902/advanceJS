// let arr=[1,2,5,7,89,2,7,1];
// const k=arr.slice(0,5);
// console.log(k)
// console.log(arr.splice(0,3,4,6))
// console.log(arr)

const item=[
  {name:"Utkarsh",id:123},
  {name:"priyanshi",id:120},
  {name:"sia",id:12},
  {name:"mala",id:120}

]
//filter to remove the unconditional part
const filter_name=item.filter((object)=>{
  return object.id%2==0;
})
//console.log(filter_name)


//map to create new array with new chances from previous

const map_item=item.map((obj)=>{
return obj.name;
})
console.log(map_item)


//forEach doesnot return but iterate only

item.forEach((it)=>{
  console.log(it)
})


// some and every returns true and false as per requirement

const my_fav_id=item.every((obj)=>{
  return obj.id>=12
})
console.log(my_fav_id)


//reduce is used to accumulate

const sum_id=item.reduce((initial,currentsum)=>{
  return  currentsum.id+initial;
},0)
console.log(sum_id)
