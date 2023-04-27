const toogler = document.querySelector(".header-nav-toggle-btn");
const navmenu = document.querySelector(".header-nav");
const sidebar = document.querySelector(".header-back-drop");
const closebtn = document.querySelector(".close-btn");
const scrolltop = document.querySelector(".scroll-btn");
const scroll = document.querySelector(".scroll-top-btn")

toogler.addEventListener('click', function (e) {
    navmenu.classList.toggle('header-nav-open');
    sidebar.classList.add("header-back-drop-show");
    e.stopPropagation();
});

closebtn.addEventListener('click', function (e) {
    navmenu.classList.remove('header-nav-open');
    sidebar.classList.remove("header-back-drop-show");
    e.stopPropagation();
});

document.addEventListener("click", function (e) {
    navmenu.classList.remove("header-nav-open");
    sidebar.classList.remove("header-back-drop-show");
    e.stopPropagation();
})

window.addEventListener('scroll', (e) => {
    const nav = document.querySelector('.header-main');
    if (window.pageYOffset > 0) {
        nav.classList.add("has-sticky");
    } else {
        nav.classList.remove("has-sticky");
    }

    if (window.pageYOffset > 400) {
        scrolltop.style.opacity = "1";
    }
    else {
        scrolltop.style.opacity = "0";
    }
});

scrolltop.addEventListener("click", function () {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

$(document).ready(function () {
    $('.slider-box').slick({
        vertical: true,
        verticalSwiping: true,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
    });
    $('.slider-row').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 548,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ],
    });
    $('.partner-items-row').slick({
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true,
        infinite: true,
        responsive: [
            {
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                }
            },
            {
                breakpoint: 568,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                }
            },
        ],
    });

    // cursor animation
    var cursor = $(".cursor")
        , follower = $(".cursor-follower");
    var posX = 0
        , posY = 0;
    var mouseX = 0
        , mouseY = 0;
    let cursorAnimation = TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function () {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;
            TweenMax.set(follower, {
                css: {
                    left: posX - 12,
                    top: posY - 12,
                },
            });
            TweenMax.set(cursor, {
                css: {
                    left: mouseX,
                    top: mouseY,
                },
            })
        },
    });
    $(document).on("mousemove", function (e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
});
Fancybox.bind("[data-fancybox]");



