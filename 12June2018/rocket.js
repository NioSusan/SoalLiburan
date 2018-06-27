function persegi(a,b){
  if(a===0 || b===0){
    return "invalid value";
  }
  for(var i=0; i<b;i++){
    var print="";
    for(var j=0 ; j<a ;j++){
      if(i===0 || i===(b-1)){
         print+="#";
      }else if(j===0 || j===(a-1)){
         print+="#";
      }else {
        print+=" ";
      }
    }
    console.log(print);
  }
}
console.log(persegi(5,7))
/*
    #####
    #   #
    #   #
    #   #
    #   #
    #   #
    #####
*/
console.log(persegi(6,3));
// /*
//     ######
//     #    #
//     ######
// */
console.log(persegi(0,7)) // invalid value 
console.log(persegi(4,0)) // invalid value 