document.addEventListener('DOMContentLoaded', function() {
    const employeeTimePeriodListDiv = document.getElementById('employeeTimePeriodList');

    function generateRandomEmployees(numEmployees) {
        const employees = [];
        for (let i = 1; i <= numEmployees; i++) {
            employees.push(`Employee ${i}`);
        }
        return employees;
    }

    function displayEmployees() {
        const employees = generateRandomEmployees(5); 
        employeeTimePeriodListDiv.innerHTML = '<h2>Employees</h2>';

        employees.forEach(employee => {
            const employeeDiv = document.createElement('div');
            employeeDiv.innerHTML = `
                <p>${employee}: <input type="date" name="startDate"> to <input type="date" name="endDate"> <button>Assign Time Period</button></p>
            `;
            employeeTimePeriodListDiv.appendChild(employeeDiv);

            employeeDiv.querySelector('button').addEventListener('click', function() {
                const startDate = employeeDiv.querySelector('input[name="startDate"]').value;
                const endDate = employeeDiv.querySelector('input[name="endDate"]').value;
                if (startDate && endDate) {
                    alert(`${employee} has been assigned the time period from ${startDate} to ${endDate} successfully.`);
                } else {
                    alert('Please select both start and end dates.');
                }
            });
        });
    }

    displayEmployees();
});
