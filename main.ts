/*
============================================
======================
TYPES OF VARIABLES
*/

/*=============================================
Steing
======================
*/

/*
const var1 = "Afaeid"

let str = `Hello, it's ${var1}`
console.log(str);
*/



/*=============================================
Number
======================
*/

/*
let var1 = 192992;

console.log(var1);
*/



/*============================================
Boolean
======================
*/
/*
let var1 = 5>10
const var2 = 15<20
console.log(var1,var2);*/

// Falsy values: '', null, 0, undefined



/*=============================================
String
======================
*/

/*
const var1 = "Afaeid"

let str = `Hello, it's ${var1}`
console.log(str);

*/

/*
=================================

Lec 5= : Type assignmenst & Type inferance

===================================*/

/*
let num1 : string = "Hello"

let num2 : number = 123
let num3 : boolean = true

console.log(num1, num2, num3)

let add = (num1: number, num2: number, num3: boolean) => {
    return { sum: num1 + num2, isTrue: num3 };
}

console.log(add(5, 10, true))
*/

/*
===========================
Lec:06 (Object data type)
*/

/*

let person : { name: string; age: number; address: { city: string; country: string; region: string } } = {
    name: "Afaeid",
    age: 30,
    address:{
        city: "New York",
        country: "USA",
        region: "North America"
    }
}
console.log(person.gender);

console.log(person.address.city)
*/


/**
 ================================================
   Lec: 07 (Array Data Type)
 ================================================
 */

/*
let names = ["Alice", "Bob", "Charlie"]
let birthYears = [1990, 1985, 1995]
let isActive = [true, false, true]

names.push(209)
birthYears.push("David")
*/
/*
let names : string[] = ["Alice", "Bob", "Charlie"]
let birthYears : number[]= [1990, 1985, 1995]
let isActive : boolean[] = [true, false, true]

// let persons: (string | number)[] = ["Asad", 127, {city: "New York", country: "USA"}]
// let persons: (string | number | object )[] = ["Asad", 127, { city: "New York", country: "USA" }]

for (let name of names){
    console.log(name)
}
*/


/*
================================================
   Lec : 08 (Tuple Data Type)
================================================
*/

/*


let person : [number, string, number, boolean] = [13678, "Mark", 7890, false]

person = [6889, "John", 8000, false]

person.push("Regular")

console.log(person)


*/


/*
================================================
   Lec : 09 (Enums Data Type)
================================================
*/



