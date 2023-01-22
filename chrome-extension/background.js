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


//canvas hello,bonjour$goodbye,au revoir$cow,vauche
let csvString = "";

function saveList() {
    chrome.storage.sync.set({ 'value': csvString }, function () {
        console.log("Value is set to " + csvString);
    });
}

function getList() {
    chrome.storage.sync.get("value", function (data) {
        console.log("data", data);
        csvString = data.value;
    });
}

saveList();
getList();

 














