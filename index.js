function openNav() {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("main").style.display = "none";
    document.getElementById("close").style.display = "block";
    document.getElementById("last-item").style.marginBottom = "10px";
}
  
function closeNav() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("main").style.display = "flex";
}