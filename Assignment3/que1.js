// Q1 Create an array of states in india.
// Remove all the names starting with vowels from the list. Use array.filter.

let states=[
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];

function removelVowelState(stateArray)
{
    const vowels=['A','E','I','O','U'];
    let new_array=stateArray.filter(val=>{
        let firstletter=val.charAt(0).toUpperCase();
        return !vowels.includes(firstletter);
    });
    return new_array;
}
let filterArray=removelVowelState(states);
console.log(filterArray);