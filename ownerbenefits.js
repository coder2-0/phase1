document.addEventListener('DOMContentLoaded', function() {
    const employeeBenefitsListDiv = document.getElementById('employeeBenefitsList');

    function generateRandomEmployees(numEmployees) {
        const employees = [];
        for (let i = 1; i <= numEmployees; i++) {
            employees.push(`Employee ${i}`);
        }
        return employees;
    }

    function displayEmployees() {
        const employees = generateRandomEmployees(5); 
        employeeBenefitsListDiv.innerHTML = '<h2>Employees</h2>';

        employees.forEach(employee => {
            const employeeDiv = document.createElement('div');
            employeeDiv.innerHTML = `
                <p>${employee}: <select>
                    <option value="">Select Benefit</option>
                    <option value="health">Health Insurance</option>
                    <option value="dental">Dental Insurance</option>
                    <option value="vision">Vision Insurance</option>
                    <option value="pto">Paid Time Off</option>
                </select> <button>Assign Benefit</button></p>
            `;
            employeeBenefitsListDiv.appendChild(employeeDiv);

            employeeDiv.querySelector('button').addEventListener('click', function() {
                const selectedBenefit = employeeDiv.querySelector('select').value;
                alert(`${employee} has been assigned the benefit: ${selectedBenefit} successfully.`);
            });
        });
    }

    displayEmployees();
});
