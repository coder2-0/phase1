document.addEventListener('DOMContentLoaded', function() {
    const employeeListDiv = document.getElementById('employeeList');

    function generateRandomEmployees(numEmployees) {
        const employees = [];
        for (let i = 1; i <= numEmployees; i++) {
            employees.push(`Employee ${i}`);
        }
        return employees;
    }

    function displayEmployees() {
        const employees = generateRandomEmployees(5); 
        employeeListDiv.innerHTML = '<h2>Employees</h2>';

        employees.forEach(employee => {
            const employeeDiv = document.createElement('div');
            employeeDiv.innerHTML = `
                <p>${employee}: $<input type="number" placeholder="Assign pay" min="0"> <button>Submit Pay</button></p>
            `;
            employeeListDiv.appendChild(employeeDiv);

            employeeDiv.querySelector('button').addEventListener('click', function() {
                const pay = employeeDiv.querySelector('input').value;
                alert(`${employee} has been assigned $${pay} successfully.`);
            });
        });
    }

    displayEmployees();
});
