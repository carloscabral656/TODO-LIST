import { Task } from "./data/entities/Task.js";
import { Data } from "./data/Data.js";

const app = document.getElementById("app");
const addTask = document.getElementById("add_task");
const storage = Data;

//
addTask.addEventListener("click", function (e) {
  //Getting the data from input
  const description = document.getElementById("description_task").value;
  const done = document.getElementById("done_task").checked;

  //Creating new Task
  const task = new Task(description, done);

  //Inserir no storage
  storage.data.push(task);

  //Mostrando o storage
  console.log(storage.data);

  renderTasks(storage.data);
});

function renderTasks(tasks) {
  //Remove all children
  app.innerHTML = null;
  tasks.forEach((task) => {
    //Task
    let div = document.createElement("div");
    div.classList.add("task");

    //Description of the Task
    let p = document.createElement("p");
    p.textContent = task.description;

    //Done or Not
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;

    //Append
    div.append(p);
    div.append(checkbox);
    app.append(div);
  });
}
