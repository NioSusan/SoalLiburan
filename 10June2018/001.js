/*
    analisa sendiri dengan apa yang diminta soal melalui test case. 
    wajib menggunakan pseudocode

    PSEUDOCODE HERE : 

    FUNCTION soal1 
    parameter: param (type of data: number)
    START
    STORE "count" with 1
    STORE "print" with empty array
    IF param <= 0 THEN
      RETURN "invalid input"
    END IF
    WHILE param > 0 DO
      IF "count" EQUALS 1 THEN
        PUSH "i" to "print"
        SET "count" with "count" = "count" + 1
      ELSE IF "count" EQUALS 2 THEN
        PUSH "@" to "print"
        SET "count" with "count" = "count" + 1
      ELSE IF "count" EQUALS 3 THEN
        PUSH "#" to "print"
        SET "count" with 1
      END IF
      SET "param" with "param" = "param" - 1
    END WHILE
    RETURN "print"
    END FUNCTION

*/
function soal1(param)
{
  var count = 1;
  var print = [];
  if(param<=0){
    return "invalid input";
  }
  while(param>0){
    if(count === 1){
      print.push("!");
      count++;
    } else if (count === 2){
      print.push("@");
      count++;
    } else if (count === 3){
      print.push("#");
      count=1;
    }
    param--;
  }
  return print;
}

console.log(soal1(3))
// output : ['!','@','#']

console.log(soal1(6));
// output : ['!','@','#','!','@','#']

console.log(soal1(4))
// output : ['!','@','#','!']

console.log(soal1(0)) // invalid input
