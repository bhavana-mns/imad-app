

//Counter code
var button1=document.getElementById("counter");
var counts=0;

button1.onclick = startCount;
function startCount(){
  counts=counts+1;
  var span=document.getElementById('count');
  span.innerHTML=counts.toString();
}