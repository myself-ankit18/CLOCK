let tick = new Audio("tick.m4a");

setInterval(() => {
    date= new Date();
    hourHand = date.getHours();
    minuteHand = date.getMinutes();
    secondHand = date.getSeconds();
    hr = 30*hourHand + minuteHand/2 +secondHand/120;
    mr = 6*minuteHand + secondHand/10;
    sr = 6*secondHand;
    tick.play();

    hours.style.transform = `rotate(${hr}deg)`;
    mins.style.transform = `rotate(${mr}deg)`;
    seconds.style.transform = `rotate(${sr}deg)`;

}, 1000);