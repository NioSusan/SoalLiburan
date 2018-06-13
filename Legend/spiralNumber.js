function spiralNumber(param)
{
    
    var rows = param;
    var cols = param;
 
    var matrix = [];
    for (var row = 0; row < rows; row++) {
        matrix[row] = [];
        for (var col = 0; col < cols; col++) {
            matrix[row][col] = 0;
        }
    }
 
    var top = 0;
    var bottom = rows - 1;
    var left = 0;
    var right = cols - 1;
 
    var index = 1;
    var direction = 0;
    while (top <= bottom && left <= right) {
        switch (direction % 4) {
            case 0:
                for (var col = left; col <= right; col++) {
                    matrix[top][col] = index++;
                }
                top++;
                direction++;
                break;
            case 1:
                for (var row = top; row <= bottom; row++) {
                    matrix[row][right] = index++;
                }
                right--;
                direction++;
                break;
            case 2:
                for (var col = right; col >= left; col--) {
                    matrix[bottom][col] = index++;
                }
                bottom--;
                direction++;
                break;
            default:
                for (var row = bottom; row >= top; row--) {
                    matrix[row][left] = index++;
                }
                left++;
                direction++;
                break;
        }
    }
  
  return matrix;
  // return matrix.map(r => r.join(' ')).join('\n');

}

console.log(spiralNumber(3))
/*
    [
        [1,2,3],
        [8,9,4]
        [7,6,5]
    ]
*/

console.log(spiralNumber(4))
/*
    [
        [1,2,3,4],
        [12,13,14,5],
        [11,16,15,6],
        [10,9,8,7]
    ]
*/