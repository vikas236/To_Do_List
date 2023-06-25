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


const el = (() => {
    const search_colors = () => {
        search_box.addEventListener("mouseover", function () {
            (mag_glass.childNodes[3]).style.fill = "rgba(0, 0, 0, .4)";
        })
        search_box.addEventListener("mouseout", function () {
            if (document.activeElement != search_box) { (mag_glass.childNodes[3]).style.fill = "white"; };
        })

        search_box.addEventListener("focus", function () {
            (mag_glass.childNodes[3]).style.fill = "rgba(0, 0, 0, .4)";
        })
        search_box.addEventListener("blur", function () {
            (mag_glass.childNodes[3]).style.fill = "white";
        })
    };

    const show = () => {
        upgrade_box.classList.toggle("active");
        dim.classList.toggle("active");
    }

    const close = () => {
        sidebar.classList.toggle("active");
    }


    return { search_colors, show, close };
})();

// Events

upgrade_btn.addEventListener("click", el.show);


// Open side bar on click on hamburger
hamburger.addEventListener("click", el.close);

// Dim background while showing upgrade plans
dim.addEventListener("click", function () {
    dim.classList.toggle("active");
    upgrade_box.classList.remove("active");
})
el.search_colors();