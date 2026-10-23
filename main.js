// Live local time for Mbombela, shown in the hero.
const clock = document.getElementById("clock");
const timeFormat = new Intl.DateTimeFormat("en-ZA", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Africa/Johannesburg",
});

function updateClock() {
  if (clock) clock.textContent = timeFormat.format(new Date());
}
updateClock();
setInterval(updateClock, 15000);

// Keep the footer year current.
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();