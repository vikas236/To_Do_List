// Images
import house from '../icons/house.png'

// Calling elements
const title = document.querySelector(".project_title");
const list = document.querySelector(".project_list");
const project = document.querySelector(".project");
const house_icon = document.querySelector(".house_icon")
const add_project = document.querySelector(".add_project");


// Functions

const el = (() => {
    const default_list = () => {
        list.innerHTML = `<span class="default_project project active_project">Home
                        <img class="house_icon" src="./images/house.png" alt="house">
                        </span>`
    }

    const new_project = () => {
        const length = (list.childNodes).length
        if (!(list.childNodes[length - 1]).classList.contains("project_name")) {
            list.innerHTML += `<div class="project_name"><input class="project_name_input" required>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>check</title><path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" /></svg>`
            const name = document.querySelector(".project_name_input");
            add_cancel_project();
        }
    }

    const add_cancel_project = () => {
        const project_input = document.querySelector(".project_name");
        const minus = project_input.childNodes[2];
        const plus = project_input.childNodes[4];
        const name = document.querySelector(".project_name_input");
        name.focus();
        minus.addEventListener("click", function () { list.removeChild(project_input); });
        plus.addEventListener("click", confirm_title);
        name.addEventListener("keydown", function (el) {
            if (el.key == "Enter") { confirm_title(); }
            else if (el.key == "Escape") { list.removeChild(project_input); };
        })
    }

    const confirm_title = () => {
        const project_input = document.querySelector(".project_name");
        const name = document.querySelector(".project_name_input");
        let project = name.value;
        if (project != "") {
            list.removeChild(project_input);
            list.innerHTML += `<span class="project">${project}
                            <svg class="delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>
                            </span>`
            remove_project();
        };
    }

    const remove_project = () => {
        const remove = document.querySelectorAll(".delete");
        for (let i = 0; i < remove.length; i++) {
            remove[i].addEventListener("click", function () {
                list.removeChild(remove[i].parentElement);
            })
        }
    }

    const add_project = () => {

    }

    return { add_project, default_list, new_project };
})();



// Event handling

add_project.addEventListener("click", el.new_project);
el.default_list();