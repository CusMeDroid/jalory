function myFunction(x) {
    if (x.matches) {
        document.getElementById("myprofile").style.display = "none";
        document.getElementById("btnprofile").style.display = "block";
        document.getElementById("btnxprofile").style.display = "none";
        document.getElementById("btnprofile").onclick = function () {
            document.getElementById("myprofile").style.display = "flex";
            document.getElementById("btnxprofile").style.display = "block";
            document.getElementById("btnprofile").style.display = "none";
        };

        document.getElementById("btnxprofile").onclick = function () {
            document.getElementById("myprofile").style.display = "none";
            document.getElementById("btnxprofile").style.display = "none";
            document.getElementById("btnprofile").style.display = "block";  
        };
    } else {
        document.getElementById("myprofile").style.display = "flex";
    }
}

var x = window.matchMedia("(max-width: 600px)");

myFunction(x);

x.addEventListener("change", function() {
  myFunction(x);
});