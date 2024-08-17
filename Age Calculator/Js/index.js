function calculatorAge() {
    // Use 'new Date()' to get the current date object, not a string
    const today = new Date();

    // Get the birthdate input value
    const birthDateInput = document.getElementById("birthdate").value;
    
    // Ensure the user has entered a valid birthdate
    if (!birthDateInput) {
        alert("Please enter a valid birthdate!");
        return;
    }

    // Split the input date into year, month, and day
    const birthDateParts = birthDateInput.split("-");
    const birthYear = birthDateParts[0];
    const birthMonth = birthDateParts[1] - 1;  // Months are 0-indexed in JavaScript Date
    const birthDay = birthDateParts[2];

    // Create a Date object for the birthdate
    const birthDate = new Date(birthYear, birthMonth, birthDay);

    // Calculate the age in milliseconds
    const ageInMilliSeconds = today - birthDate;

    // Calculate the components of age
    const ageInSeconds = Math.floor(ageInMilliSeconds / 1000);
    const ageInMinutes = Math.floor(ageInSeconds / 60);
    const ageInHours = Math.floor(ageInMinutes / 60);
    const ageInDays = Math.floor(ageInHours / 24);
    const ageInWeeks = Math.floor(ageInDays / 7);
    const ageInMonths = Math.floor(ageInDays / 30.436875); // Average days per month
    const ageInYears = Math.floor(ageInMonths / 12);

    // Render the results into the DOM
    const result = document.getElementById("result");
    result.innerHTML = `
     <div class="result-items">
        <h3>Age:</h3>
        <p>${ageInYears} Years ${ageInMonths % 12} Months ${ageInDays % 30} Days</p>
     </div>
     <div class="result-items">
        <h3>Months Passed:</h3>
        <p>${ageInMonths}</p>
     </div>
     <div class="result-items">
        <h3>Weeks Passed:</h3>
        <p>${ageInWeeks}</p>
     </div>
     <div class="result-items">
        <h3>Days Passed:</h3>
        <p>${ageInDays}</p>
     </div>
     <div class="result-items">
        <h3>Hours Passed:</h3>
        <p>${ageInHours}</p>
     </div>
     <div class="result-items">
        <h3>Minutes Passed:</h3>
        <p>${ageInMinutes}</p>
     </div>
     <div class="result-items">
        <h3>Seconds Passed:</h3>
        <p>${ageInSeconds}</p>
     </div>
    `;
}

// Add event listener for form submission
const ageCalculatorForm = document.getElementById("ageCalculator");
ageCalculatorForm.addEventListener("submit", (event) => {
    event.preventDefault();
    calculatorAge();
});
