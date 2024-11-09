console.log("Hello");
name="Nipun"
console.log(name);
x=null;
console.log(x);
y="undefined";
console.log(y);
price=25.78;
console.log(price);
isfollow=false;
console.log(isfollow);

let fullName="Tony";
console.log(fullName);
let a;
console.log(a);

/*student -> object 
cont will change when all variable of object is changed*/

const student=
{
   fullName:"Nipun Mittal" ,
   cgpa:9.1,
   age : 19,
   isPass:true

};
console.log(student.age);
console.log(student["fullName"]);

student["age"] = student["age"] + 5;
console.log(student.age);




/* Lecture 2 */
 // arithmetic operator
let c = 6;
let b = 8
d = c*b;
console.log("c + b = ",c+b);
console.log("c * b = ",d);

//Unirary operator

let e = 8;
e++;
console.log(e);

/*ternary operator
age>=18? "adult" : "not adult" */

//Lecture 3

// Sum of 5 numbers
let sum =0;
for(let i = 1; i <= 5; i++)
{
   sum = sum + i;
}
console.log("sum = ",sum);

//Print 1 to 5
for( let i = 1; i <= 5; i++){
   console.log("i = ",i);
}

let i = 1;
while(i <= 5){
   console.log("i = ",i);
   i++;
}

//for of loop
 let str = "NipunMitttal";

let size = 0;
for(let i of str){  //itterator -> character
   console.log("i = ",i);
   size++;
}
console.log("string size = ",size);

//for-in loop

let stud = {
   name: "Nipun Mittal",
   age : 19,
   cgpa : 8.5,
   isPass : true,
};

for ( let key in stud){
   console.log("key = ",key, "value = ", stud[key]);
}


//Even numbers

for(i =0; i <= 100; i++){
   if(i % 2 == 0)
   {  console.log(i)
   }
}
 
/*game number
let gameNum = 87;

let userNum = prompt("guess game number");
console.log(userNum);
while(gameNum != userNum){
  userNum = prompt("You enetred wrong number,guess game number")


}
console.log("Right")

//String
 
/* for length  -> str.length

index start from 0
size=index+1 */

// Template literal -> special string

let spString=`This is a template literal`;
console.log(typeof spString);

let obj = {
   item : "pen",
   price : 10,

};

let output = `the cost of ${obj.item} is ${obj.price} rupees`
console.log(output);

console.log("the cost of", obj.item ,"is", obj.price, "rupees");

// // \n -> next line( escape character)
// // \t -> tab space
// console.log("Apna \n college")

// /* str.toUpperCase() -> capital letters

// //Love babbar lecture 2

// //Objects */


// let rectangle = {
//    length : 1, 
//    breadth : 2

   
// }
console.log(document)





