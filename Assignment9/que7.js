// Q7 Write a function that takes an object with properties width and height and returns the area of a rectangle (width * height).

console.log("-------------Quesion 7-------------");
let rectangle={
    width:10,
    height:5
};
function calArea(rectangle)
{
    return rectangle.width*rectangle.height;
}
console.log("Area of Rectangle:",calArea(rectangle));