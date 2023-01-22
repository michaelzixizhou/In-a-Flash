const contextMenuItem = {
  id: "selectTextTerm",
  title: "Select Term Text",
  contexts: ["selection"],
};

const contextMenuItemDescription = {
    id: "selectTextDescription",
    title: "Select Description Text",
    contexts: ["selection"],
};

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create(contextMenuItem);
    chrome.contextMenus.create(contextMenuItemDescription);
});

var selectedText = "";

chrome.contextMenus.onClicked.addListener((selection) => {
    //TODO: Replace with proper function
    selectedText = selection.selectionText;
    if(selection.id == "selectTextTerm") {
        console.log(selectedText);
    }
    else {
        console.log("Description");
        //doFunction();
    }

    chrome.runtime.sendMessage({
        msg: "something_completed",
        data: {
            subject: "Loading",
            content: "Just completed!"
        }
    });

    /*
     content script way change top to function(info, tab){

     var count = 0;
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const msg = "sending part works";
        console.log(msg);
        chrome.tabs.sendMessage(tabs[0].id, { type: "getCount" }, function (count) {
            
        });
    });
     */
    
});



//canvas
let csvContent = "data:text/csv;charset=utf-8,";

function testSave() {
    const vocab = [
        ["hello", "bonjour"],
        ["goodbye", "au revoir"]
    ];

    vocab.forEach(function (vocabArray) {
        let vocab = vocabArray.join(",");
        csvContent += vocab + "\r\n";
    });
}

function saveList() {
    chrome.storage.sync.set({ key: csvContent}).then(() => {
        console.log("Value is set to " + csvContent);
    });
}

function getList() {
    chrome.storage.sync.get(["key"]).then((result) => {
        console.log("Value currently is " + result.key);
    });
}

testSave();
saveList();
getList();













