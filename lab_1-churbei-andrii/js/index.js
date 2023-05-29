var mylogo = document.querySelector(".logo-space");
var myinfo = document.querySelector(".myinfo");

mylogo.addEventListener("mouseover", showPopup);
mylogo.addEventListener("mouseout", hidePopup);

function showPopup(evt) {
    var iconPos = mylogo.getBoundingClientRect();
    myinfo.style.left = (iconPos.right - 280) + "px";
    myinfo.style.top = (window.scrollY + iconPos.top + 100) + "px";
    myinfo.style.display = "block";
}

function hidePopup(evt) {
    myinfo.style.display = "none";
}