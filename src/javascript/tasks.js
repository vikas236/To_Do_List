// Calling Elements
const add_task = document.querySelectorAll(".add_task");
const new_task = document.querySelector(".new_task");
const task_name = document.querySelector(".task_name");
const textArea = document.querySelector(".task_description");
const cancel = document.querySelector(".cancel_task");
const confirm = document.querySelector(".confirm_task");
const wall = document.querySelector(".wall");


// Functions

const el = (() => {
    const show = () => {
        new_task.classList.add("active");
        wall.classList.add("active");
    }

    const valid_task = () => {
        if (task_name.value != "") { confirm.classList.add("active"); }
        else if (task_name.value == "") { confirm.classList.remove("active"); };
    }

    const close = () => {
        new_task.classList.remove("active");
        wall.classList.remove("active");
    }

    return { show, close, valid_task };
})();


// Events

for (let i = 0; i < add_task.length; i++) {
    add_task[i].addEventListener("click", el.show);
};
cancel.addEventListener("click", el.close);
wall.addEventListener("click", el.close);

el.valid_task();