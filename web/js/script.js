var siteWidth = 1280;
var scale = screen.width /siteWidth;

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

// get the model
var model = document.getElementById("myModal");

// get the button that open the model 
var btn = document.getElementById("myButton");

// get the span element that close the model
var close = document.getElementsByClassName("close")[0];

// click on register button
btn.onclick = function(){
    model.classList.add("open");
}
// click on the close button
close.onclick = function(){
    model.classList.remove("open");
}

// when user click anywhere outside the window it closes
window.onclick = function(event){
    if(event.target == model){
        model.classList.remove("open");
    }
}

$(document).ready(function () {
    $(".owl-carousel1").owlCarousel({
        loop: true,
        dots: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: false,
                pullDrag: false,
                touchDrag: false,
                mouseDrag: false,
            },
            600: {
                items: 2,
                nav: true,
                loop: true,
                pullDrag: true,
                touchDrag: true,
                mouseDrag: true,
            },
            800: {
                items: 3,
                nav: true,
                loop: true,
                pullDrag: true,
                touchDrag: true,
                mouseDrag: true,
            },
            1000: {
                items: 4,
                nav: true,
                loop: true,
                pullDrag: true,
                touchDrag: true,
                mouseDrag: true,
            },
        },
    });
    $(".owl-carousel3").owlCarousel({
        loop: true,
        dots: false,
        responsiveClass: true,
        nav: true,
        pullDrag: true,
        touchDrag: true,
        mouseDrag: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                loop: false,
                pullDrag: false,
                touchDrag: false,
                mouseDrag: false,
            },
            600: {
                items: 2,
                nav: true,
                pullDrag: true,
                touchDrag: true,
                mouseDrag: true,
            },
            1100: {
                items: 3,
                nav: true,
                pullDrag: true,
                touchDrag: true,
                mouseDrag: true,
            },
        },
    });
    $(".owl-carousel2").owlCarousel({
        loop: true,
        dots: false,
        nav: false,
        autoplay: true,
        autoplayTimeout: 1500,
        responsiveClass: true,
        responsive: {
            0: {
                items: 3,
            },
            600: {
                items: 4,
            },
            800: {
                items: 6,
            },
            1000: {
                items: 7,
            },
        },
    });
});






const schedule ={
    buttons: document.querySelectorAll(".schedule-nav a"),
    days:document.querySelectorAll(".schedule-day")
};

function hideDays() {
    schedule.days.forEach((elm) => {
        elm.classList.remove("active");
    });
    schedule.buttons.forEach((elm) => {
        elm.classList.remove("active");
    });
}
schedule.buttons.forEach(function(elm, i){
   elm.onclick = function () {
       hideDays();
       elm.classList.add("active")
       schedule.days[i].classList.add("active");
   };
});


function scrollHandler(e){
    if(window.pageYOffset>300) navbar.nav.classList.add(fixed);
    else navbar.nav.classList.remove(fixed);
    console.dir(
        schedule.schedule.offsetTop - schedule.schedule.offsetHeight < window.pageYOffset
    );
}

document.onscroll = scrollHandler;
scrollHandler();

