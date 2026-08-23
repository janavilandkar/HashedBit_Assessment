// Q8 Given an object with various properties, write a function that returns an array of the object’s keys using Object.keys().

console.log("-------------Quesion 8-------------");
const employee={
    name: "Janavi",
    age: 22,
    occupation: "Software Developer"
};
function getKeys(obj)
{
    return Object.keys(obj);
}
console.log("Object keys:",getKeys(employee));