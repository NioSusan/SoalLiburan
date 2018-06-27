
/*
    diberikan sebuah array angka dimana , angka - angka tersebut adalah 
    increment dari angka sebelumnya sebesar 1 . 
    tugas kalian adalah menjumlahkan seluruh angka tersebut dengan syarat: 
    - Tidak boleh memakai perulangan 
    - Tidak boleh memakai function magic apapun kecuali .length pada array
    - Tidak boleh memakai rekursif 
*/

/* Solution 1-without sort() */ 
function addAll(arr) {
    return ((arr[0] + arr[arr.length-1]) /2) * arr.length;
    // var firstNum = arr[0];
    // var lastNum = arr[arr.length-1];
    // // Using Arithmetic Progression summing formula
    // if(firstNum<lastNum){
    //   var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
    //   return sum;
    // } else {
    //   var sum = (firstNum - lastNum + 1) * (firstNum + lastNum) / 2;
    //   return sum;
    // }  
}
console.log(addAll([1,2,3,4,5]));//15
console.log(addAll([5,6,7,8,9,10]));//45
console.log(addAll([2,3,4,5,6]));//20
console.log(addAll([8,7,6,5,4,3,2]));//35

/* Solution 1 -with sort() */
function addAll(arr) {
    var sortedArr = arr.sort((a,b) => a-b);
    var firstNum = arr[0];
    var lastNum = arr[arr.length-1];
    // Using Arithmetic Progression summing formula
    var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
    return sum;
}
console.log(addAll([1,2,3,4,5]));//15
console.log(addAll([5,6,7,8,9,10]));//45
console.log(addAll([2,3,4,5,6]));//20
console.log(addAll([8,7,6,5,4,3,2]));//35
/* Solution 2 */
function addAll(arr){
    return eval(arr.join('+'));
}
  
/* Solution 3 - Using reduce
function addAll(arr){
    return arr.reduce(function(a,b){
      return a+b;
    });
} */
  
  console.log(addAll([1,2,3,4,5]));
  // 15
  
  console.log(addAll([5,6,7,8,9,10]));
  // 45
  
  console.log(addAll([2,3,4,5,6]));
  // 20
  
  console.log(addAll([8,7,6,5,4,3,2])); 
  // 35