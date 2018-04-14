function mod(a,b)
{ return ((a%b)+b)%b;

}
function Gcd(a,b){
	if(a==0)
		return b;
	else
		return Gcd(b%a,a);
}
function monInv(a,m){
    a %= m;
    for (var x = 1; x < m; x++) {
        if ((a*x)%m == 1) {
            return x;
        }
    }
}
function me(a, b, n) {
  a = a % n;
  var result = 1;
  var x = a;

  while(b > 0){
    var leastSignificantBit = b % 2;
    b = Math.floor(b / 2);

    if (leastSignificantBit == 1) {
      result = result * x;
      result = result % n;
    }

    x = x * x;
    x = x % n;
  }
  return result;
}

function modexp(msg,key,N){
var y;
if(key==0){
  return 1;
}
if(key & 1==0){
  y=modexp(msg,key/2,N);
  return mod(y*y,N);
  }
  else{
    return mod(mod(msg,N)*modexp(msg,key-1,N),N);
  }

}
function euler(p,q){
  return (p-1)*(q-1);
}

function priv_key(pub,euler){}

function isPrime3(n) {
 if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false;
 if (n%2==0) return (n==2);
 if (n%3==0) return (n==3);
 var m=Math.sqrt(n);
 for (var i=5;i<=m;i+=6) {
  if (n%i==0)     return false;
  if (n%(i+2)==0) return false;
 }
 return true;
}
function randp(){
  var n;
  var j;
  for(j=0;j<15;j++){
    n=Math.floor(Math.random()*200);
    if(isPrime3(n)){
      return n;
    }
    else{
      continue;
    }
  }
}
function pub_key(min,p,q) {
     max=euler(p,q);
     var i;
     var n;
     for(i=0;i<10;i++){
       n=Math.floor(Math.random() * (max - min + 1)) + min;
       if(isPrime3(n) && Gcd(n,max)==1 && n<max){

         return n;}
         else {
          continue;
         }
       }
     }

function rsa(msg,key,n){
  return me(msg,key,n);

}
function keygen(){
  var p=  document.getElementById('data1').value;
  var q=  document.getElementById('data2').value;
var e =euler(p,q);
  var pub=pub_key(3,p,q);
  var pri=monInv(pub,e);


    document.getElementById('pub').value=pub;
      document.getElementById('pri').value=pri;
        document.getElementById('n').value=p*q;
        document.getElementById('e').value=e;

}
function dcode(){
  var c=parseInt(document.getElementById('dd').value);

  var priv=parseInt(document.getElementById('pke').value);
var n=document.getElementById('n').value;
  document.getElementById('dec').value=rsa(c,priv,n);

}
function ecode(){
  var data=document.getElementById('da').value;
  var pubk=  document.getElementById('pubk').value;
  var n=  document.getElementById('n').value;
  var en=rsa(data,pubk,n);
    document.getElementById('en').value=en;

}
