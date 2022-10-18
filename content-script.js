function sendConnectionRequest() {
  // selecting all buttons from the current page with id starting with "ember"
  let allButtons = document.querySelectorAll('*[id^="ember"]');

  //empty array to store current buttons
  let connectButtons = [];

  //filtering buttons namely "Connect from all buttons"
  allButtons.forEach((button) => {
    if (button.innerText === "Connect") {
      //storing this value in the connectButtons array
      connectButtons.push(button);
    }
  });

  let time = 0;
  connectButtons.forEach((button) => {
    time = time + 5000;

    //calculating random values from 1-5
    let random = Math.floor(Math.random() * (5 - 1 + 1)) + 1;

    //calcultes the time for next run
    time = time + random * 1000;

    //clicking of next button after predefined time gap
    setTimeout(() => {
      button.click();
      //clicking of send button after sending connect request if exists
      setTimeout(() => {
        let newAllButtons = document.querySelectorAll('*[id^="ember"]');
        let sendButton = [];
        newAllButtons.forEach((button) => {
          if (button.innerText === "Send") {
            sendButton.push(button);
          }
        });
        sendButton.forEach((btn) => btn.click());
      }, 500);
    }, time);
  });
}

sendConnectionRequest();
