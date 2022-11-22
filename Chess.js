const ball = document.querySelector(".toogle-ball");
const items = document.querySelectorAll(
  "body,.heading,.chess,.rest,.toogle,.button,.toogle-icon,.pause,.overlay,.slider,.onoff,.cons:hover,.cons"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
    if(document.getElementById("ball").className=='toogle-ball active')
    {
     var x = document.getElementById("Mode");
     x.innerHTML='Night-mode';
    }
    else
    {  var x = document.getElementById("Mode");
    x.innerHTML='Light-mode';
      
    }
    
  });
  ball.classList.toggle("active");

});



var bgm = new Audio("bgm.mp3");
var cick = new Audio("click.mp3");




document.querySelector('button').addEventListener('click', function () {
  const icon = this.querySelector('i');


  if (icon.classList.contains('fa-play')) {
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
    bgm.play();
    document.getElementById("onoff").innerHTML = 'Sound on'


  } else {
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
    bgm.pause();
    document.getElementById("onoff").innerHTML = 'Sound off'
  }
});


function myclick1() {
  cick.play();
  cick.playbackRate = 2;

}
function myclick2() {
  cick.play();
  cick.playbackRate = 2;

}
function myclick3() {
  cick.play();
  cick.playbackRate = 2;
  document.getElementById("myNav").style.width = "100%";
}
function myclick_4() {
  cick.play();
  cick.playbackRate = 2;
  document.getElementById("myNavtwo").style.width = "100%";


}
function closeNav() {
  cick.play();
  document.getElementById("myNav").style.width = "0%";
  document.getElementById("myNavtwo").style.width = "0%";
}

function onoff() {
  var x = document.getElementById("onoff");
  if (x.innerHTML == 'Sound on') {
   x.innerHTML = 'Sound off';
    bgm.pause(); 
    var z = document.getElementById("Mode");
  if(z.innerHTML=='Night-mode')
    document.getElementById("player").className= 'cons fa fa-play';
   else
    document.getElementById("player").className= 'cons fa active fa-play';
  }
  else {
    x.innerHTML = 'Sound on';
    bgm.play();
    var z = document.getElementById("Mode");
    if(z.innerHTML=='Night-mode')
    document.getElementById("player").className= 'cons fa fa-pause';
    else
    document.getElementById("player").className= 'cons fa active fa-pause';

  }
  






}

function Mode()
{
  var x = document.getElementById("Mode");
  if (x.innerHTML == 'Night-mode') {
    x.innerHTML = 'Light-mode';
    const ball = document.querySelector(".toogle-ball");
    const items = document.querySelectorAll(
      "body,.heading,.chess,.rest,.toogle,.button,.toogle-icon,.pause,.overlay,.slider,.onoff,.cons:hover,.cons"
    );
    items.forEach((item) => {
      item.classList.toggle("active");
      if(document.getElementById("ball").className=='toogle-ball active')
      {
       var x = document.getElementById("Mode");
       x.innerHTML='Night-mode';
      }
      else
      {  var x = document.getElementById("Mode");
      x.innerHTML='Light-mode';
        
      }
    });
    ball.classList.toggle("active"); 
    
   }
   else {
     x.innerHTML = 'Night-mode';
     const ball = document.querySelector(".toogle-ball");
     const items = document.querySelectorAll(
       "body,.heading,.chess,.rest,.toogle,.button,.toogle-icon,.pause,.overlay,.slider,.onoff,.cons:hover,.cons"
     );
     items.forEach((item) => {
       item.classList.toggle("active");
       if(document.getElementById("ball").className=='toogle-ball active')
       {
        var x = document.getElementById("Mode");
        x.innerHTML='Night-mode';
       }
       else
       {  var x = document.getElementById("Mode");
       x.innerHTML='Light-mode';
         
       }
     });
     ball.classList.toggle("active"); 
     
   }   


}

function myclick8()
{
  cick.play();
  window.close();
    
}
 
function myclick9()
{
  cick.play();
  document.getElementById("myNavtwo").style.width = "0%";
    
}

