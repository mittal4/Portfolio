// Object
 /*let rectangle = {
    length : 1, 
    breadth : 2,
 
    draw: function ()
    {
        console.log('drawing rectangle');
    }
    
 };

 /*  Object creation
 1. Factory function 
 2. Constructor function
   

 factory function */

 /* function createRectangle(){
    let rectangle = {
        length : 1, 
        breadth : 2,
     
        draw: function ()
        {
            console.log('drawing rectangle');
        }
        
     };
         return rectangle;
 }
  
 let rectangleObj1 = createRectangle();

//Input from user

 function createRectangle(length, breadth){
    let rectangle = {
         length, 
         breadth,
     
        draw: function ()
        {
            console.log('drawing rectangle');
        }
        
     };
         return rectangle;
 }
  
 let rectangleObj2 = createRectangle(4,5);
 let rectangleObj3 = createRectangle(2,7); */


// Constructor function -> Pascal notation-> first letter opf every word is capiital
 //  properties/methods --> initialise/define 
 // this-> refers to cuurent working object
 // new -> empty object 
function Rectangle(len, bre){
    this.length = len;
    this.breadth = bre;
    this.draw= function(){
        console.log('drawing');
    }
}

//objeect creation using constructor function

let rectangleObject = new Rectangle(4,5);

//dynamic 

rectangleObject.color = 'yellow';
console.log(rectangleObject);

delete rectangleObject.color;
console.log(rectangleObject);


let Rectangle1 = new Function(
    'length','breadth',
    `this.length = length;
    this.breadth = breadth;
    this.draw = function(){
        console.log('drawing');
    }`
);

// Object creation using Rectangle1

let rect = new Rectangle1(2,3);

console.log(rect);

// Primitives are copied by their values
// References are copies by their addresses


//call by reference
let a = {value : 10};
let b = a;

a.value++;


console.log(a.value);
console.log(b.value);

//pass by value or primitive
let c = 10;

function inc(c){  //copy of c is made..so value remains 10
    c++;
};

inc(c);
console.log(c);


let rectangle = {
     length : 2,
     breadth : 5,
};

//for-in loop
// keys are reflected through key variable
// Values are reflected through rectangle[key]

for(let key in rectangle){
    console.log(key,rectangle[key]);
}

//for-of loop -> only iterates -> arrays,maps
//hack for using for-of loop in objects


for(let key of Object.entries(rectangle)){
    console.log(key);
}

//To find if a property exists in object or not

if('color' in rectangle){
    console.log('present')
}
else{
    console.log('Absent')
}

/*Object cloning -> 1. Iteration 
                    2. Assign 
                    3. Spread 

Garbage collector -> used to find out the variables which 
are not in use and deallocate the memoery of these variables
We have no control over garbage collector 


Iteration        
            
let src = {
    a:10,
    b:20,
    c:30
};

let dest = {};

for(let key in src){
    dest[key] = src[key];

}

console.log(dest);

src.a++;
 console.log(dest);

/*
 ASSIGN    
     
 let src = {
    a:10,
    b:20,
    c:30
};

let src2 = {value : 25};

let dest = Object.assign({},src,src2);

console.log(dest);

src.a++;

console.log(dest);
/*
SPREAD   */

let src = {
    a:10,
    b:20,
    c:30
};
 
let dest = {...src};

console.log(dest);

src.a++;

console.log(dest);   
                           

//LECTURE 3
         /*
//In-built Objects

console.log(Math.random());
console.log(Math.round(1.4));

//STRING 

let lastName = 'Babbbar';  // string(primitive)

let firstName = new String('Love');  //object
 
console.log(typeof lastName);

console.log(typeof firstName);


//TEMPLATE LITERAL using `(like pre tag in HTML)

let message = `This is ${lastName},
 

 my 

first message
`;
console.log(message);


//Date and TIME

let date = new Date();

console.log(date);
 
let date2 = new Date('June 20 2004 07:15');

console.log(date2);


//ARRAYS 

let numbers = [1,3,5,7,6];

console.log(numbers);

numbers.push(9);  // used to add number at last

console.log(numbers);

numbers.unshift(2);  // to add number at beginning

console.log(numbers);

numbers.splice(2,0,'a','b','c'); //to add at middle

console.log(numbers);

console.log(numbers.indexOf(3));

console.log(numbers.indexOf(8)); //not present

//we want to check if a number is present in array or not

if(numbers.indexOf(1) != -1)
console.log("present");

console.log(numbers.includes(8)); //will give true or false
     */
let courses = [
    {no:1, naam : 'Love'},
    {no:2, naam : 'Babbar'}
];

console.log(courses);

console.log(courses.indexOf(
    {no:1, naam : 'Love'}));  // cannot use this method for objects
                             // because two are different objects and call back function is used

 /* let course = courses.find(function (course){
        return course.naam == 'Love'
    });
   
    ANOTHER SYNTAX  */
    let course = courses.find(course => course.naam == 'Love');
    console.log(course);

    /*REMOVING ELEMENT => end -> pop()
                          beginning -> shift()
                          middle -> splice(index, no of element deleted)   

   let numbers = [1,2,3,4,5,6,7];
   
   numbers.pop();
   numbers.shift();
   numbers.slice(2,1);

   console.log(numbers);   *

   let numbers = [1,2,3,4,5,6,7];
   let numbers2 = numbers;

   // numbers = [];      => gives numbers a empty array
   //numbers.length = 0;
   numbers.splice(0, numbers.length);

   console.log(numbers);
   console.log(numbers2);

   //COMBINING ARRAY

   let first = [1,2,3];
   let second = [4,5,6];

  // let combined = first.concat(second);
   //SPREAD OPERATOR

   let combined = [...first,...second];


   console.log(combined);
  
   //SLICING ARRAY
   let sliced = combined.slice(2,4);  //sliced(starting index,ending index-1)
   console.log(sliced);

   //copy kaise create kru

   let another = [...combined];
   console.log(another);

//Iterating an array
let arr = [10,20,30,40,50];


for(let value of arr){
    console.log(value);
}

arr.forEach(function (number){
    console.log(number);
});     
 
//JOINING ARRAYS
let numbers = [10,20,30,40,50];
const joined = numbers.join('_');

console.log(joined);

//SPLITTING ARRAYS

let message = 'This is my first message';
let parts = message.split(' ');

console.log(parts);
                     
//SORTING ARRAYS  => ascending order
   /*
let numbers = [40,30,10,20,50];

numbers.sort();

console.log(numbers);

numbers.reverse();
console.log(numbers);

//FILTERING ARRAYS

let number = [1,2,-3,8,-9];

let filtered = number.filter(function(value){
          return value >=0;
});   
 let filtered = number.filter(value => value >= 0);
console.log(filtered);
                  */
//MAPPING ARRAYS -> maps each element of array to something else

let numbers = [7,8,9,10];

let items = numbers.map(function(value){
    return 'student_no'+ value;
});  
console.log(items);   /*

let items = numbers.map(value => 'student_no'+ value);
 
 console.log(items); 
                  
 //Mapping with objects

 let numbers = [1,2,-6,-9];

 let filtered = numbers.filter(value => value >=0);

 let items = filtered.map(function(num){
    let obj = {value : num}             // {} object literal
    return obj;
 });

 console.log(items);
                     */
 //CHAINING
  //let numbers = [1,2,-6,-9];


  /* let items = numbers.filter(value => value >=0).map(function(num){
    let obj = {value : num}             
    return obj;
 });

 console.log(items);

//Lecture 4
// FUNCTIONS

//Function syntax
function run(){
    console.log("running");
}

//function call or invoke

run();      //can even write it above function

//function assignment
                    /*
let stand = function walk(){
    console.log('walking');
};
stand();   //walk(); =>not possible
           // also cannot call stand above function assignment as we are storing it in variable

           let jump = stand;
           jump();            */

// ANONYMOUS FUNCTION ASSIGNMENT   
let stand = function (){
console.log('walking');
};
stand();

function sum(a,b){
    return a+b;
}

console.log(1,2);
console.log(1);    //b is not a number gives undefined
console.log(1,5,7,3);  // gives 6

function sum(a,b){
    console.log(arguments);
    return a+b;
}
//DYNAMIC FUNCTION  
function sum(a,b){          //can also be written as sum()
    let total = 0;
    for(let value of arguments)
        total = total + value;
        return total;
    
}
let ans = sum(1,2,3,4,5,6,7,8);
console.log(ans);

// ... REST OPERATOR  => parameters can be held before rest but not after it

function sum2(...args){
    console.log(args);
}

sum2(1,2,3,4,5,6); //stored in form of array

//DEFAULT PARAMETERS  => parameter which would be used when user does not give the value
 /*
function interest(p,r,y){
    return p*r/100*y;
}
console.log(interest(1000, 10, 5));
console.log(interest(1000,  5));  //gives error

//example of default para
function interest(p,r=5,y=10){           //here r and y are default parameters
    return p*r/100*y; 
}
console.log(interest(1000,6));  //runs here

let person = {
    fname : 'love',
    lname : 'babbar'

};

// console.log(person);


/* GETTER => access properties
   SETTER => change or mutate properties   

function fullName(){
    return `${person.fname}   ${person.lname}`; 
}                                                         //read ony function                  
console.log(fullName());           */

let person = {
    fName : 'love',
    lName : 'babbar',
    get fullName() {
        return `${person.fName}  ${person.lName}`;
    },
     set fullName(value){
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName= parts[1];
     }
};

console.log(person.fullName);
person.fullName = 'Rahul Kumar' ;
console.log(person.fullName);

//TRY AND CATCH => error handling

try {
    person.fullName = 1;
}
catch(e) {        //e stands for error
    alert('You have sent a number in full name');

}

/*SCOPE => let -> {}
        => var -> function, if not function then entire file   */

        function bc(){
             const ab =5;
        }

        const ab =6;

        function db(){
            const ab= 8;
        }

// REDUCING AN ARRAY



