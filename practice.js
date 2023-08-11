// console.log('hello world')
// ********************* Variable Part Learning ************************************
// write a variable on javascript provide three keywods
// 1. let 2. var 3. const

// let age; // declatarion
// age = 20; //assignment

// let num = 10; // delcatarion and assignment
// let teacherName; //camel case
// let teacher_name; // snake case

// console.log(typeof num)
// const name; // worng method in constant

// const fatherName = "Naresh Mandal";
// // console.log(fatherName)
// fatherName = "PANKAJ KUMAR"
// console.log(fatherName)

// ************************** DataType *************************************************

// 1. Number
// 2. String
// 3. Boolean
// 4. Null
// 5. Undefiend
// 6. NaN
// 7. Object
// 8. Symbole

// Example of data Type......................
// 1. Nubmber 
// let num= 10;
// let num2= 10.5;
// let num3 = 10.555;

// console.log(num)
// console.log(num2)
// console.log(num3)

// console.log(typeof num)
// console.log(typeof num2)
// console.log(typeof num3)


// 2. String Data Type ........................

// const name = 'ankit';
// console.log(typeof name)

// 3. Boolean Data Type .......................

// let trueName = true;
// console.log(typeof trueName)

// let num1=2;
// let num2=2;

// let comparision = num1<=num2;
// console.log(comparision)
// console.log(typeof comparision)

// 4. Null Data Type ..........................
//  let number = null;
//  console.log(typeof number)

// 5. Undefiend data Type ......................
// let num;
// console.log(typeof num);

// // 6. NaN data Type ...........................
// let reslt = "I am string"/2;
// console.log(reslt)

// let x=2;
// let xx;
// xx=x++;
// console.log(xx);

// let yy;
// yy=++x;
// console.log(yy)

// let _data="My name is"
// // console.log(_data[6])
// let upperCase=_data.toUpperCase();
// console.log(upperCase)

// let lowerCase=_data.toLowerCase()
// console.log(lowerCase)

// let firstName="ankit";
// let LastName="kumar"

// let fullName=firstName+" - "+LastName;
// console.log(fullName);

// Area of Trangle work
// const basedValue=prompt("Enter the base of a triangle");
// const hightValue=prompt("Enter the hight of a triangle");

// //calculate the area
// const areaValue= (basedValue*hightValue)/2;

// console.log(`The area of the triangle is ${areaValue}`);
// Area of three side value.......................
// let side1=parseInt(prompt("Enter side1: "));
// let side2=parseInt(prompt("Enter side2: "));
// let side3=parseInt(prompt("Enter side3: "));

// // calculate the semi-perimeter
// const semiPerimeter=(side1+side2+side3)/2;

// //calculate the area 
// let areaValue=Math.sqrt(semiPerimeter*(semiPerimeter-side1)*(semiPerimeter-side2)*(semiPerimeter-side3));

// console.log(areaValue);

// JavaScript Swiping two variable

let num1=parseInt(prompt("Enter first number"));
let num2=parseInt(prompt("Enter second number"));

let temp;

temp=num1;
num1=num2;
num2=temp;

console.log(`The num1 value of after swaping: ${num1}`)
console.log(`The num2 value of after swaping: ${num2}`)
