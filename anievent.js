(function() {
    const ballElem = document.querySelector('.ball');

    // window.addEventListener('click', (e) => {
    //     ballElem.style.transform = 'translate(' + (e.clientX-15) + 'px, ' + (e.clientY-15) + 'px)';
    // })

    // ballElem.addEventListener('transitionend', (e) => {
    //     ballElem.classList.add('end');
    //     console.log(e.elapsedTime);
    //     console.log(e.propertyName);
    // });
    // transitionend
    // transitionstart

    ballElem.addEventListener('click', () => {
        ballElem.style.animation = 'ball-ani 1s 3 forwards';
    });

    ballElem.addEventListener('animationend', () => {
        ballElem.classList.add('end');
    });

    ballElem.addEventListener('animationiteration', () => {
        console.log('반복!');
    })

    // animationstart
    // animationend
    // animationiteration
})();