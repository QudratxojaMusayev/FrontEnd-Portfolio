document.querySelector('#loan-form').addEventListener('submit', function (e) {
    // Hide results
    document.querySelector('#results').style.display = 'none';

    // Show loader
    document.querySelector('#loader').style.display = 'block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
});

function calculateResults() {
    // UI variables
    const amountUI = document.querySelector('#amount');
    const interestUI = document.querySelector('#interest');
    const monthsUI = document.querySelector('#months');
    const monthlyPaymentUI = document.querySelector('#monthly-payment');
    const totalPaymentUI = document.querySelector('#total-payment');
    const totalInterestUI = document.querySelector('#total-interest');

    const principal = parseFloat(amountUI.value);
    const calculatedInterest = parseFloat(interestUI.value) / 100 / 12;
    const calculatedPayments = parseFloat(monthsUI.value);

    // Compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);

    if (isFinite(monthly)) {
        monthlyPaymentUI.value = monthly.toFixed(2);
        totalPaymentUI.value = (monthly * calculatedPayments).toFixed(2);
        totalInterestUI.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        // Show results
        document.querySelector('#results').style.display = 'block';
    } else {
        showError('Please check your inputs')
    }
    // Hide loader
    document.querySelector('#loader').style.display = 'none';
}

function showError(error) {
    // Create error div
    const errorDiv = document.createElement('div');

    // Get elements
    const cardUI = document.querySelector('.card');
    const headingUI = document.querySelector('.heading');

    // Add classes
    errorDiv.className = 'alert alert-danger';

    // Create text node
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above 
    cardUI.insertBefore(errorDiv, headingUI);

    // Clear error after 3 seconds
    setTimeout(clearError, 3000);
}

function clearError() {
    document.querySelector('.alert').remove();
}