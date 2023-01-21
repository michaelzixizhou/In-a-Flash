console.log("This is a popup!");
window.onload = (event) => {
    var el = document.getElementById("termbtn");
    if (el.addEventListener)
      el.addEventListener("click", doFunction, false);
    else if (el.attachEvent)
      el.attachEvent('onclick', doFunction);
  }
function doFunction() {
    console.log("joe mama");
    var x = document.querySelector("#term").value;
    console.log(x)
}