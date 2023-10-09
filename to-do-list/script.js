document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // 저장된 할 일 목록을 로드합니다.
    loadTasks();

    addTaskButton.addEventListener("click", function () {
        addTask();
    });

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <input type="checkbox">
                <span>${taskText}</span>
                <button class="edit"> 수정 <i class="fa-solid fa-pencil"></i></button>
                <button class="delete"> 삭제 <i class="fa-solid fa-minus"></i></button>`;
            taskList.appendChild(listItem);
            taskInput.value = "";
            addEditDeleteListeners(listItem);
            saveTasks(); // 할 일 목록을 저장합니다.
        }
    }

    function addEditDeleteListeners(listItem) {
        const editButton = listItem.querySelector(".edit");
        const deleteButton = listItem.querySelector(".delete");
        const span = listItem.querySelector("span");
        const checkbox = listItem.querySelector("input[type='checkbox']");

        editButton.addEventListener("click", function () {
            const newText = prompt("할 일을 수정하세요:", span.textContent);
            if (newText !== null) {
                span.textContent = newText;
                saveTasks(); // 수정한 내용을 저장합니다.
            }
        });

        deleteButton.addEventListener("click", function () {
            listItem.remove();
            saveTasks(); // 항목을 삭제하고 변경된 목록을 저장합니다.
        });

        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                span.style.textDecoration = "line-through";
            } else {
                span.style.textDecoration = "none";
            }
            saveTasks(); // 체크박스 상태를 저장합니다.
        });
    }

    function saveTasks() {
        const taskItems = [];
        const items = taskList.querySelectorAll("li");
        items.forEach(function (item) {
            const taskText = item.querySelector("span").textContent;
            const isCompleted = item.querySelector("input[type='checkbox']").checked;
            taskItems.push({ text: taskText, completed: isCompleted });
        });
        localStorage.setItem("tasks", JSON.stringify(taskItems));
    }

    function loadTasks() {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            const taskItems = JSON.parse(storedTasks);
            taskItems.forEach(function (task) {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
                    <input type="checkbox" ${task.completed ? "checked" : ""}>
                    <span>${task.text}</span>
                    <button class="edit">수정</button>
                    <button class="delete">삭제</button>`;
                taskList.appendChild(listItem);
                addEditDeleteListeners(listItem);
            });
        }
    }
});
