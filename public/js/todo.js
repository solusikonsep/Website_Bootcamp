const todo = [
    {task : "Membuat Website", status : "onprogress", date : "2024-09-29"},
];

function getCurrentDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function template(task, status, date, index){
    const elementHTML = `
    <li>
        ${task} | ${status} | ${date}
        <button onclick="deleteTODO(${index})">Hapus</button>
        <button onclick="editTODO(${index})">Edit</button>
      </li>
    `;
    return elementHTML;
}

function renderTODO() {
    const todoList = document.getElementById("todo-list");
    todoList.innerHTML = '';
    todo.map((data, idx) => {
        todoList.innerHTML += template(data.task, data.status, data.date, idx);
    });
}

function addTODO() {
    const task = prompt("Tasknya apa?");
    const status = prompt("Statusnya apa?");
    const date = getCurrentDate();

    // Add new task
    todo.push({task: task, status: status, date: date});

    // Update Html
    renderTODO();
};

function deleteTODO(idx) {
    // Remove the task at the specified index
    todo.splice(idx, 1);

    // Re-render the updated list
    renderTODO();
}

function editTODO(idx) {
    const status = prompt("Mau ubah status jadi apa?");
    todo[idx].status = status;

    // Re-render the updated list
    renderTODO();
}

// Initial rendering
renderTODO();
