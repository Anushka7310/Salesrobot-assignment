document.getElementById('connectionButton').addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id, allFrames: true},
            files: ['content-script.js']
        })
    })
})