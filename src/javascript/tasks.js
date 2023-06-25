// Calling Elements
const task_list = document.querySelector(".task_list");
const add_task = document.querySelectorAll(".add_task");
const new_task = document.querySelector(".new_task");
const task_name = document.querySelector(".task_name");
const task_textarea = document.querySelector(".task_description");
const task_due = document.querySelector(".task_due");
const task_priority = document.querySelector(".task_priority");
const cancel = document.querySelector(".cancel_task");
const confirm = document.querySelector(".confirm_task");
const wall = document.querySelector(".wall");
const Home = [];

// Functions

const el = (() => {
  const show = () => {
    new_task.classList.add("active");
    wall.classList.add("active");
    task_name.focus();
    document.addEventListener("keydown", (down) => {
      if (down.key == "Escape") {
        close();
      } else if (down.key == "Enter") {
      }
    });
    empty();
  };

  const generate_list = (arr) => {
    task_list.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
      const task = task_list.appendChild(document.createElement("div"));
      task.classList.add("task");
      task.innerHTML = `
        <h3 class="task_title">${Home[i].title}</h3>
        <span class="task_date">${Home[i].due}</span>
        <hr>
        <h4 class="task_details">${Home[i].description}</h4>`;
    }
  };

  const confirm_task = () => {
    if (valid_task()) {
      let name = task_name.value;
      let task = {};
      Home.push(
        create_task(
          name,
          task_textarea.value,
          task_due.value,
          task_priority.value
        )
      );
    }
    generate_list(Home);
  };

  const Home_project = () => {
    Home.push(
      create_task("buy milk", "buy milk from market", "12-2-2023", "high")
    );
    Home.push(
      create_task(
        "drink milk",
        "don't forget to drink your milk",
        "14-5-2023",
        "high"
      )
    );
    generate_list(Home);
  };

  const create_task = (title, description, due, priority) => {
    let task = {};
    task.title = title;
    task.description = description;
    task.due = due;
    task.priority = priority;
    close();

    return task;
  };

  const valid_task = () => {
    if (task_name.value != "" && task_due.value != "") {
      confirm.classList.add("active_task");
      return true;
    } else {
      confirm.classList.remove("active_task");
      return false;
    }
  };

  const empty = () => {
    task_name.value = "";
    task_due.value = "";
    task_textarea.value = "";
  };

  const close = () => {
    new_task.classList.remove("active");
    wall.classList.remove("active");
    empty();
  };

  return { Home_project, show, close, valid_task, confirm_task };
})();

// Events

el.Home_project();
for (let i = 0; i < add_task.length; i++) {
  add_task[i].addEventListener("click", el.show);
}
cancel.addEventListener("click", el.close);
wall.addEventListener("click", el.close);
task_name.addEventListener("input", el.valid_task);
confirm.addEventListener("click", el.confirm_task);
