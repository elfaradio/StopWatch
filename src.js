let second = 0;
let sesh = null;
const time = document.getElementById("time");

document.querySelector("#st").addEventListener("click", () => {
  if (sesh !== null) return;

  sesh = setInterval(() => {
    second++;
    let minute = Math.floor(second / 60);
    let seconds = second % 60;
    minute = String(minute).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    time.textContent = `${minute}:${seconds}`;
  }, 1000);
});

document.querySelector("#sp").addEventListener("click", () => {
  clearInterval(sesh);
  sesh = null;
});

document.querySelector("#rs").addEventListener("click", () => {
  clearInterval(sesh);
  sesh = null;
  second = 0;
  time.textContent = "00:00";
});
