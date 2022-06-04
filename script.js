//variables
let btn1 = document.querySelector("#btn-1");
let btn2 = document.querySelector("#btn-2");
let tp = document.querySelector('#tania-p');
let jp = document.querySelector('#jhon-p');
let th = document.querySelector('.tania-h');
let jh = document.querySelector('.jhon-h');
let timg=document.querySelector('.hero-img');
let jimg=document.querySelector('.hero-img-2')

//listener
btn1.addEventListener('click', myfun);
btn2.addEventListener('click', myfun);

//function
function myfun() {
  let disp = getComputedStyle(tp).display;
  //condition
  if(disp=='block') {
    tp.style.display = 'none';
    timg.style.display= 'none';
    th.style.display = 'none';
    jp.style.display = 'block';
    jh.style.display = 'block';
    jimg.style.display = 'block';
  }
  else {
    tp.style.display = 'block';
    th.style.display = 'block';
    timg.style.display= 'block';
    jp.style.display = 'none';
    jh.style.display = 'none';
    jimg.style.display = 'none';
  }
}