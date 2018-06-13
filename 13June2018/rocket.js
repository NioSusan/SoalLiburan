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