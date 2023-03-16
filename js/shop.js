
/* LIST AND GRID VIEW  */
var elements = document.getElementsByClassName("column");

var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "49%";
    elements[i].style.marginRight = "4px";
    /* $(".h2").attr("style","font-size: 30px"); */
    $("h2").attr("style","padding-left: 65px");
    $("p").attr("style","padding-left: 65px")

  }
}
/* LIST AND GRID VIEW END */

function gototab(reload)
{
    window.location.hash = '#myList';
    window.location.reload(true);
}






































