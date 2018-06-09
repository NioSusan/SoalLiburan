function soal3(param)
{
  var result=[];
  var smallBox=[];
  var count=0;
    for(var i=1;i<=param;i++){
      for(var j=1;j<=param;j++){
        count++;
        smallBox.push(count);
      }
      result.push(smallBox);
      smallBox=[];
    }
  return result;
}

console.log(soal3(5)) 
/*
    output: 
    [
        [1,2,3,4,5],
        [6,7,8,9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25]
    ]
*/

console.log(soal3(4));

/*
    output: 
    [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16],
    ]
*/