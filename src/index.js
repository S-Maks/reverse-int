module.exports = function reverse (n) {
    let k = n;
    var dex;
    if(n<0){
         dex = -1;
    }else{
         dex = 1;
    }
    let test = 0;
    while(k!=0){
      dex*=10;
      k = Math.trunc(k/10);
    }
    dex/=10;
    while(n!=0){
        console.log(test);
      test += n%10*dex;
      dex/=10;
      n = Math.trunc(n/10);
    }
    return test;
}
