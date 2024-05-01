/* Search Function */
function searchFunc() {
    var mSearch = document.getElementById("txtsearch").value;
    if (mSearch < 1 || !mSearch) {
        alert("Do not be empty!");
    } else {
        alert("Coming Soon!");
    }
}

/* Nav button */
document.getElementById("n_home").onclick = function () {
    document.getElementById("n_home").setAttribute("class", "a_active");
    document.getElementById("n_about").classList.remove("a_active");
    document.getElementById("n_search").classList.remove("a_active");
    document.getElementById("n_privacy").classList.remove("a_active");
    /* Bottom */
    document.getElementById("btm_home").setAttribute("class", "a_active");
    document.getElementById("btm_about").classList.remove("a_active");
    document.getElementById("btm_search").classList.remove("a_active");
    document.getElementById("btm_privacy").classList.remove("a_active");
    /* Pages */
    document.getElementById("home").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("privacy").style.display = "none";
};

document.getElementById("n_about").onclick = function () {
    document.getElementById("n_home").classList.remove("a_active");
    document.getElementById("n_about").setAttribute("class", "a_active");
    document.getElementById("n_search").classList.remove("a_active");
    document.getElementById("n_privacy").classList.remove("a_active");
    /* Bottom */
    document.getElementById("btm_home").classList.remove("a_active");
    document.getElementById("btm_about").setAttribute("class", "a_active");
    document.getElementById("btm_search").classList.remove("a_active");
    document.getElementById("btm_privacy").classList.remove("a_active");
    /* Pages */
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("search").style.display = "none";
    document.getElementById("privacy").style.display = "none";
};

document.getElementById("n_search").onclick = function () {
    document.getElementById("n_home").classList.remove("a_active");
    document.getElementById("n_about").classList.remove("a_active");
    document.getElementById("n_search").setAttribute("class", "a_active");
    document.getElementById("n_privacy").classList.remove("a_active");
    /* Bottom */
    document.getElementById("btm_home").classList.remove("a_active");
    document.getElementById("btm_about").classList.remove("a_active");
    document.getElementById("btm_search").setAttribute("class", "a_active");
    document.getElementById("btm_privacy").classList.remove("a_active");
    /* Pages */
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("search").style.display = "block";
    document.getElementById("privacy").style.display = "none";
};

document.getElementById("n_privacy").onclick = function () {
    document.getElementById("n_home").classList.remove("a_active");
    document.getElementById("n_about").classList.remove("a_active");
    document.getElementById("n_search").classList.remove("a_active");
    document.getElementById("n_privacy").setAttribute("class", "a_active");
    /* Bottom */
    document.getElementById("btm_home").classList.remove("a_active");
    document.getElementById("btm_about").classList.remove("a_active");
    document.getElementById("btm_search").classList.remove("a_active");
    document.getElementById("btm_privacy").setAttribute("class", "a_active");
    /* Pages */
    document.getElementById("home").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("search").style.display = "none";
    document.getElementById("privacy").style.display = "block";
};

/* Bottom nav */
function myFunction(x) {
    if (x.matches) {
        document.getElementById("myprofile").style.display = "none";
        document.getElementById("btnprofile").style.display = "block";
        document.getElementById("btnxprofile").style.display = "none";

        document.getElementById("btm_home").onclick = function () {
            document.getElementById("n_home").setAttribute("class", "a_active");
            document.getElementById("n_about").classList.remove("a_active");
            document.getElementById("n_search").classList.remove("a_active");
            document.getElementById("n_privacy").classList.remove("a_active");
            /* Bottom */
            document.getElementById("btm_home").setAttribute("class", "a_active");
            document.getElementById("btm_about").classList.remove("a_active");
            document.getElementById("btm_search").classList.remove("a_active");
            document.getElementById("btm_privacy").classList.remove("a_active");
            /* Pages */
            document.getElementById("home").style.display = "block";
            document.getElementById("about").style.display = "none";
            document.getElementById("search").style.display = "none";
            document.getElementById("privacy").style.display = "none";
        };

        document.getElementById("btm_about").onclick = function () {
            document.getElementById("n_home").classList.remove("a_active");
            document.getElementById("n_about").setAttribute("class", "a_active");
            document.getElementById("n_search").classList.remove("a_active");
            document.getElementById("n_privacy").classList.remove("a_active");
            /* Bottom */
            document.getElementById("btm_home").classList.remove("a_active");
            document.getElementById("btm_about").setAttribute("class", "a_active");
            document.getElementById("btm_search").classList.remove("a_active");
            document.getElementById("btm_privacy").classList.remove("a_active");
            /* Pages */
            document.getElementById("home").style.display = "none";
            document.getElementById("about").style.display = "block";
            document.getElementById("search").style.display = "none";
            document.getElementById("privacy").style.display = "none";
        };

        document.getElementById("btm_search").onclick = function () {
            document.getElementById("n_home").classList.remove("a_active");
            document.getElementById("n_about").classList.remove("a_active");
            document.getElementById("n_search").setAttribute("class", "a_active");
            document.getElementById("n_privacy").classList.remove("a_active");
            /* Bottom */
            document.getElementById("btm_home").classList.remove("a_active");
            document.getElementById("btm_about").classList.remove("a_active");
            document.getElementById("btm_search").setAttribute("class", "a_active");
            document.getElementById("btm_privacy").classList.remove("a_active");
            /* Pages */
            document.getElementById("home").style.display = "none";
            document.getElementById("about").style.display = "none";
            document.getElementById("search").style.display = "block";
            document.getElementById("privacy").style.display = "none"; 
        };

        document.getElementById("btm_privacy").onclick = function () {
            document.getElementById("n_home").classList.remove("a_active");
            document.getElementById("n_about").classList.remove("a_active");
            document.getElementById("n_search").classList.remove("a_active");
            document.getElementById("n_privacy").setAttribute("class", "a_active");
            /* Bottom */
            document.getElementById("btm_home").classList.remove("a_active");
            document.getElementById("btm_about").classList.remove("a_active");
            document.getElementById("btm_search").classList.remove("a_active");
            document.getElementById("btm_privacy").setAttribute("class", "a_active");
            /* Pages */
            document.getElementById("home").style.display = "none";
            document.getElementById("about").style.display = "none";
            document.getElementById("search").style.display = "none";
            document.getElementById("privacy").style.display = "block";
            /* Hide */
            document.getElementById("myprofile").style.display = "none";
            document.getElementById("btnxprofile").style.display = "none";
            document.getElementById("btnprofile").style.display = "block";
        };

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

/* Disclaimer */
var myUrl = ""; // this add your url
var cpr = document.getElementById("myCopyright");
if(!cpr){
    window.location.href = myUrl;
}

function redirectCU(e) {
    if (e.ctrlKey && e.which == 85) {
        window.location.replace(myUrl);
        return false;
    }
}

document.onkeydown = redirectCU;

function redirectKK(e) {
    if (e.which == 3) {
        alert("Thank you for visiting my website :)");
        return false;
    }
}

document.oncontextmenu = redirectKK;

document.addEventListener("keyup", (e) => {
    if (e.key == "PrintScreen") {
        navigator.clipboard.writeText("");
        alert("Screenshots disabled!");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key == "p") {
        alert("This section is not allowed to print or export to PDF");
        e.cancelBubble = true;
        e.preventDefault();
        e.stopImmediatePropagation();
    }
});

const unique = "cusmedroid.github.io";

const d = new Date();
let year = d.getFullYear();
document.getElementById("cpr").innerHTML = year;

if (window.location.hostname == unique) {
  // alert("Sukses");
} else {
  alert("Buy source");
  window.location.href = "https://api.whatsapp.com/send?phone=6285772757932&text=Hello,%20I%20Need%20Source%20Code%20Hot%20News%20Template.";
}