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

function hubFunction() {
    var newURL = "http://localhost:8080";
    chrome.tabs.create({ url: newURL });
    var JSON = csvToJSON(csvString);

    //json POST code
    xhr = new XMLHttpRequest();
    xhr.open("POST", newURL, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var json = JSON.parse(xhr.responseText);
        }
    }
    xhr.send(JSON);
}

function csvToJSON(csv) {
    //files (csvString) saved as: hello,bonjour$goodbye,au revoir$cow,vauche 
    //actually converts that to JSON
    var lines = csv.split("$");

    var result = "[";

    //when i = 0 the value may be undefined (not sure)
    for (var i = 1; i < lines.length; i++) {
        var words = lines[i].split(",");
        result += "\r\n" + "  " + "{";
        result += "\r\n" + "    " + "\"front\": \"" + words[0] + "\",";
        result += "\r\n" + "    " + "\"back\": \"" + words[1] + "\"";
        result += "\r\n" + "  " + "},";
    }
    return result += ("\r\n" + "]");
}













