document.addEventListener('DOMContentLoaded', function() {
    // Удаление прелоадера после загрузки контента
    const preloader = document.getElementById('preloader');
    setTimeout(function() {
        preloader.style.display = 'none';
    }, 100); // Имитация задержки загрузки контента
});


let switchMode = document.getElementById("switchMode"); 
let theme = document.getElementById("theme"); 
 
// Проверяем, сохранена ли выбранная тема в localStorage 
const savedTheme = localStorage.getItem('theme'); 
 
// Если выбранная тема сохранена, применяем её 
if (savedTheme) { 
    theme.href = savedTheme; 
} 
 
switchMode.onclick = function(){ 
    if (theme.getAttribute("href") === "web.css"){ 
        theme.href = "web2.css"; 
    } else { 
        theme.href = "web.css"; 
    } 
     
    // Сохраняем выбранную тему в localStorage 
    localStorage.setItem('theme', theme.href); 
}

let cnt=1;
function zooml()
{
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    const img4 = document.getElementById('img4');
    

    if (cnt===1)
    {
        img4.style.transform = 'scale(1.5)';
        cnt = 2;
    }
    else if (cnt===2)  
    {
        img3.style.transform = 'scale(1.5)';
        img4.style.transform = 'scale(1)';
        cnt=cnt+1;
    }
    else if(cnt===3)
    {
        img2.style.transform = 'scale(1.5)';
        img3.style.transform = 'scale(1)';
        cnt=cnt+1;
    }
    else if(cnt===4)
    {
        img1.style.transform = 'scale(1.5)';
        img2.style.transform = 'scale(1)';
        cnt=cnt+1;
    }
    else
    {
        img1.style.transform = 'scale(1)';
        cnt=1;
    }
}


function zoomr()
{
    const img1 = document.getElementById('img1');
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    const img4 = document.getElementById('img4');
    

    if (cnt===1)
    {
        img1.style.transform = 'scale(1.5)';
        cnt = 2;
    }
    else if (cnt===2)  
    {
        img2.style.transform = 'scale(1.5)';
        img1.style.transform = 'scale(1)';
        cnt=cnt+1;
    }
    else if(cnt===3)
    {
        img3.style.transform = 'scale(1.5)';
        img2.style.transform = 'scale(1)';
        cnt=cnt+1;
    }
    else if(cnt===4)
    {
        img4.style.transform = 'scale(1.5)';
        img3.style.transform = 'scale(1)';
        cnt=cnt+1;
    }
    else
    {
        img4.style.transform = 'scale(1)';
        cnt=1;
    }
}


let modal = document.getElementById('myModal');
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


const block = document.querySelector('.kartoch3');
const right = document.getElementById('right');
const left = document.getElementById('left');

right.addEventListener('click', function() {
  block.style.transform = 'translateX(50px)';
});

left.addEventListener('click', function() {
  block.style.transform = 'translateX(-50px)';
});


