
function motionPointerInit(arr) {
    // HTML cursor classes
    const baseCursorClass = 'motionPointer';
    const hoverCursorClass = 'motionPointer--hover';

    // create cursor element
    let newCursor = document.createElement('div');
    newCursor.classList.add(baseCursorClass);
    document.querySelector('body').appendChild(newCursor);
    const cursorElement = document.querySelector('.motionPointer');

    // get DOM hover elements
    let domItems = [];
    arr.forEach( arrEl => {
        let domItem= document.querySelectorAll(arrEl);
        domItems.push(domItem);
        return domItems;
    });

    // add mouse events to hover elements
    domItems.forEach( nodeItems => {
        nodeItems.forEach(nodeItem => {
            nodeItem.addEventListener('mouseenter', function () {
                cursorElement.classList.add(hoverCursorClass);
            });
            nodeItem.addEventListener('mouseleave', function () {
                cursorElement.classList.remove(hoverCursorClass);
            });
        });
    });

    // change mouse position function
    function handler(e) {
        let pageX = e.pageX;
        let pageY = e.pageY;
        cursorElement.style.transform = `translate(${pageX}px, ${pageY}px)`;
    }
    document.addEventListener('mousemove', handler);
}
