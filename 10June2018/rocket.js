/*
    membuat bendera scotlandia

    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *

     petunjuk : 
    - input harus lebih dari 3 , jika tidak maka "invalid input"
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/
//Solution 1
function scotlandFlag(param){
  if(param<3 || param%2===0){
    return "Invalid input";
  }
  var count=param-1;
  for(var i=0;i<param;i++){
    var print="";
    for(var j=0;j<param;j++){
      if(j===i || j===count-i){
        print+="*";
      } else {
        print+=" ";
      }
    }
    console.log(print);
  }
}
/* ======================================================= */
//Solution 2
function scotlandFlag(param){
    var print;
    var result="";
    var num=1;

    if(param%2===0 || param<3){
      return "invalid input";
    }
    for(var i=0; i<param; i++){
      print="";
      for(var j=0; j<param; j++){
        if(j===i || j===param-num){
          print+="*";
        } else {
          print+=" ";
        }   
      }
      num++;   
      // console.log(print);
      result+=print + "\n";
    }
   return result;
   
}

console.log(scotlandFlag(5))
/*
    '*   *'
    ' * * '
    '  *  '
    ' * * '
    '*   *'
*/

console.log(scotlandFlag(9))
/*
    '*       *'
    ' *     * '
    '  *   *  '
    '   * *   '
    '    *    '
    '   * *   '
    '  *   *  '
    ' *     * '
    '*       *'
*/