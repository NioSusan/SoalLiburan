function soal2(arr){
  if(arr.length<=2){
    return "invalid input";
  }
  var low=Math.floor((arr.length-1)/2);
  var high=Math.ceil((arr.length-1)/2);
  var multi=arr[0]*arr[arr.length-1];
  for(var i=0;i<arr.length;i++){
    if(arr.length%2===0){
      arr[high]=multi;
    }
    arr[low]=multi;
  }
  return arr;
}
console.log(soal2([34,'','','',40]))
// [34,'',1360,'',40]

console.log(soal2([1,2,3,4,5]))
// // [1,2,5,4,5]

console.log(soal2([20,'','','','','','',30]))
// // [20,'','',600,600,'','',30])

console.log(soal2([6,'','','','','',9]))
// [6,'','',54,'','',9]

console.log(soal2([1,2])) // invalid input 
console.log(soal2([1])) // invalid input 
console.log(soal2([])) // invalid input 