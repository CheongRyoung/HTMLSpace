const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const date = new Date();
  const targetDay = new Date(2022, 11, 25);
  const RemainTime = targetDay.getTime() - date.getTime();

  const days = Math.floor(RemainTime / 1000 / 60 / 60 / 24);
  const hours = Math.floor(RemainTime / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(RemainTime / 1000 / 60) % 60;
  const seconds = Math.floor(RemainTime / 1000) % 60;

  const strdays = String(days).padStart(3, "0");
  const strhours = String(hours).padStart(2, "0");
  const strminutes = String(minutes).padStart(2, "0");
  const strseconds = String(seconds).padStart(2, "0");

  clockTitle.innerText = `${strdays}d ${strhours}h ${strminutes}m ${strseconds}s`;
}
getClock();
setInterval(getClock, 1000);