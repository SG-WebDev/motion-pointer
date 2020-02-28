const cursorElement = document.querySelector('.motionPointer');
console.log(cursorElement)
// event handler function
function handler(e) {
    let pageX = e.pageX;
    let pageY = e.pageY;
    cursorElement.style.transform = `translate(${pageX}px, ${pageY}px)`;
    // IE 8
    if (pageX === undefined) {
        pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    console.log(pageX, pageY);
}
document.addEventListener('mousemove', handler);