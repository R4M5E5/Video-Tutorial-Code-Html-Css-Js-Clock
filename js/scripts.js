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

setRotationInTurns(secondHand, 0.25);
setRotationInTurns(minuteHand, 0.5);
setRotationInTurns(hourHand, 0.75);