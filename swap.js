// swap.js
document.addEventListener('DOMContentLoaded', function() {
    const viewAvailableShiftsButton = document.getElementById('viewAvailableShifts');
    const shiftsDisplay = document.getElementById('shiftsDisplay');

    const workerName = localStorage.getItem('username') || 'Valued Co-worker';

    function generateRandomShifts() {
        const shifts = [];
        const shiftTypes = ['Morning', 'Evening', 'Night'];
        const numberOfShifts = 3; 

        for (let i = 0; i < numberOfShifts; i++) {
            const randomDate = new Date(+new Date() + Math.floor(Math.random() * 10000000000));
            const randomShiftType = shiftTypes[Math.floor(Math.random() * shiftTypes.length)];
            const formattedDate = `${randomDate.getFullYear()}-${String(randomDate.getMonth() + 1).padStart(2, '0')}-${String(randomDate.getDate()).padStart(2, '0')}`;

            shifts.push({ date: formattedDate, shift: randomShiftType });
        }

        return shifts;
    }

    viewAvailableShiftsButton.addEventListener('click', function() {
        const shifts = generateRandomShifts();

        let shiftsHtml = `<p>${workerName}, here are the shifts available for swapping:</p><ul>`;
        shifts.forEach(shift => {
            shiftsHtml += `<li>${shift.date} - ${shift.shift}</li>`;
        });
        shiftsHtml += `</ul>`;

        shiftsDisplay.innerHTML = shiftsHtml;
    });
});
