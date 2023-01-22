console.log("This is a popup!");

if (typeof browser === "undefined") {
    var browser = chrome;
}
let page = browser.extension.getBackgroundPage();
page.getList();



window.onload = (event) => {
    var el = document.getElementById("termbtn");
    if (el.addEventListener)
      el.addEventListener("click", doFunction, false);
    else if (el.attachEvent)
        el.attachEvent('onclick', doFunction);

    var el = document.getElementById("downbtn");
    if (el.addEventListener)
        el.addEventListener("click", downloadFunction, false);
    else if (el.attachEvent)
        el.attachEvent('onclick', downloadFunction);

    var el = document.getElementById("viewbtn");
    if (el.addEventListener)
        el.addEventListener("click", viewFunction, false);
    else if (el.attachEvent)
        el.attachEvent('onclick', viewFunction);

    var el = document.getElementById("hubbtn");
    if (el.addEventListener)
        el.addEventListener("click", openFunction, false);
    else if (el.attachEvent)
        el.attachEvent('onclick', openFunction);

    var el = document.getElementById("clearbtn");
    if (el.addEventListener)
        el.addEventListener("click", clearFunction, false);
    else if (el.attachEvent)
        el.attachEvent('onclick', clearFunction);
  }
function doFunction() {
    console.log("joe mama");
    var x = document.querySelector("#term").value;
    var y = document.querySelector("#desc").value;
    console.log(x);
    console.log(y);
    addToVocab(x, y);
}

function viewFunction() {
    page.getList();
    const vocab = page.csvString.split("$");
    let display = "Your Deck has the following " + (vocab.length - 1) + " cards:" + "\r\n"
    vocab.forEach(function (vocabArray) {
        if (vocabArray != "undefined") {
            const card = vocabArray.split(",");
            display += "Term: " + card[0] + "\r\n" + "Description: " + card[1] + "\r\n";
        }
    });
    alert(display);
}

function clearFunction() {
    page.csvString = "";
    page.saveList();
}

function openFunction() {
    page.hubFunction();
}

function downloadFunction() {
    console.log("download csv");
    getCSV();
}

function addToVocab(front, back) {
    //add to vocab
    page.getList();
    if (page.csvString == "") {
        page.csvString = front + "," + back;
    }
    else {
        page.csvString += "$" + front + "," + back;
    }
    
    page.saveList();
}

function getCSV() {
    let csvContent = "data:text/csv;charset=utf-8,";
    page.getList();
    const vocab = page.csvString.split("$");
    vocab.forEach(function (vocabArray) {
        if (vocabArray != "undefined") {
            csvContent += vocabArray + "\r\n";
        }
    });
    var encodedUri = encodeURI(csvContent);
    downloadURI(encodedUri, "vocabList.csv");
}


function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}

