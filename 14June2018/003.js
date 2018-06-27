//Solution 1
function soal3(num){
    var table = [];
    for(var i=0;i<num;i++){
      table.push([]);
    }
    var count=1;
    for(var row=0;row<num;row++){
      for(var col=0;col<num;col++){
        table[row][col]=count;
        count++;
        if(row%2!==0){
            table[row].sort(function(a,b){
                return b-a;
            });
        }
      }
    }
    return table;
}
//Solution 2
function soal3(param1){
    var count=1;
    var box=[];
    var result=[];
    for(var i=0;i<param1;i++){
       for(var j=0; j<param1; j++){
        box.push(count);
        count++;
       }
       if(i%2!==0){
        box.sort(function(a,b){
          return b-a;
        })
       } 
       result.push(box);
       box=[];
    }
    return result;
 }

console.log(soal3(3))
/*
    [
        [1,2,3],
        [6,5,4],
        [7,8,9]
    ]
*/

console.log(soal3(2))
/*
    [
        [1,2],
        [4,3]
    ]
*/

console.log(soal3(4))
/*
    [
        [1,2,3,4],
        [8,7,6,5],
        [9,10,11,12],
        [16,15,15,13]
    ]
*/


