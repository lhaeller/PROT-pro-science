// used for fullscreen view of navigation, source: https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp
/* Open when someone clicks on the span element */
function openNav() {
document.getElementById("navbarNav").style.width = "100%";

// hide the navigation bar at the bottom
document.getElementById("bottom-navbar").parentElement.style.visibility = "hidden";

}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
document.getElementById("navbarNav").style.width = "0%";

// show the navigation bar at the bottom
document.getElementById("bottom-navbar").parentElement.style.visibility = "visible";

}
