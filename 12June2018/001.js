//Solution 1
function soal1(str){
  for(var i=str.length-1;i>=0;i--){
    if(str[i]!==" "){
      console.log(str[i]);
    }
  }
}
/* =========================== */
//Solution 2
function soal1(str){
  var result="";
  for(var i=str.length-1;i>=0;i--){
    if(str[i]!==" "){
      result+=str[i] + "\n";
    }
  }
  return result;
}
console.log(soal1("Aries Dimas Yudhistira"));
/*
    a
    r
    i
    t
    s
    i
    h
    d
    u
    Y
    s
    a
    m
    i
    D
    s
    e
    i
    r
    A
*/