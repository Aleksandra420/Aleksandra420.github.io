let switchMode = document.getElementById("switchMode"); 
switchMode.onclick = function(){ 
    let theme = document.getElementById("theme"); 
    if ( theme.getAttribute("href")== "web.css"){ 
        theme.href="web2.css"; 
    } 
    else{ 
        theme.href="web.css"; 
    } 
}