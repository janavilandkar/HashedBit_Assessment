// Q6 Create an object called person with properties for name, age, and occupation. Write a function that logs a greeting message using these properties.

console.log("-------------Quesion 6-------------");
const person={
    name: "Janavi",
    age: 22,
    occupation: "Software Developer"
};
function greetPerson(person)
{
    console.log("Hello my name is "+person.name+". I am "+person.age+" years old and I work as a "+person.occupation);
}
greetPerson(person);