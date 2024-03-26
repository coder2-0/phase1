document.addEventListener('DOMContentLoaded', function() {
    const viewPayButton = document.getElementById('viewPay');
    const payDisplay = document.getElementById('payDisplay');

    const workerName = localStorage.getItem('username') || 'Valued Worker'; // Fallback name

    viewPayButton.addEventListener('click', function() {
        // Generate a random pay amount
        const randomPay = (Math.random() * (5000 - 1000) + 1000).toFixed(2);
        
        // Display worker's name and pay
        payDisplay.textContent = `${workerName}, your pay is: $${randomPay}`;
    });
});
