// Your code goes here

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
        let text=document.getElementById("text");
        text.innerHTML= "This is really cool!";
  });


/* put this in, and see the order of printing in devTools console. The order is revealing of the order of events.
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
  */

