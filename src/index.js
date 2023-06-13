import './style.css';
import './css/navbar.css';

// Calling html elements
const body = document.querySelector("body");
const search = document.querySelector(".search");
const mag_glass = document.querySelector(".mag_glass");
const search_box = search.childNodes[3];

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