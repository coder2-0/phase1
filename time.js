document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('log-time-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const sessionName = document.getElementById('session-name').value.trim();
        const timeSpent = document.getElementById('time-spent').value;
        
        if (sessionName && timeSpent) {
            logTime(sessionName, timeSpent);
            this.reset(); // Reset form after submission
        }
    });
});

function logTime(sessionName, timeSpent) {
    const timesList = document.getElementById('times-list');
    const li = document.createElement('li');
    li.textContent = `${sessionName}: ${timeSpent} hours`;
    timesList.appendChild(li);
}
