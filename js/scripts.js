const secondHand = document.getElementById("second-hand");
const minuteHand = document.getElementById("minute-hand");
const hourHand = document.getElementById("hour-hand");

function setRotationInTurns(domNode, turns) {
    const transform = `rotate(${turns}turn)`;
    const style = domNode.style;
    style.webkitTransform = transform;
    style.mozTransform = transform;
    style.msTransform = transform;
    style.oTransform = transform;
    style.transform = transform;
}

function computeClockHandRotationsInTurns() {
    const date = new Date();
    return {
        secondHandTurns: date.getSeconds() / 60,
        minuteHandTurns: date.getMinutes() / 60,
        hourHandTurns: (date.getHours() + date.getMinutes()/60) / 12,
    };
}

function updateClockHandRotations() {
    const {
        secondHandTurns,
        minuteHandTurns,
        hourHandTurns
    } = computeClockHandRotationsInTurns();
    setRotationInTurns(secondHand, secondHandTurns);
    setRotationInTurns(minuteHand, minuteHandTurns);
    setRotationInTurns(hourHand, hourHandTurns);
}

setInterval(() => updateClockHandRotations(), 1000);

/* === Disable transition after initial transition === */
function disableTransition() {
    setTimeout(() => {
        secondHand.style.transitionProperty = "none";
        minuteHand.style.transitionProperty = "none";
        hourHand.style.transitionProperty = "none";
    }, 1500);
}
disableTransition();