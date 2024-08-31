// Regular function to calculate simple interest
function calculateSimpleInterest(principal, rate, years) {
    return (principal * rate * years) / 100;
}

// Arrow function to calculate simple interest
const calculateSimpleInterestArrow = (principal, rate, years) => (principal * rate * years) / 100;

document.getElementById('interestForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the input values
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const years = parseFloat(document.getElementById('years').value);

    // Validate inputs
    if (isNaN(principal) || isNaN(rate) || isNaN(years) || principal <= 0 || rate <= 0 || years <= 0) {
        document.getElementById('result').textContent = 'Please enter valid positive numbers for all fields.';
        return;
    }

    // Calculate interest using regular function
    const interestRegular = calculateSimpleInterest(principal, rate, years);

    // Calculate interest using arrow function
    const interestArrow = calculateSimpleInterestArrow(principal, rate, years);

    // Display the result
    document.getElementById('result').innerHTML = `
        Simple Interest (Regular Function): ${interestRegular.toFixed(2)}<br>
        Simple Interest (Arrow Function): ${interestArrow.toFixed(2)}
    `;
});
