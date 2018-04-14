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
function res(){
	var x= document.getElementById('data').value;
	x=parseInt(x);

	if(isPrime3(x)==true){
        document.getElementById('ans').innerHTML="Yes it is !!!"
	}
	else{
		 document.getElementById('ans').innerHTML="Nope it's not !!!";
	}
}
function mod(a,b)
{ return ((a%b)+b)%b;

}
function Mod_sub(){

	x = document.getElementById('sub1').value;
    x=parseInt(x);
    y=document.getElementById('sub2').value;
    y=parseInt(y);
    z=document.getElementById('sub3').value;
    z=parseInt(z);
    var s = (x) - (y);

	document.getElementById('an').innerHTML= "("+x.toString() +"-"+y.toString()+")"+" mod "+ z.toString() +" = "+ mod(s,z).toString();
}
function Mod_multi(){

	x = document.getElementById('mul1').value;
    x=parseInt(x);
    y=document.getElementById('mul2').value;
    y=parseInt(y);
    z=document.getElementById('mul3').value;
    z=parseInt(z);
    var n = (x) * (y);

	document.getElementById('answer').innerHTML= "("+x.toString() +"*"+y.toString()+")"+" mod "+ z.toString() +" = "+ mod(n,z).toString();
}


function Mod_add(){

	x = document.getElementById('val1').value;
    x=parseInt(x);
    y=document.getElementById('val2').value;
    y=parseInt(y);
    z=document.getElementById('val3').value;
    z=parseInt(z);
    var l = (x) + (y);

	document.getElementById('answ').innerHTML= "("+x.toString() +"+"+y.toString()+")"+" mod "+ z.toString() +" = "+ mod(l,z).toString();
}

function Mod(){

	x=document.getElementById('data1').value;
	x=parseInt(x);
    y=document.getElementById('data2').value;
    y=parseInt(y);

	document.getElementById('ans').innerHTML= x.toString() +" mod "+ y.toString() +" = "+ mod(x,y).toString();
}
leastFactor = function(n) {
 if (isNaN(n) || !isFinite(n)) return NaN;
 if (n==0) return 0;
 if (n%1 || n*n<2) return 1;
 if (n%2==0) return 2;
 if (n%3==0) return 3;
 if (n%5==0) return 5;
 var m = Math.sqrt(n);
 for (var i=7;i<=m;i+=30) {
  if (n%i==0)      return i;
  if (n%(i+4)==0)  return i+4;
  if (n%(i+6)==0)  return i+6;
  if (n%(i+10)==0) return i+10;
  if (n%(i+12)==0) return i+12;
  if (n%(i+16)==0) return i+16;
  if (n%(i+22)==0) return i+22;
  if (n%(i+24)==0) return i+24;
 }
 return n;
}

isPrime = function(n) {
 if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false;
 if (n==leastFactor(n)) return true;
 return false;
}
function factor(n){
 if (isNaN(n) || !isFinite(n) || n%1 || n==0) return n.toString();
 if (n<0) return '-'+factor(-n);
 var minFactor = leastFactor(n);
 if (n==minFactor) return n.toString();
 return minFactor+" x "+factor(n/minFactor);
}
function nextPrime(n){
 if (isNaN(n) || !isFinite(n)) return NaN;
 if (n<2) return 2;
 n = Math.floor(n);
 for (var i=n+n%2+1; i<9007199254740992; i+=2) {
  if (isPrime(i)) return i;
 }
 return NaN;
}

function nextPrimeTwin(n) {
 if (isNaN(n) || !isFinite(n)) return NaN;
 if (n<2) return 2;
 if (n<3) return 3;
 if (n<5) return 5;
 for (var i=6*Math.ceil(Math.floor(n+2)/6); i<9007199254740880; i+=6) {
  if (pscreen(i-1) && pscreen(i+1) && isPrime(i-1) && isPrime(i+1))
    return i-1;
 }
 return NaN;
}


function nextPrimeQuad(n) {
 if (isNaN(n) || !isFinite(n)) return NaN;
 if (n<11) return 11;
 for (var i=30*Math.ceil(Math.floor(n-10)/30); i<9007199254740880; i+=30) {
  if (pscreen(i+11) && pscreen(i+13) && pscreen(i+17) && pscreen(i+19)
   && isPrime(i+11) && isPrime(i+13) && isPrime(i+17) && isPrime(i+19))
    return i+11;
 }
 return NaN;
}

function pscreen(n) {
 if (n<=19 || n%3 && n%5 && n%7 && n%11 && n%13 && n%17 && n%19) return true;
 return false;
}
function pFact(){
	var x = document.getElementById('data').value;
	x=parseInt(x);
	document.getElementById('ans').innerHTML=factor(x).toString();
}
function Gcd(a,b){
	if(a==0)
		return b;
	else
		return Gcd(b%a,a);
}
function gcd(){
	var x= document.getElementById('data1').value;
	var y= document.getElementById('data2').value;
	document.getElementById('ans').innerHTML=Gcd(x,y).toString();


}
function congoMod(){
	var x = document.getElementById('data1').value;
	x=parseInt(x);
	var y=document.getElementById('data2').value;
	y=parseInt(y);
    var z= document.getElementById('data3').value;
    z=parseInt(z);
    if((x-y)%z==0){
    	document.getElementById('ans').innerHTML="Congruency Holds !!!!";
    }
    else{
    	document.getElementById('ans').innerHTML="Congruency Does Not Hold !!!!";
    }
}

var feed = document.getElementById('feed');
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
feed.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }
function submit(){
    modal.style.display = "none";
}
