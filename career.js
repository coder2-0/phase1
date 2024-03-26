document.addEventListener('DOMContentLoaded', function() {
    const viewCareerOpportunitiesButton = document.getElementById('viewCareerOpportunities');
    const careerDisplay = document.getElementById('careerDisplay');

    const workerName = localStorage.getItem('username') || 'Valued Worker'; 

    const allOpportunities = [
        "Advanced Training Programs",
        "Mentorship with Industry Leaders",
        "Internal Job Postings",
        "Professional Development Workshops",
        "Cross-functional Project Teams",
        "Overseas Assignments",
        "Leadership Development Programs",
        "Tech Innovation Challenges",
        "Community Volunteer Initiatives",
        "Employee Resource Groups"
    ];

    function getRandomOpportunities() {
        const shuffled = allOpportunities.sort(() => 0.5 - Math.random());
        let selected = shuffled.slice(0, Math.floor(Math.random() * (allOpportunities.length / 2)) + 2); 
        return selected;
    }

    viewCareerOpportunitiesButton.addEventListener('click', function() {
        const selectedOpportunities = getRandomOpportunities();

        let opportunitiesHtml = `<p>${workerName}, explore the career opportunities available to you:</p><ul>`;
        selectedOpportunities.forEach(opportunity => {
            opportunitiesHtml += `<li>${opportunity}</li>`;
        });
        opportunitiesHtml += `</ul>`;

        careerDisplay.innerHTML = opportunitiesHtml;
    });
});
