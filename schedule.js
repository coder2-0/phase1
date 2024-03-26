document.addEventListener('DOMContentLoaded', function() {
    const viewScheduleButton = document.getElementById('viewSchedule');
    const scheduleDisplay = document.getElementById('scheduleDisplay');

    const workerName = localStorage.getItem('username') || 'Valued Co-worker';

    viewScheduleButton.addEventListener('click', function() {
        // Example of generating a simple random schedule
        const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        const shifts = ['Morning', 'Evening', 'Night'];
        
        let scheduleHtml = `<p>${workerName}, here is your schedule for the week:</p><ul>`;
        
        days.forEach(day => {
            // Randomly assign a shift for each day
            const randomShift = shifts[Math.floor(Math.random() * shifts.length)];
            scheduleHtml += `<li>${day}: ${randomShift}</li>`;
        });

        scheduleHtml += `</ul>`;

        scheduleDisplay.innerHTML = scheduleHtml;
    });
});
