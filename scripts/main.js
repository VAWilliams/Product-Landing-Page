
/* -----------------
    Burger Menu
 ----------------- */
 
 var toggleDisplay = function(element) {
    element.style.display = (element.style.display == "block")
        ? "none"
        : "block"
    ;
};
var burger = document.getElementById("nav-burger"),
    list   = document.getElementById("nav-list"),
    items  = Array.from(list.children)
;

burger.onclick = function() {
    toggleDisplay(list);
    items.forEach(toggleDisplay);
}