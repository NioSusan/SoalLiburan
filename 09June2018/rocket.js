/*
    soal : 
    buatlah bendera inggris pada abad pertengahan dan era perang salib 
    dengan lambang St. George's Cross, 
    https://id.wikipedia.org/wiki/Bendera_Inggris

    dengan berbagai ukuran yang ditentukan
    oleh input. bendera berbentuk persegi .

    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *

    petunjuk : 
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/

//Solution 1 - console log
function benderaInggris(num){
  if(num%2===0){
    return "Invalid input"
  }
  var middle=(num-1)/2;
  for(var i=0;i<num;i++){
    var print = "";
    for(var j=0; j<num; j++){
      if(i===middle){
        print+="*";
      }else if(j===middle){
        print+="*";
      } else {
         print+=" ";
      }
    }
    console.log(print);
  }
}

/* Solution 2 - return */
function benderaInggris(param)
{
  var middle = (param-1)/2;//(9-1)/2=4

  var print="";
    if(param%2===0){
      return "invalid input";
    } else {
      for(var i=0;i<param;i++){
        for(var j=0;j<param;j++){
          if(i===middle){
            print+="*";
          }else if(j===middle){
            print+="*";
          } else {
            print+=" ";
          }
        }
        print+="\n";
      }
    }
return print;
}
console.log(benderaInggris(9))
/*
    output:
    '    *    ' // 1
    '    *    ' // 2
    '    *    ' // ..
    '    *    '
    '*********'
    '    *    '
    '    *    '
    '    *    '
    '    *    ' // 9
*/

console.log(benderaInggris(5))
/*
    '  *  '
    '  *  '
    '*****'
    '  *  '
    '  *  '
*/

console.log(benderaInggris(4)) // invalid input
