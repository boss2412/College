document.getElementById('cylinderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the input values
    const radius = parseFloat(document.getElementById('radius').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validate inputs
    if (isNaN(radius) || isNaN(height) || radius <= 0 || height <= 0) {
        document.getElementById('result').textContent = 'Please enter valid positive numbers for radius and height.';
        return;
    }

    // Define the constant π (pi)
    const PI = Math.PI;

    // Calculate the volume
    const volume = PI * Math.pow(radius, 2) * height;

    // Display the result
    document.getElementById('result').textContent = `The volume of the cylinder is ${volume.toFixed(2)} cubic units.`;
});