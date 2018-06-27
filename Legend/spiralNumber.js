function spiralNumber(param)
{
    
    var rows = param; //3
    var cols = param; //3
 
    var matrix = [];
    for (var row = 0; row < rows; row++) {
        matrix[row] = []; //adding empty array inside the matrix
        //console.log(matrix); // [[][][]] 
        for (var col = 0; col < cols; col++) {
            matrix[row][col] = 0; //adding 0 to each of those empty array 
            //console.log(matrix); //[[0,0,0], [0,0,0], [0,0,0]]
        }
    }
 
    var top = 0;
    var bottom = rows - 1; //2
    var left = 0;
    var right = cols - 1; //2
 
    var index = 1;
    var direction = 0;
    while (top <= bottom && left <= right) {
        switch (direction % 4) {
            case 0: //0%4 = 0
                for (var col = left; col <= right; col++) {
                    matrix[top][col] = index++;
                }
                //console.log(matrix); // [[1,2,3],[0,0,0],[0,0,0]]
                //last number [9] is when direction=4, so 4%4=0 => top is 1, col is 1 = 9; 
                //console.log(matrix); //[[1,2,3],[8,9,4],[7,6,5]]
                top++;
                direction++;
                break;
            case 1: //1%4 = 1
                for (var row = top; row <= bottom; row++) {
                    matrix[row][right] = index++;
                }
                //console.log(matrix);// [[1,2,3],[0,0,4],[0,0,5]]
                right--;
                direction++;
                break;
            case 2: // 2%4 = 2
                for (var col = right; col >= left; col--) {
                    matrix[bottom][col] = index++;
                }
                //console.log(matrix);// [[1,2,3],[0,0,4],[7,6,5]]
                bottom--;
                direction++;
                break;
            default:
                for (var row = bottom; row >= top; row--) {
                    matrix[row][left] = index++;
                }
                //console.log(matrix); //[[1,2,3],[8,0,4],[7,6,5]]
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