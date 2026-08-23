//Q1 Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?
console.log("-------------Quesion 1-------------")
function scopeEx(){
    var a=10;
    let b=20;
    const c=30;

    console.log("Inside Function");
    console.log("var a: ",a);
    console.log("let b: ",b);
    console.log("const c: ",c);

    if(true)
    {
        var x=10;
        let y=20;
        const z=30;

        console.log("Inside Function");
        console.log("var x: ",x);
        console.log("let y: ",y);
        console.log("const z: ",z);
    }
    console.log("Outside Function");
    console.log("var x: ",x);  //work
    //console.log("let y: ",y);  Error
    //console.log("const z: ",z);  Error
}
scopeEx();