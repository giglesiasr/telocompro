let counter = document.querySelector('.counter');
let count = 0;

function cambiarCounter(hola){
  if (hola == plus){
    count ++;
  } else if (hola == minus){
    count --;
  } else{
    count = 0;
  }
  if (count > 20){
    counter.style.color= 'green'
  }
  if (count >= 0 && count <= 20) {
    counter.style.color = "grey";
  }
  if (count < 0) {
    counter.style.color = "red";
  }

  counter.innerHTML= count;
}
