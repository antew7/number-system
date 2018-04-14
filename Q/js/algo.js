function bubble_sort(param){
var i;
var j;
	for(i=0;i<param.length;i++){
		console.log(param[i]);
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
