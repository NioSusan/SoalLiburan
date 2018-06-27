/* Solution 1 */
function soal2(param)
{
  if(param%2===0){
    return  "invalid input";
  }
   
  var num=0
  var arr=[];
  while(num<=param){
    if(num%2!==0){
      arr.push(num);
    }
    num++;
  }
  // console.log(arr);//[ 1, 3 ]
  var limit = arr.length;//3
  var middle = (param-1)/2;
  var box=[];
  var result=[];
  for(var i=0; i<limit; i++){
    for(var j=0; j<param; j++){
      if(i!==0 && (j===middle || j=== middle-i || j=== middle+i|| j===middle-1||j===middle+1)){
      box.push("*");
      }else if(j===middle || j=== middle-i || j=== middle+i){
      box.push("*");
      } else {
      box.push(" ");
      }
    }
    result.push(box);
    box=[];
  }
  // console.log(result);
  return result;
}
console.log(soal2(5))
/*
  [
      ['','','*','',''],
      ['','*','*','*',''],
      ['*','*','*','*','*']
  ]
*/

console.log(soal2(3))
/*
  [
      ['','*',''],
      ['*','*','*']
  ]
*/

console.log(soal2(4)) // invalid input
console.log(soal2(2)) // invalid input
console.log(soal2(6)) // invalid input

/* Solution 2 */
// function soal2(param)
// {
//     if(param%2===0){
//       return  "invalid input";
//     }
//     var print="";
//     var result=[];
//     var middle = (param-1)/2;
//     for(var i=0 ; i<param; i++){
//       if(middle+i===param){
//         break;
//       } 
//       for(var j=0; j<param;j++){
//         if(j === middle-i || j === middle+i){
//           print+="*";
//         }else{
//           print+="";
//         }
//       }
//        var split = print.split("");
//        result.push(split);
//     }
//    return result;
// }

// console.log(soal2(5))
// /*
//   [
//       ['','','*','',''],
//       ['','*','*','*',''],
//       ['*','*','*','*','*']
//   ]
// */

// console.log(soal2(3))
// /*
//   [
//       ['','*',''],
//       ['*','*','*']
//   ]
// */

// console.log(soal2(4)) // invalid input
// console.log(soal2(2)) // invalid input
// console.log(soal2(6)) // invalid input

