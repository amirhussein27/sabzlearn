let leftdays = document.getElementById("days");
let lefthours = document.getElementById("hours");
let leftminutes = document.getElementById("minutes");
let leftseconds = document.getElementById("seconds");

   function CountDownTimer  () {
   
    }
    function showRemaining (){
    now = new Date();
//  console.log(now);
   let days = 6 - now.getDay(); ;
  let  hours = 23 - now.getHours();
   let minutes = 59 - now.getMinutes();
   let seconds = 59 - now.getSeconds();
    leftdays.innerHTML = days + "<br> <span class=\"small\"> روز </span>"
    lefthours.innerHTML = hours + "<br> <span class=\"small\"> ساعت</span>";
    leftminutes.innerHTML = minutes + "<br> <span class=\"small\">دقیقه</span>";
    leftseconds.innerHTML = seconds + "<br> <span class=\"small\">ثانیه</span>";
    }

timer = setInterval (showRemaining, 1000) 
CountDownTimer() ;


  // kofiWidgetOverlay.draw('vehementjane', {
  //   'type': 'floating-chat',
   
  //   'floating-chat.donateButton.background-color': '#794bc4',
  //   'floating-chat.donateButton.text-color': '#fff'
  // });


  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
