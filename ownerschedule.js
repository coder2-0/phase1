document.addEventListener('DOMContentLoaded', function() {
    const employeeScheduleListDiv = document.getElementById('employeeScheduleList');

    function generateRandomEmployees(numEmployees) {
        const employees = [];
        for (let i = 1; i <= numEmployees; i++) {
            employees.push(`Employee ${i}`);
        }
        return employees;
    }

    function displayEmployees() {
        const employees = generateRandomEmployees(5); 
        employeeScheduleListDiv.innerHTML = '<h2>Employees</h2>';

        employees.forEach(employee => {
            const employeeDiv = document.createElement('div');
            employeeDiv.innerHTML = `
                <p>${employee}: 
                    <select name="shiftType">
                        <option value="">Select Shift Type</option>
                        <option value="Morning">Morning</option>
                        <option value="Evening">Evening</option>
                        <option value="Night">Night</option>
                    </select>
                    <input type="date" name="shiftDate"> 
                    <button>Assign Schedule</button>
                </p>
            `;
            employeeScheduleListDiv.appendChild(employeeDiv);

            employeeDiv.querySelector('button').addEventListener('click', function() {
                const shiftType = employeeDiv.querySelector('select[name="shiftType"]').value;
                const shiftDate = employeeDiv.querySelector('input[name="shiftDate"]').value;
                if (shiftType && shiftDate) {
                    alert(`${employee} has been assigned a ${shiftType} shift on ${shiftDate}.`);
                } else {
                    alert('Please select both a shift type and date.');
                }
            });
        });
    }

    displayEmployees();
});
