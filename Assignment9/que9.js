// Q9 Write a function that takes two objects as arguments and merges them into one object using Object.assign(). Return the new object.

console.log("-------------Quesion 9-------------");
let obj1={
    name:"Janavi",
    age:22
};
let obj2={
    city:"pune",
    course:"Java"
};
function mergeObj(object1,object2)
{
    return Object.assign({},object1,object2);
}
console.log("Merge object:",mergeObj(obj1,obj2))