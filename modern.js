/*WINDOW    => global object  
  DOM => document object model => convert complete html code to object
  BOM => browser object model => communicate to anything except content of web page 

  //getElementbyId('Id') => used to fetch element whose id we enter
                        => it return a single Object
                        => it is called on document object

    getElementsbyClassName()
    getElementsbyTagName()      => both use document object
                                => both returns multiple items
                                => list returned is not array 
                        
 queryselector('header')  => to select element with tag header
 queryselector('#header') => to select element with id header
 queryselector('.header') => to select element with class header

 querySelectorAll()   => to get all elements

 UPDATE EXISTING CONTENT  => .innerHTML => get an element or its descendant
                                          /set elements HTML content/HTML property
                                          => render inner tags
                                          
                             .outerHTML
                             .textContent =>  get/set textual content
                                          => treats tag as text
                                          => show content whose display is hidden

                             .innerText   =>  get/set textual content
                                          => does not show content whose display is hidden

  ADD NEW CONTENT    => .createElement(); => to create new element
                     => content.appendChild_____(); => to add new element
                     => always added at last

 CREATING TEXT NOTE   => .textContent    
 
 POSITION NEWLY CREATED ELEMENT    => .inerAdjacentHTML(); => has to be called with 2 arguments -> location/position -> beforeBegin,afterBegin,beforeEnd.afterEnd
                                                                                                -> HTML context

 REMOVE ELEMENT => .removeChild() => parent.removeChild('childElement') -> opposite of append child
                                                                        -> parent element & element to be removed

                                                                       => parent can be find out by childElement.parent

  CSS 

              .style =>  content.style.color
                     => content.style.backgroundcolor(red);
                      
              .style.cssText => multiple property can be changed

              .setAttribute("style", color:orange);

              .className => get string of class names
                            use split method to separate different class names


  LECTURE 2

  BROWSER EVENTS => like double click,scroll....

  monnitorEvents() => can see if any event happens 
  unmonitorEvents() => to stop watching events

  EventTarget() => top level interface(blueprint) implemented by object that can recieve events and may have listeners(action after event happens) for them

               => addEventListener()
               => removeEventListener()
               => dispatchEvent()
    //


*/
//ADDING 100 PARA
const t1 = performance.now();
for(i=0;i<=100;i++){
       let newElement = document.createElement('p');
       newElement.textContent = 'this is para' +i;

       document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("1 took"+ (t2-t1) + "ms");


//Optimsing
const t3 = performance.now();
let myDiv = document.createElement('p');

for(let i =1;i<=100;i++){

       let element = document.createElement('p');
       element.textContent = 'this is paraaa'+i;

       myDiv.appendChild(element);
}

document.body.appendChild(myDiv);
const t4 = performance.now();

console.log("2 took"  +(t4-t3) +"ms");

//FRAGMENT

let fragment = document.createDocumentFragment();
for(i=0;i<=100;i++){
       let newElement = document.createElement('p');
       newElement.textContent = 'this is para' +i;

       document.body.appendChild(newElement);
}
document.body.appendChild(fragment);  //1 reflow and 1 repaint

function addPara(){

       let para = document.createElement('p');
       para.textContent = 'hello';
       document.body.appendChild(para);
}

function appendNewMessage(){
       let para = document.createElement('p');
       para.textContent = 'how r u';
       document.body.appendChild(para);
}

addPara();                  // doesnot execute multiple functions at same time
appendNewMessage();        //line by line execution
                            // run to completion

//LECTURE 4

let meraPromise = new Promise(function(resolve,reject){
     setTimeout(function(){ 
        console.log('i am inside promise');
       },5000)
        // resolve(1998);
        reject(new Error('ERROR'))
})
console.log("pehla");

let wada1 = new Promise(function(resolve, reject) {
       setTimeout(()=>{
              console.log('setTimeout1 started');
       },2000);
       resolve(true);
})

wada1.then(() => {
       let wada2 = new Promise(function(resolve, reject){
              resolve("wada 2 resolved");
       
       })
       return wada2;
}).then((value)=> console.log(value));
