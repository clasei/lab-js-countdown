const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval



// ITERATION 1: Add event listener to the start button

const startBtnNode = document.querySelector("#start-btn");

startBtnNode.addEventListener("click", () => {
  startCountdown();
});



// ITERATION 2: Start Countdown

const timeDisplayNode = document.querySelector("#time")

function startCountdown() {
  console.log("startCountdown called!");

  const disabledStartBtnNode = (document.querySelector("#start-btn").disabled = true);

  

  timer = setInterval(() => {
    remainingTime--;
    console.log(remainingTime);

    timeDisplayNode.innerText = remainingTime

    if (remainingTime > 0) {
      disabledStartBtnNode;
    }

    if (remainingTime <= 0) {
      clearInterval(timer);
      console.log("countdown stops");
      showToast()
    }
  }, 1000);
}



// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  // Your code goes here ...



  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...

}
