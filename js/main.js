// let right = document.getElementsByClassName('.inner__h__right');
// // right.style.cssText = "color: blue !important; border: 1px solid black";
// right.setAttribute("style", "color:red; border: 1px solid blue;");

// console.log(right.style)
// const a = document.querySelector('.inner__h__left');
// const a = document.getElementById('inner__h__left');
// a.setAttribute("style", "color:red; border: 1px solid blue;");
// console.log(a.style)

// let left = document.getElementById(b);
// let middle = document.getElementById(c);
// console.log(a)

// function move(a) {
//     console.log(a.style.display);
//     if (a.style.display === 'none') {
//         a.style.display === '';

//     } else {
//         a.style.display = 'block';
//         a.classList.add('inner__h__left');
//     }

//     setTimeout(function () {
//         a.style.cssText = "animation-play-state: paused";
//     }, 1740);
// }

// move(a)
// function toggle2(id, id2, x) {

//     let n = document.getElementById(id);
//     let ico = document.getElementById(x);
//     // let ico = document.getElementById(x)
//     if (n.style.display != 'none') {
//         n.style.display = 'none';
//         document.getElementById(id2).setAttribute('aria-expanded', 'true');
//         ico.classList.remove('uspravno');
//         ico.classList.add('vodoravno');
//     } else {
//         n.style.display = '';
//         document.getElementById(id2).setAttribute('aria-expanded', 'false');
//         ico.classList.remove('vodoravno');
//         ico.classList.add('uspravno');
//     }

// }


// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
    myFunction()
};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop + 80;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

// simpleParallax
// var image = document.getElementsByClassName('thumbnail');
// new simpleParallax(image);

// var image = document.getElementsByClassName('thumbnail');
// new simpleParallax(image, {
//     orientation: 'right'
// });

// show on scroll
var scroll = window.requestAnimationFrame ||
    function (callback) {
        window.setTimeout(callback, 1000 / 60)
    };

var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop);
}

loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 &&
            rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}


const callback = function (entries) {
    entries.forEach(entry => {
        entry.target.classList.toggle("is-visible");
    });
};

const observer = new IntersectionObserver(callback);

const targets = document.querySelectorAll(".show-on-scroll");
targets.forEach(function (target) {
    observer.observe(target);
});