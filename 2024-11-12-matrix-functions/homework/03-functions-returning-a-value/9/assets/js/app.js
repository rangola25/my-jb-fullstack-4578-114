function findMaxMatrix(arr) {
  const matrix = [];
  let bigger = 1;
  let X = 1;

  // Create the 10x10 matrix
  for (let rowCount = 0; rowCount < 10; rowCount++) {
    const row = [];
    for (let colCount = 0; colCount < 10; colCount++) {
      row.push(bigger);
      bigger += X;
    }
    X += 1;
    bigger = X;
    matrix.push(row);
  }

  // Compare the arrays directly within this function
  if (arr.length !== matrix.length) return false; // Check if the number of rows is the same

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== matrix[i].length) return false; // Check if each row has the same length
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== matrix[i][j]) return false; // Check if each element is the same
    }
  }

  return true; // If no mismatches were found, the arrays are the same
}

// Test array1 (which should not match the generated matrix)
let array1 = [[12, 23, 34, 45], [56, 67, 78, 89], [10, 20, 30, 40, 42]];

// Generate array2 dynamically to match the generated matrix
let array2 = [];
let bigger2 = 1;
let X2 = 1;

for (let rowCount2 = 0; rowCount2 < 10; rowCount2++) {
  const row2 = [];
  for (let colCount2 = 0; colCount2 < 10; colCount2++) {
    row2.push(bigger2);
    bigger2 += X2;
  }
  X2 += 1;
  bigger2 = X2;
  array2.push(row2);
}

// Test the function
console.log(findMaxMatrix(array1));  // false, since array1 is not the same as the generated matrix
console.log(findMaxMatrix(array2));  // true, since array2 matches the generated matrix
