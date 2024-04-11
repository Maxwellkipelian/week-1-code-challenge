// Function to prompt the user for input and calculate grade
function calculateGrade() {
    let marks = prompt("Enter student marks (between 0 and 100):");
    
    // Convert input to a number
    marks = parseFloat(marks);

    // Check if input is a valid number between 0 and 100
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alert("Invalid input! Please enter a number between 0 and 100.");
        return;
    }

    // Determine the grade based on the marks
    let grade;
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60 && marks <= 79) {
        grade = "B";
    } else if (marks >= 50 && marks <= 59) {
        grade = "C";
    } else if (marks >= 40 && marks <= 49) {
        grade = "D";
    } else {
        grade = "E";
    }

    // Output the grade
    alert("Grade: " + grade);
}

// Call the function to start the program
calculateGrade();
