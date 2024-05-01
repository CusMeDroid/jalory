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