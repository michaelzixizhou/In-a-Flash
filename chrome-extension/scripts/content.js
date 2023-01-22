chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        switch (message.type) {
            case "getCount":
                sendResponse(count);
                break;
            default:
                console.error("Unrecognised message: ", message);
        }
    }
);