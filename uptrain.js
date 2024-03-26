document.addEventListener('DOMContentLoaded', () => {
    const allSessions = [
        { name: "Advanced JavaScript Techniques", date: "2024-04-15" },
        { name: "React for Beginners", date: "2024-04-20" },
        { name: "CSS Animations", date: "2024-04-25" },
        { name: "Effective Testing with Jest", date: "2024-05-01" },
        { name: "Node.js Fundamentals", date: "2024-05-05" },
        { name: "Understanding Async Programming", date: "2024-05-10" },
        { name: "Web Security Essentials", date: "2024-05-15" },
        { name: "Building RESTful APIs", date: "2024-05-20" },
        { name: "Vue.js Quickstart", date: "2024-05-25" },
        { name: "Python for Web Development", date: "2024-06-01" }
    ];

    const upcomingSessions = selectRandomSessions(allSessions, 5); 
    displayUpcomingSessions(upcomingSessions);
});

function selectRandomSessions(sessions, count) {
    for (let i = sessions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [sessions[i], sessions[j]] = [sessions[j], sessions[i]];
    }
    return sessions.slice(0, count);
}

function displayUpcomingSessions(sessions) {
    const list = document.getElementById('upcoming-list');
    list.innerHTML = ''; 
    sessions.forEach(session => {
        const li = document.createElement('li');
        li.textContent = `${session.name} - ${session.date}`;
        list.appendChild(li);
    });
}
