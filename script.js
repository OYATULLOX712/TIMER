const secundamer = document.querySelector('.secundamer'),
      startBtn = document.querySelector('.start'),
      stopBtn = document.querySelector('.stopp'),
      restartBtn = document.querySelector('.restart');

let seconds = 0;
let interval = null;

startBtn.addEventListener("click", () => {
  if (interval) {
    return;
  }
  interval = setInterval(timer, 1000);
});
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});
restartBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  secundamer.innerText = "00:00:00";
});

function timer() {
  seconds++;
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds - hrs * 3600) / 60);
  let secs = seconds % 60;
  if (secs < 10) secs = "0" + secs;
  if (mins < 10) mins = "0" + mins;
  if (hrs < 10) hrs = "0" + hrs;
  secundamer.innerText = `${hrs}:${mins}:${secs}`;
}
