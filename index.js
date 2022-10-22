document.getElementById("connectionButton").addEventListener("click", () => {
  document.getElementById("connectionButton").classList.add("hidden");
  document.getElementById("stopButton").classList.remove("hidden");
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id, allFrames: false },
      files: ["content-script.js"],
    });
  });

  chrome.runtime.onMessage.addListener((message) => {
    //code for progress bar value
    var ppc = document.querySelector(".progress-pie-chart");
    percent = message.percent;
    deg = (360 * percent) / 100;
    if (percent > 50) {
      ppc.classList.add("gt-50");
    }
    document.querySelector(".ppc-progress-fill").style.transform =
      "rotate(" + deg + "deg)";
    document.querySelector(".ppc-percents span").innerHTML = message.count;
  });
});

document.getElementById("stopButton").addEventListener("click", () => {
  document.getElementById("connectionButton").classList.remove("hidden");
  document.getElementById("stopButton").classList.add("hidden");
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id, allFrames: false },
      files: ["stop-script.js"],
    });
  });
});
