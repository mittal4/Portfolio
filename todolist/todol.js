
const box = document.querySelectorAll('.box');
const body = document.querySelector('body');

box.forEach(function (box) {
  console.log(box);
  box.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
  
    if (e.target.id === 'green') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'red') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'black') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

console.log('hi');