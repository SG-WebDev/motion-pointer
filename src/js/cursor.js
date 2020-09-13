
function motionPointerInit(arr) {
    // HTML cursor classes
    const baseCursorClass = 'motionPointer';
    const hoverCursorClass = 'motionPointer--hover';

    // create cursor element
    let newCursor = document.createElement('div');
    newCursor.classList.add(baseCursorClass);
    document.querySelector('body').appendChild(newCursor);
    const cursorElement = document.querySelector('.motionPointer');

    if(arr) {
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
                    cursorElement.animate({
                            transform: ['scale(1)', 'scale(2)']},
                        {
                            duration: 200,
                            fill: "forwards",
                            //composite: "add" //browser doesn't support :/
                        });
                });
                nodeItem.addEventListener('mouseleave', function () {
                    cursorElement.classList.remove(hoverCursorClass);
                    cursorElement.animate({
                            transform: ['scale(2)', 'scale(1)']},
                        {
                            duration: 200,
                            fill: "forwards",
                            //composite: "add" //browser doesn't support :/
                        });
                });
            });
        });
    }

    // change mouse position function
    function handler(e) {
        let pageX = e.pageX;
        let pageY = e.pageY;
        let cursorElementWidth = cursorElement.offsetWidth;
        let cursorElementHeight = cursorElement.offsetHeight;
        //cursorElement.style.transform = `translate(${pageX}px, ${pageY}px)`;
        cursorElement.style.left = `${pageX - ((cursorElementWidth - 6) / 2)}px`;
        cursorElement.style.top = `${pageY - ((cursorElementHeight - 6) / 2)}px`;
    }
    document.addEventListener('mousemove', handler);
}
