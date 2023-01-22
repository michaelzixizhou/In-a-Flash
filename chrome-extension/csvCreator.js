chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.greeting === "GetURL") {
        var tabURL = "Not set yet";
        chrome.tabs.query({ active: true }, function (tabs) {
            if (tabs.length === 0) {
                sendResponse({});
                return;
            }
            tabURL = tabs[0].url;
            sendResponse({ navURL: tabURL });
        });
    }
}






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
    let csvContent = "data:text/csv;charset=utf-8,";

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

