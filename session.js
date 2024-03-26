document.addEventListener('DOMContentLoaded', () => {
    const sessions = [
        'Web Development Basics',
        'Introduction to JavaScript',
        'Advanced CSS Techniques',
        'Responsive Web Design',
        'Back-End Fundamentals',
        'Database Management',
        'Security in Web Applications',
        'Performance Optimization',
        'Using APIs in Web Development',
        'Front-End Frameworks Overview'
    ];

    const selectedSessions = selectRandomSessions(sessions, 5); 
    displaySessions(selectedSessions);
});

function selectRandomSessions(sessions, count) {
    const shuffled = sessions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function displaySessions(sessions) {
    const sessionsList = document.getElementById('sessions');
    sessions.forEach(session => {
        const li = document.createElement('li');
        li.textContent = session;
        sessionsList.appendChild(li);
    });
}
