const btnAddTask =
    document.getElementById("btnAddTask");

const btnClose =
    document.getElementById("btnClose");

const taskModal =
    document.getElementById("taskModal");

const taskForm =
    document.getElementById("taskForm");

const taskList =
    document.getElementById("taskList");

const totalTasks =
    document.getElementById("totalTasks");

const completedTasks =
    document.getElementById("completedTasks");

const pendingTasks =
    document.getElementById("pendingTasks");

const message =
    document.getElementById("message");


// DATA

let tasks = [];

let editIndex = null;


// OPEN MODAL

btnAddTask.addEventListener(
    "click",
    function () {

        taskModal.classList.remove(
            "hidden"
        );

    }
);


// CLOSE MODAL

btnClose.addEventListener(
    "click",
    function () {

        taskModal.classList.add(
            "hidden"
        );

        taskForm.reset();

        editIndex = null;

    }
);


// RENDER TASKS

function renderTasks() {

    taskList.innerHTML = "";

    if(tasks.length === 0) {

        taskList.innerHTML = `
            <p>Chưa có công việc nào</p>
        `;

        return;
    }

    tasks.forEach(function(task, index) {

        taskList.innerHTML += `

            <div class="task-card
                ${task.completed ? "completed" : ""}">

                <h3>
                    ${task.title}
                </h3>

                <p>
                    ${task.description}
                </p>

                <p>
                    Hạn:
                    ${task.deadline}
                </p>

                <p class="priority">
                    Ưu tiên:
                    ${task.priority}
                </p>

                <label class="status-label">

                    <input
                        type="checkbox"
                        class="toggle-task"
                        data-index="${index}"
                        ${task.completed ? "checked" : ""}
                    >

                    Hoàn thành

                </label>

                <div class="task-actions">

                    <button
                        class="edit-btn"
                        data-index="${index}">

                        Sửa

                    </button>

                    <button
                        class="delete-btn"
                        data-index="${index}">

                        Xóa

                    </button>

                </div>

            </div>
        `;
    });

}


// SUBMIT FORM

taskForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const task = {

            title:
            document.getElementById(
                "title"
            ).value,

            description:
            document.getElementById(
                "description"
            ).value,

            deadline:
            document.getElementById(
                "deadline"
            ).value,

            priority:
            document.getElementById(
                "priority"
            ).value,

            completed: false
        };


        // ADD

        if(editIndex === null) {

            tasks.push(task);

            showMessage(
                "Thêm công việc thành công"
            );

        }

        // EDIT

        else {

            task.completed =
                tasks[editIndex].completed;

            tasks[editIndex] = task;

            showMessage(
                "Cập nhật công việc thành công"
            );

            editIndex = null;
        }


        renderTasks();

        updateTaskSummary();

        saveTasks();

        taskForm.reset();

        taskModal.classList.add(
            "hidden"
        );

    }
);


// CLICK TASK LIST

taskList.addEventListener(
    "click",
    function(event) {

        // DELETE

        if(
            event.target.classList.contains(
                "delete-btn"
            )
        ) {

            const index =
                event.target.dataset.index;

            const confirmDelete =
                confirm(
                    "Bạn có chắc muốn xóa?"
                );

            if(confirmDelete) {

                tasks.splice(index, 1);

                renderTasks();

                updateTaskSummary();

                saveTasks();

                showMessage(
                    "Xóa công việc thành công"
                );

            }

        }


        // EDIT

        if(
            event.target.classList.contains(
                "edit-btn"
            )
        ) {

            editIndex =
                event.target.dataset.index;

            const task =
                tasks[editIndex];

            document.getElementById(
                "title"
            ).value = task.title;

            document.getElementById(
                "description"
            ).value = task.description;

            document.getElementById(
                "deadline"
            ).value = task.deadline;

            document.getElementById(
                "priority"
            ).value = task.priority;

            taskModal.classList.remove(
                "hidden"
            );

        }

    }
);


// CHANGE STATUS

taskList.addEventListener(
    "change",
    function(event) {

        if(
            event.target.classList.contains(
                "toggle-task"
            )
        ) {

            const index =
                event.target.dataset.index;

            tasks[index].completed =
                event.target.checked;

            renderTasks();

            updateTaskSummary();

            saveTasks();

        }

    }
);


// UPDATE SUMMARY

function updateTaskSummary() {

    totalTasks.innerText =
        tasks.length;

    const completed =
        tasks.filter(
            task => task.completed
        ).length;

    completedTasks.innerText =
        completed;

    pendingTasks.innerText =
        tasks.length - completed;

}


// SAVE LOCAL STORAGE

function saveTasks() {

    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}


// LOAD LOCAL STORAGE

function loadTasks() {

    const data =
        localStorage.getItem("tasks");

    if(data) {

        tasks = JSON.parse(data);

    }

    renderTasks();

    updateTaskSummary();

}


// SHOW MESSAGE

function showMessage(text) {

    message.innerText = text;

    setTimeout(function() {

        message.innerText = "";

    }, 3000);

}


// START APP

loadTasks();