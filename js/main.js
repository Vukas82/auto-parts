// When the user scrolls the page, execute myFunction 
window.onscroll = function () {
    stickyHeader()
};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop + 80;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

//-----------------------------------------


// simpleParallax
// var image = document.getElementsByClassName('thumbnail');
// new simpleParallax(image);

// var image = document.getElementsByClassName('thumbnail');
// new simpleParallax(image, {
//     orientation: 'right'
// });



// ===========================================================
$(function () {
    var controller = new ScrollMagic.Controller();

    // var containerScene = new ScrollMagic.Scene({
    //         triggerElement: '#container',
    //         duration: 500
    //     })
    //     .setPin('#block')
    //     .addIndicators()
    //     .addTo(controller)

    var blockTween = new TweenMax.to('#block1', .1, {
        // backgroundColor: 'red',
        display: 'block'
    })
    var containerScene = new ScrollMagic.Scene({
            triggerElement: '#trigger1'
        })
        .setTween(blockTween)
        // .addIndicators()
        .addTo(controller);
});

$(function () {
    var controller2 = new ScrollMagic.Controller();

    var blockTween2 = new TweenMax.to('#block2', .1, {
        // color: 'red',
        display: 'block'
    })

    var containerScene2 = new ScrollMagic.Scene({
            triggerElement: '#trigger2'
        })
        .setTween(blockTween2)
        // .addIndicators()
        .addTo(controller2);
});
// =============================================================
//     .setPin('#block')

// $('#block').waypoint(function (direction) {
//     $('#block').addClass('animated');
// }, {
//     offset: '50%'
// });



// var scene = new ScrollMagic.Scene();

// var scene = new ScrollMagic.Scene({
//         triggerElement: '#spec__offer', // starting scene, when reaching this element
//         duration: 400 // pin the element for a total of 400px
//     })
//     .setPin('#pinned'); // the element we want to pin

// // Add Scene to ScrollMagic Controller
// controller.addScene(scene);

// $(document).ready(function () {
//     console.log('radi')

// $('.spec__offer').waypoint(function (direction) {
//     console.log('radiiii')
//     $('.spec__offer').addClass('is-visible');
// }, {
//     offset: '50%'
// });

// });