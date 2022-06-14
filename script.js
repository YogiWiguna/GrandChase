function responsive(){
    let y = document.getElementById("navbar");
    if (y.className === "navbar-nav") y.className += " responsive";
    else y.className = "navbar-nav";
}

window.onscroll = function(){profil()}

let profile = document.getElementById("profile");
let stick = profile.offsetTop;

function profil(){
    if(window.pageYOffset >= stick) profile.classList.add("sticky");
    else profile.classList.remove("sticky");
}