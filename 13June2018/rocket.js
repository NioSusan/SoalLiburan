function rocket(param)
{   var result=[];
    var box=[];
    var middle = (param-1)/2;
    var lowMiddle = Math.floor((param-1)/2);
    var highMiddle = Math.ceil((param-1)/2);

    for(var i=0 ; i<param; i++){
      for(var j=0 ; j<param ; j++){
         if(param%2!==0){ //odd numbers
            if(i===middle && j===middle){
              box.push("*");
            } else {
              box.push(" ");
            }
         } else {
           if((i===lowMiddle || i===highMiddle) && (j===lowMiddle || j===highMiddle)){
             box.push("*");
          } else {
           box.push(" ");
          }
        }
      }
      result.push(box);
      box=[];
    }
    return result;
}
/* =============================================================== */
//Solution 2
function rocket(num){
    var table= [];
    for(var i=0;i<num;i++){
      table.push([]);
    }
    var low=Math.floor((num-1)/2);
    var high=Math.ceil((num-1)/2);
    for(var row=0;row<num;row++){
      for(var col=0;col<num;col++){
        if(num%2===0){
            if((row===low || row===high) && (col===low || col===high)){
            table[row][col]="*";
          }else{
            table[row][col]=" ";
          }
        }else{
          if(row===low && col===low){
            table[row][col]="*";
          }else{
            table[row][col]=" ";
          }
        }
      }
    }
    return table;
}

console.log(rocket(5))
/*
    [
        ['','','','',''],
        ['','','','',''],
        ['','','*','',''],
        ['','','','',''],
        ['','','','','']
    ]
*/

console.log(rocket(3))
/*
    [
        ['','',''],
        ['','*',''],
        ['','',''],
      
//     ]
// */

console.log(rocket(4))
/*
    [
        ['','','',''],
        ['','*','*',''],
        ['','*','*',''],
        ['','','',''],
        
    ]
*/

console.log(rocket(2))
/*
    [
        ['*','*'],
        ['*','*'],
    ]
*/

console.log(rocket(1))
/*
    [
        ['*']
    ]
*/