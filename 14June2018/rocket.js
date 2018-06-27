//Solution 1
function rocket(param){ 
    var box=[];
    var result=[];
    for(var i=0;i<param;i++){
      for(var j=0;j<param;j++){
         box.push([i,j]);
      }
      result.push(box);
      box=[];
    }
    return result;
}
  
//Solution 2
function rocket(param){ 
    var box1=[];
    var box2=[];
    var result=[];
    for(var i=0;i <param; i++){
      for(var j=0;j<param;j++){
          box1.push(i);
          box1.push(j);
          box2.push(box1);
          box1=[];
      }
      result.push(box2);
      box2=[];
      
     
    }
    return result;
}

console.log(rocket(3))

/*
    [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]]
    ]
*/