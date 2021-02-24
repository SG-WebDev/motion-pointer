
function motionPointerInit(arr) {
    // HTML cursor classes
    const baseCursorClass = 'motionPointer';
    const hoverCursorClass = 'motionPointer--hover';

    // create cursor element
    let newCursor = document.createElement('div');
    newCursor.classList.add(baseCursorClass);
    document.querySelector('body').appendChild(newCursor);
    const cursorElement = document.querySelector('.motionPointer');

    // set position style
    let cursorElementWidth = cursorElement.offsetWidth;
    let cursorElementHeight = cursorElement.offsetHeight;
    cursorElement.style.left = `${-((cursorElementWidth - 6) / 2)}px`;
    cursorElement.style.top = `${-((cursorElementHeight - 6) / 2)}px`;

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
                    cursorElement.animate(
                        {
                            width: [`${cursorElementWidth}px`, `${cursorElementWidth * 2}px`],
                            height: [`${cursorElementHeight}px`, `${cursorElementHeight * 2}px`],
                            left: [`${-((cursorElementWidth - 6) / 2)}px`, `${-(((cursorElementWidth * 2) - 6) / 2)}px`],
                            top: [`${-((cursorElementHeight - 6) / 2)}px`, `${-(((cursorElementHeight * 2) - 6) / 2)}px`],
                        },
                        {
                            duration: 200,
                            fill: "forwards"
                        });
                });
                nodeItem.addEventListener('mouseleave', function () {
                    cursorElement.classList.remove(hoverCursorClass);
                    cursorElement.animate(
                        {
                            width: [`${cursorElementWidth * 2}px`, `${cursorElementWidth}px`],
                            height: [`${cursorElementHeight * 2}px`, `${cursorElementHeight}px`],
                            left: [`${-(((cursorElementWidth * 2) - 6) / 2)}px`, `${-((cursorElementWidth - 6) / 2)}px`],
                            top: [`${-(((cursorElementHeight * 2) - 6) / 2)}px`, `${-((cursorElementHeight - 6) / 2)}px`],
                        },
                        {
                            duration: 200,
                            fill: "forwards"
                        });
                });
            });
        });
    }

    // change mouse position function
    function handler(e) {
        let pageX = e.clientX;
        let pageY = e.clientY;
        cursorElement.style.transform = `translate(${pageX}px, ${pageY}px)`;
    }
    document.addEventListener('mousemove', handler);
}
