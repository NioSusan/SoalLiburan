//Solution 1
function soal3(param){
    var under20=[];
    var over20=[];
    var obj={};
    for(var elem of param){
      if(elem[1]<20){
        under20.push(elem[0]);
      } else {
        over20.push(elem[0]);
      }
    }
  
    obj["under20"]=under20;
    obj["over20"]=over20;
    return obj;
}

/* ============================= */
function soal3(arr){
    var obj={};
    for(var elem of arr){
      if(elem[1]<20){
        if(!obj["under20"]){
          obj["under20"]=[];
        }
        obj["under20"].push(elem[0]);
      } else {
        if(!obj["over20"]){
          obj["over20"]=[];
        }
        obj["over20"].push(elem[0]);
      }
    }
    return obj;
}

console.log(soal3([
    ["dimas",17],
    ["akbar",28],
    ["rifki",30],
    ["dimitri",18],
    ["saitama",19]
]));

/*
    {
        under20:["dimas",'dimitri','saitama'],
        over20:["akbar","rifki"]
    }
*/