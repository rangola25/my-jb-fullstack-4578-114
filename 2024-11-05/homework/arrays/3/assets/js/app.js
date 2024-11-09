const grades = [];

// 3: Collecting grades
for (let i = 1; i <= 10; i++) {
  grades.push(parseInt(prompt('Please enter the grade')));
}

// Initialize an array to store invalid grades
let invalidGrades = [];

// Loop through grades and check if they are valid
for (let i = 0; i < grades.length; i++) {
  if (grades[i] < 0 || grades[i] > 100) {
    invalidGrades.push(grades[i]);  // Add invalid grade to the array
  }
}

// Show appropriate alert
if (invalidGrades.length > 0) {
  alert(`Not valid grades: ${invalidGrades.join(', ')}`);
} else {
  alert('Valid');
}
