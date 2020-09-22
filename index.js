// // document.getElementById("myHeader").onmousemove = function(event) { myFunction(event) };

// function shadowChange(event) {
//     var x = event.clientX;
//     // var coor = "Coordinates: (" + x + "," + y + ")";
//     console.log(x);

// }

let TextShadow = (function() {

    const eventSpace = document.querySelector('#myHeaderZ');
    const title = eventSpace.querySelector('#mySub');
    const step = 100;

    function shadowUpdate(e) {
        const { offsetWidth: width, offsetHeight: height } = eventSpace;
        let { offsetX: x, offsetY: y } = e;

        if (this !== e.target) {
            x += e.target.offsetLeft;
            y += e.target.offsetTop;
        }

        const xStep = Math.round((x / width * step) - (step / 2));
        const yStep = Math.round((y / height * step) - (step / 2));

        title.style.textShadow = `${-xStep}px ${-yStep}px 0  rgba(10,10,10, .9)`;
        title.style.transitionTimingFunction = "ease-out";

    }

    function handleMouseLeave(e) {
        title.style.textShadow = "2px 2px 4px #fff";
    }
    return {
        eventSpace: eventSpace,
        shadowUpdate: shadowUpdate,
        handleMouseLeave: handleMouseLeave
    };
})();

TextShadow.eventSpace.addEventListener('mousemove', TextShadow.shadowUpdate);

TextShadow.eventSpace.addEventListener('mouseleave', TextShadow.handleMouseLeave);

// CARDS

var feats = [{
        "title": "Svelte Playground!",
        "image": "img",
        "description": "A svelte playground prototype SPA",
        "url": "https://www.example.com/"
    },
    {
        "title": "Svelte Example App",
        "image": "img-2",
        "description": "Another page made using Svelte",
        "url": "https://www.example.com/"
    },
    {
        "title": "Tym's Sassy Portfolio",
        "image": "img-3",
        "description": "Another page designed using Sass",
        "url": "https://www.example.com/"
    }
];


// Content and Side-nav

$(".side-nav li:nth-of-type(2)").click(function() {

    $(".side-nav li:nth-of-type(2)").toggleClass("active");
    $('#a-element').attr('class', '');
}, function() {
    $('#a-element').attr('class', 'active');
    $(".side-nav li:first-of-type").removeClass("active");
    $(".side-nav li:nth-of-type(3)").removeClass("active");
    $(".side-nav li:nth-of-type(2)").toggleClass("active");

});

$(".side-nav li:first-of-type").click(function() {

    $(".side-nav li:first-of-type").toggleClass("active");
    $('#a-element').attr('class', '');
}, function() {
    $('#a-element').attr('class', 'active');
    $(".side-nav li:nth-of-type(2)").removeClass("active");
    $(".side-nav li:nth-of-type(3)").removeClass("active");
    $(".side-nav li:first-of-type").toggleClass("active");

});

$(".side-nav li:nth-of-type(3)").click(function() {

    $(".side-nav li:nth-of-type(3)").toggleClass("active");
    $('#a-element').attr('class', '');
}, function() {
    $('#a-element').attr('class', 'active');
    $(".side-nav li:first-of-type").removeClass("active");
    $(".side-nav li:nth-of-type(2)").removeClass("active");
    $(".side-nav li:nth-of-type(3)").toggleClass("active");

});



function activateTab(tab) {
    $('.side-nav a[href="#' + tab + '"]').tab('show');
}

activateTab('a');

function openPopUpBox() {
    fullName = formName1.value + " " + formName2.value;
    alert("Thank you for submitting your enquiry\nWe will get back to you shortly " + fullName);
}