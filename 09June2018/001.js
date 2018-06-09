function soal1(param)
{
  var print=[];
  if(param===0){
    return "invalid input";
  } else if(param%2!==0){ //odd numbers
    var middle = (param-1)/2;
    for(var i=0;i<param;i++){
        if(i===middle){
          print.push("*");
        } else {
          print.push(" ");
        }
    }
  } else {
    var lowMiddle = Math.floor((param-1)/2);
    var highMiddle = Math.ceil((param-1)/2);
    for(var i=0;i<param;i++){
        if(i===lowMiddle || i===highMiddle){
          print.push("*");
        } else {
          print.push(" ");
        }
    }
  }
  return print;
}

// test case
console.log( soal1(5) ) //  ['','','*','','']
console.log( soal1(4)) // ['','*','*','']
console.log( soal1(7)) // ['','','','*','','','']
console.log( soal1(10)) // ['','','','','*','*','','','','']
console.log( soal1(0)) // invalid input 
console.log( soal1(1)) // ['*']
