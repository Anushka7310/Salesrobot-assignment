document.getElementById("connectionButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id, allFrames: false },
      files: ["content-script.js"],
    });
  });



  chrome.runtime.onMessage.addListener((message) => {
    if(message.type === "totalConnectButtonMessage"){
      document.getElementById("totalConnectButtons").innerText = "Total: "+message.value
    }

    if(message.type === "connectRequestSentCountMessage"){
      document.getElementById("invitationSent").innerText = "Invitation Sent: "+message.value
    }
  })
});

document.getElementById("stopButton").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id, allFrames: false },
      files: ["stop-script.js"],
    });
  });
});
