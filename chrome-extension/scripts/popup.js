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
  }
function doFunction() {
    console.log("joe mama");
    var x = document.querySelector("#term").value;
    var y = document.querySelector("#desc").value;
    console.log(x);
    console.log(y);
    addToVocab(x, y);
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

