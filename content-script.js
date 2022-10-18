async function sendConnectionRequest() {
  // alert("test")
  let allButtons = document.querySelectorAll('*[id^="ember"]');

  let connectButtons = [];

  allButtons.forEach((button) => {
    if (button.innerText === "Connect") {
      connectButtons.push(button);
    }
  });
  connectButtons.forEach(async (button, index) => {
    setTimeout(() => {
      button.click();
      console.log("Test");
      setTimeout(() => {
        let newAllButtons = document.querySelectorAll('*[id^="ember"]');
        let sendButton = [];
        newAllButtons.forEach((button) => {
          if (button.innerText === "Send") {
            console.log("send buttons");
            sendButton.push(button);
          }
        });
        sendButton.forEach((btn) => btn.click());
      }, 500+index*100);
    }, 1500+(index*1500));
  });
}

function sleep2(ms) {
  new Promise((res) => setTimeout(res, ms));
}

sendConnectionRequest();
