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
//Solution 1 - using array literal
function soal2(num){
  if(num<=0){
    return "Invalid input";
  }
  var table=[];
  for(var i=0;i<num;i++){
    table.push([]);
  }
  var start=97;
  var end=122;
  for(var row=0;row<num;row++){
    for(var col=0;col<num;col++){
      table[row][col]= String.fromCharCode(start);
      if(start===end){
        start=97;
      }else{
        start++;
      }
    }
  }
  return table;
}

/* ==================================================== */
//Solution 2 - Using new Array(num);
function soal2(num){
  if(num<=0){
    return "Invalid input";
  }
  var table=new Array(num);
  for(var i=0;i<table.length;i++){
    table[i]=new Array(num);
  }
  var start=97;
  var end=122;
  for(var row=0;row<table.length;row++){
    for(var col=0;col<table[row].length;col++){
      table[row][col]= String.fromCharCode(start);
      if(start===end){
        start=97;
      }else{
        start++;
      }
    }
  }
  return table;
}

/* ==================================================== */
//Solution 3 - using num*num
function soal2(num){
  if(num<=0){
    return "Invalid input";
  }
  var result=[];
  var filter=[];
  var start=97;
  var end=122;
  for(var i=0;i<=num*num;i++){
    filter.push(String.fromCharCode(start));
    if(start===end){
        start=97;
    }else{
        start++;
    }
    if(filter.length===num){
      result.push(filter);
      filter=[];
    }
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

