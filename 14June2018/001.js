function soal1(objList,id,action)
{
    if(action === "view"){
      return objList[id];
    } else if (action === "delete"){
      delete objList[id];
      // console.log(objList);
      /* the index is unordered
      { 0: { name: 'dimas', codename: 'surgeon of death' },
        2: { name: 'icha', codename: 'the real dementor' }
      */
    }
    //reindex obj
    var i = 0 //to keep track on the index
    for(var id in objList){
      if(id != i){
        objList[i] = objList[id]; //update the new index
          delete objList[id]; //delete the old one so it wont be double 
      }
      i++;
    }
    return objList;  
}

/* Solution 2 */
function soal1(oby, id, order){
  if(order==="view"){
      return oby[id];
  } else if(order==="delete"){
      delete oby[id];
  }
  var count=0;
  for(var key in oby){
    if(Number(key)!==count){
      oby[count]= oby[key];
      delete oby[key];
    }
    count++;
  }
  return oby;
}

console.log(soal1({
    0:{name:"dimas",codename:"surgeon of death"},
    1:{name:"awtian",codename:"the black assasin"},
    2:{name:"icha",codename:"the real dementor"}
},1,"view"));
/* { name:"awtian",codename:"the black assasin"} */

console.log(soal1({
    0:{name:"dimas",codename:"surgeon of death"},
    1:{name:"awtian",codename:"the black assasin"},
    2:{name:"icha",codename:"the real dementor"}
},1,"delete"));
/*  
    { 
        0:{ name:"dimas",codename:"surgeon of death"},
        1:{ name:"icha",codename:"the real dementor"}
    }
 */