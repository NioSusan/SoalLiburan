/* PSEUDOCODE
    FUNCTION soal2 with parameter param:number
    START
      STORE "asciiLetter" with empty string
      STORE "asciinum" with 65
      STORE "box" with empty array
      STORE "result" with empty array

      IF param EQUALS 0 THEN
        RETURN "invalid input"
      END IF

      FOR 'i' to length of param
        FOR 'j' to length of param
          IF "asciinum" EQUALS 90 THEN
            SET "asciiLetter " with CONVERT "asciinum" values into characters and to lowercase
            PUSH "asciiLetter" to "box"
            SET "asciinum" = 65
          ELSE
            SET "asciiLetter " with CONVERT "asciinum" values into characters and to lowercase
            PUSH "asciiLetter" to "box"
            SET "asciinum" = "asciinum" + 1
          END IF
        END FOR
        PUSH "box" to "result"
        SET "box" with empty array
      END FOR
      RETURN RESULT
    END FUNCTION
    
*/

function soal2(param)
{
  var asciiLetter="";
  var asciinum=65;//65-90 === A-Z;
  var box=[];
  var result=[];
  if(param===0){
    return "invalid input";
  }
  for(var i=0;i<param;i++){
    for(var j=0;j<param;j++){
      if(asciinum===90){
        asciiLetter = String.fromCharCode(asciinum).toLowerCase();
        box.push(asciiLetter);
        asciinum=65;
      } else {
        asciiLetter = String.fromCharCode(asciinum).toLowerCase();
        box.push(asciiLetter);
        asciinum++;
      } 
    }
    result.push(box);
    box=[];

  }
  return result;
}

console.log(soal2(8))
/*
    [
        ['a','b','c','d','e','f','g','h']
        ['i','j','k','l','m','n','o','p']
        ['q','r','s','t','u','v','w','x']
        ['y','z','a','b','c','d','e','f']
        ['g','h','i','j','k','l','m','n']
        ['o','p','q','r','s','t','u','v']
        ['w','x','y','z','a','b','c','d']
        ['e','f','g','h','i','j','k','l']
    ]
*/

console.log(soal2(2))
/*
    [
        ['a','b'],
        ['c','d']
    ]
*/

console.log(soal2(0)) // invalid input