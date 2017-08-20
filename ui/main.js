
/**
//Change contents of main-text div
 var element = document.getElementById('main-text').innerHTML='New value';
 
 
 //Move the image
 var img=document.getElementById('madi');
 var marginLeft = 0;
 function moveRight(){
     marginLeft+=1;
     img.style.marginLeft = marginLeft + 'px';
 }
 img.onclick=function(){
   var interval = setInterval(moveRight,50);
 };
 **/ 
/**

//Counter code
var button=document.getElementById('counter');
//var counter=0;

button.onclick = function(){
    //Create request object
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readystate === XMLHttpRequest.DONE){
            if(request.status===200){
                var counter = request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    }
    
    request.open('GET','http://mnsbha12362.imad.hasura-app.io/counter',true);
    request.send(null);
    
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};  **/
/**

//Submit Name
var nameInput = document.getElementById('name');
//var name = nameInput.value();
var submit = document.getElementById('submit_btn')
submit.onclick = function(){
  //Make request to server and send name
  
  //Capture a lost of names and render it
  var names=['name1','name2','name3','name4'];
  var list='';
  for (var i=0;i<names.length;i++){
      list=='<li>' + names.i + '</li>';
  }
  var ul=document.getElementById('nameList');
  ul.innerHTML=list;
  
}; **/



