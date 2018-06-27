//Solution 1
function soal2(arr){
  var result=[];
  for(var i=0;i<arr.length;i++){
    result.push({
      'firstName' :  arr[i][0],
      'lastName' :  arr[i][1],
      'hobbies' :  arr[i][2],
      'profession' :  arr[i][3],
    });
  }
  return result;
}

/* ======================================================= */
//Solution 2
function soal2(param)
{
  var result =[];
  var obj={};
  
    for(var i=0;i<param.length;i++){
      for(var j=0; j<param[i].length;j++){
        if(j===0){
          obj.firstName = param[i][j];
        } else if(j===1){
          obj.lastName = param[i][j];
        } else if(j===2){
           obj.hobbies = param[i][j];
        } else if (j===3){
           obj.profession = param[i][j];
        }
      }
      result.push(obj);
      obj={};
    }
  return result;
}

console.log(soal2([['Aries','Dimas',['coding','pubg','anime'],'Web Developer'],['Radit','Dika',['manga','gaming'],'Web Developer']]));

/* output 
  
  [
    {
        firtName:"Aries",
        lastName:"Dimas",
        hobbies:['coding','pubg','anime'],
        profession:'Web Developer'
    },
    {
        firtName:"Radit",
        lastName:"Dika",
        hobbies:['manga','gaming'],
        profession:'Web Developer'
    }
  ]

*/ 

console.log(soal2([ ['Awtian','Akbar',['coding','main kucing','anime'],'Web Instructur'],['Megalo','Maniak',['metal music','maniac'],'Maniac Expert']]));
/* output 
  
  [
    {
        firtName:"Aries",
        lastName:"Dimas",
        hobbies:['coding','pubg','anime'],
        profession:'Web Developer'
    },
    {
        firtName:"Radit",
        lastName:"Dika",
        hobbies:['manga','gaming'],
        profession:'Web Developer'
    }
  ]

*/ 