document.addEventListener('DOMContentLoaded', () => {
    const allTasks = [
        { task: "Complete HTML/CSS module", deadline: "2024-04-15" },
        { task: "Finish JavaScript exercises", deadline: "2024-04-20" },
        { task: "Work on personal project", deadline: "2024-04-25" },
        { task: "Study for upcoming test", deadline: "2024-05-01" },
        { task: "Participate in code review", deadline: "2024-05-05" },
        { task: "Submit project proposal", deadline: "2024-05-10" },
        { task: "Prepare presentation on project", deadline: "2024-05-15" },
        { task: "Attend workshop on Vue.js", deadline: "2024-05-20" },
        { task: "Update personal portfolio website", deadline: "2024-05-25" },
        { task: "Read chapter 4 of textbook", deadline: "2024-06-01" }
    ];

    const upcomingTasks = selectRandomTasks(allTasks, 5); 
    displayUpcomingTasks(upcomingTasks);
});

function selectRandomTasks(tasks, count) {
    for (let i = tasks.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tasks[i], tasks[j]] = [tasks[j], tasks[i]];
    }
    return tasks.slice(0, count);
}

function displayUpcomingTasks(tasks) {
    const list = document.getElementById('tasks-list');
    list.innerHTML = ''; 
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = `${task.task} - Due by ${task.deadline}`;
        list.appendChild(li);
    });
}
