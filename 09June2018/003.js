//Solution 1
function soal3(param){
  var result=[];
  var smallBox=[];
  var count=0;
    for(var i=1;i<=param;i++){
      for(var j=1;j<=param;j++){
        count++;
        smallBox.push(count);
      }
      result.push(smallBox);
      smallBox=[];
    }
  return result;
}

/* ================================================================ */
//Solution 2
function soal3(num){
  //Step 1. Creating a multidimensional array
  var table=new Array(num); //5 rows
  for(var i=0;i<table.length;i++){
    table[i]=new Array(num); //5cols
  }
  //Step2. initialising the array
  var count=1;
  for(var row=0;row<table.length;row++){
    for(var col=0;col<table[row].length;col++){
     table[row][col]=count;
      count++;
    }
  }
  return table;
}

/* ================================================================ */
//Solution 3
function soal3(num){
  //Step 1. Creating a multidimensional array
  var table=[]; //5 rows
  for(var i=0;i<num;i++){
    table.push([]); //5cols
  }
  //Step2. initialising the array
  var count=1;
  for(var row=0;row<num;row++){
    for(var col=0;col<num;col++){
     table[row][col]=count;
      count++;
    }
  }
  return table;
}

/* ================================================================ */
//Solution 4
function soal3(num){
  var filter=[];
  var result=[];
  
  for(var i=1;i<=num*num;i++){
    filter.push(i);
    if(filter.length===num){
      result.push(filter);
      filter=[];
    } 
      
  }
  return result;
}

console.log(soal3(5)) 
/*
    output: 
    [
        [1,2,3,4,5],
        [6,7,8,9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25]
    ]
*/

console.log(soal3(4));

/*
    output: 
    [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16],
    ]
*/

console.log(soal3(5)) 
/*
    output: 
    [
        [1,2,3,4,5],
        [6,7,8,9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],
        [21,22,23,24,25]
    ]
*/

console.log(soal3(4));

/*
    output: 
    [
        [1,2,3,4],
        [5,6,7,8],
        [9,10,11,12],
        [13,14,15,16],
    ]
*/