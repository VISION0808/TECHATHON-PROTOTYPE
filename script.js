document.getElementById('explore-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form data
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const state = document.getElementById('state').value;
    const incomeGroup = document.getElementById('income-group').value;
    const category = document.getElementById('category').value;

    // Example: Display the inputted details in the console (this can be used to filter schemes)
    console.log(`Name: ${name}, Age: ${age}, State: ${state}, Income Group: ${incomeGroup}, Category: ${category}`);

    // Simulate fetching relevant schemes (you can replace this with actual API call to MyGovSchemes)
    alert(`Exploring government schemes for ${name}...`);
});
