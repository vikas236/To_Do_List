import './style.css';
import './css/navbar.css';

// import images 
import msgs_icon from './icons/messages.png'


// Calling html elements
const body = document.querySelector("body");
const search = document.querySelector(".search");
const mag_glass = document.querySelector(".mag_glass");
const search_box = search.childNodes[3];
const message_icon = document.querySelector(".message_icon");


message_icon.src = msgs_icon;

search_box.addEventListener("mouseover", function() {
    (mag_glass.childNodes[3]).style.fill = "rgba(0, 0, 0, .4)";
})
search_box.addEventListener("mouseout", function() {
    if (document.activeElement != search_box) { (mag_glass.childNodes[3]).style.fill = "white"; };
})

search_box.addEventListener("focus", function() {
    (mag_glass.childNodes[3]).style.fill = "rgba(0, 0, 0, .4)";
})
search_box.addEventListener("blur", function() {
    (mag_glass.childNodes[3]).style.fill = "white";
})