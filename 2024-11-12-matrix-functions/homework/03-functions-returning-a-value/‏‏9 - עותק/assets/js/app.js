function findMultipleBoard(arr) {
  if (arr.length !== 10) return false; 
  for (let i = 0; i < 10; i++) {
    if (arr[i].length !== 10) return false; 
    for (let j = 0; j < 10; j++) {
      if (arr[i][j] !== (i+1)*(j+1)) return false; 
    }
  }
  return true; 
}

let array1 = [[12, 23, 34, 45], [56, 67, 78, 89], [10, 20, 30, 40, 42]];

let array2 = [];

for (let rowCount = 1; rowCount < 11; rowCount++) {
  const row = [];
  for (let colCount = 1; colCount < 11; colCount++) {
    row.push(rowCount*colCount);
  }
  array2.push(row);
}

console.log(findMultipleBoard(array1));  
console.log(findMultipleBoard(array2)); 
console.log(array2)