/* Print Pascal's Triangle */

function generatePascalsTriangle(numRows) {
    if (numRows <= 0) return [];
    
    const triangle = [];

    for (let i = 0; i < numRows; i++) {
        // Initialize the current row with 1s. The row length matches (index + 1)
        const row = new Array(i + 1).fill(1);
        
        // Update the middle values of the row (excluding the first and last element)
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        
        triangle.push(row);
    }

    return triangle;
}

console.log(generatePascalsTriangle(5));

/* 
Output:
[
  [1],
  [1, 1],
  [1, 2, 1],
  [1, 3, 3, 1],
  [1, 4, 6, 4, 1]
]
*/