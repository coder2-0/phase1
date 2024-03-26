document.addEventListener('DOMContentLoaded', function() {
    const viewBenefitsButton = document.getElementById('viewBenefits');
    const benefitsDisplay = document.getElementById('benefitsDisplay');

    const workerName = localStorage.getItem('username') || 'Valued Worker'; 

    const allBenefits = [
        "Health Insurance",
        "Retirement Savings Plan",
        "Paid Time Off",
        "Wellness Programs",
        "Life Insurance",
        "Flexible Working Hours",
        "Remote Work Options",
        "Employee Assistance Program",
        "Gym Membership",
        "Professional Development Allowance"
    ];

    function getRandomBenefits() {
        const shuffled = allBenefits.sort(() => 0.5 - Math.random()); 
        let selected = shuffled.slice(0, Math.floor(Math.random() * (allBenefits.length - 3)) + 3);
        return selected;
    }

    viewBenefitsButton.addEventListener('click', function() {
        const selectedBenefits = getRandomBenefits();

        let benefitsHtml = `<p>${workerName}, here are your current benefits:</p><ul>`;
        selectedBenefits.forEach(benefit => {
            benefitsHtml += `<li>${benefit}</li>`;
        });
        benefitsHtml += `</ul>`;

        benefitsDisplay.innerHTML = benefitsHtml;
    });
});
