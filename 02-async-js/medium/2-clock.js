// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)





function printCurrentTime() {
  let currentDate = new Date();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();
  let seconds = currentDate.getSeconds();

  let period = "AM";
  if (hours >= 12) {
    period = "PM";
  }

  if (hours > 12) {
    hours = hours - 12;
  }

  const answer = hours + ":" + minutes + ":" + seconds + " " + period;
  console.log(answer);
}

function printTime() {
  console.clear();
  printCurrentTime();
}

setInterval(printTime, 1000);
