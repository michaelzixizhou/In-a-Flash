const contextMenuItem = {
  id: "selectText",
  title: "Select Highlighted Text",
  contexts: ["selection"],
};

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create(contextMenuItem);
});

chrome.contextMenus.onClicked.addListener((selection) => {
  //TODO: Replace with proper function
  console.log(selection.selectionText);
});
