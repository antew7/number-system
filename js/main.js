function openNav() {
  document.getElementById("mySidenav").style.width = "15%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function menuClick() {
    document.getElementById("menu").onclick = () => {
        openNav();
    };
}