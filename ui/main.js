console.log('Loaded!');

//Change contents of main-text div
var element = document.getElementById('main-text');
element.innerHTML='New value';

//Move the image
var img=document.getElementbyId('img');
img.onclick=function(){
  img.style.marginLeft = '100px'  ;
};