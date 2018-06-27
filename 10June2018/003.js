//Solution 1
function soal3(arr){
  arr.sort();
  var oby={};
  for(var animal of arr){
    if(!oby[animal[0]]){
      oby[animal[0]] = [animal];
    } else {
      oby[animal[0]].push(animal);
    }
  }
  return oby;
}

/* ========================================================= */
//Solution 2
function AlphabetGrouping(arr){
    arr.sort();
    var match=[];
    var noMatch=[];
    var result=[];
    for(var i=0;i<=arr.length;i++){
      var currentFirstAlpha = arr[0][0];//A
      for(var j=0;j<arr.length;j++){
        if(arr[j][0]===currentFirstAlpha){
          match.push(arr[j]);
        } else {
          noMatch.push(arr[j]);
        }
      }
      result.push(match);
      match=[];
      arr=noMatch;
      noMatch=[];
      i=0;
    }
   return result; 
}
  
function soal3(param)
{ 
    var arr= AlphabetGrouping(param);
    var obj={};
    for(var i in arr){
      obj[arr[i][0][0]] = arr[i];
    }
    return obj;
}

//P.S. the output will be printed out in an Ascending (A-Z) order 
  
console.log(soal3(['Ayam','Kucing','Bebek','Sapi','Babi','Curut','Cacing','Monyet']));
  /*
      {
          A:['Ayam'],
          B:['Bebek','Babi'],
          C:['Cacing','Curut'],
          K:['Kucing'],
          M:['Monyet'],
          S:['Sapi']
      }
  */
  
console.log(soal3(['Anjing','Kuda','Anoa','Zebra','Lipan','Kudanil','Landak']));
  
  /*
      {
          A:['Anjing','Anoa'],
          L:['Lipan','Landak'],
          K:['Kuda','Kudanil'],
          Z:['Zebra']
      }
  */