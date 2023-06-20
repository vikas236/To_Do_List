// Calling html elements
const body = document.querySelector("body");
const search = document.querySelector(".search");
const mag_glass = document.querySelector(".mag_glass");
const search_box = search.childNodes[3];
const hamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const upgrade_box = document.querySelector(".upgrade_plans");
const upgrade_btn = document.querySelector(".upgrade");
const dim = document.querySelector(".dim");


// Open side bar on click on hamburger
hamburger.addEventListener("click", function() {
    sidebar.classList.toggle("active");
})

const search_colors = () => {
    console.log("working");
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
};

// Display upgrade plans window on clicking upgrade
upgrade_btn.addEventListener("click", function() {
    upgrade_box.classList.toggle("active");
    dim.classList.toggle("active");
});

// Dim background while showing upgrade plans
dim.addEventListener("click", function() {
    dim.classList.toggle("active");
    upgrade_box.classList.remove("active");
})