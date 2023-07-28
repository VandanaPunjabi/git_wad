let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime()
{

    let date = new Date();

    //getting hr , min, sec from date

    let hh = date.getHours();
    let mm= date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let minRotate = 6*mm;
    let secRotate = 6*ss;

  
   hr.style.transform = `rotate(${hRotation}deg)`
   min.style.transform = `rotate(${minRotate}deg)`
   sec.style.transform = `rotate(${secRotate}deg)`

}

setInterval(displayTime, 1000);