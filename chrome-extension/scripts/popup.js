console.log("This is a popup!");
var cowDescription = "";
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
    document.getElementById("h1") = y;
    console.log(x);
    console.log(y);
    addToVocab(x, y);
}

function downloadFunction() {
    console.log("download csv");
    getCSV();
}

let csvContent = "data:text/csv;charset=utf-8,";

const vocab = [
    ["hello", "bonjour"],
    ["goodbye", "au revoir"]
];

function addToVocab(front, back) {
    //add to vocab
    const value = [front, back];
    vocab.push(value);
}

addToVocab("cheese", "fromage");

function getCSV() {
    

    vocab.forEach(function (vocabArray) {
        let vocab = vocabArray.join(",");
        csvContent += vocab + "\r\n";
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

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.msg === "something_completed") {
            //  To do something
            console.log(request.data.subject);
            console.log(request.data.content);
        }
    }
);


addToVocab("cheese", cowDescription);