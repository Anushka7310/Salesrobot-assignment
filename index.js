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
    //code for progress bar value 
    var ppc = document.querySelector(".progress-pie-chart"),
        percent = parseInt(ppc.data("percent")),
        deg = (360 * percent) / 100;
      if (percent > 50) {
        ppc.classList.add("gt-50");
      }
      document.querySelector(".ppc-progress-fill").css("transform", "rotate(" + deg + "deg)");
      document.querySelector(".ppc-percents span").html(percent + "%");
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
