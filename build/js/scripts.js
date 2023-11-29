// Custom Scripts

// SCROLLREVEAL ANIMATION


const scrollReveal = new ScrollReveal({
    distance: '200px',
    delay: 200, 
    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)', 
});

scrollReveal.reveal('nav, .menu__item, .menu__soc-link, .menu__btn, .footer__item, .service__item, .product__title', {
    origin: 'top',
    interval: 100,
});

scrollReveal.reveal('.container-max, footer, .about__item, .videos__item, .item-3, .russia__wrapper, .catalog__item-link', {
    origin: 'bottom', 
    interval: 300,
});

scrollReveal.reveal('.hero__item, .slider__top-num, .section-title, .hero-2__item, .item-1, .why__wrapper .item-2, .center__item, .section-title-big, .hero__list-item, .center__list-item, .center__pretext, .product__slider', {
    origin: 'left', 
    delay: 1,
    interval: 300,
});

scrollReveal.reveal('.hero__img, .slider__top-btns, .hero-3__img, .hero-2__img, .item-4, .item-5, .center__map, .select, .product__content, .beard__item, .beard__icon, .beard__back, .beard__item, .beard__icon, .beard__back, .beard__wrapper', {
    origin: 'right',
    interval: 300,
});




// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
        if (!menu.classList.contains('active')) {
            menu.classList.add('active')
            burger.classList.add('active-burger')
            body.classList.add('locked')
        } else {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
    menu.addEventListener("click", (event) => {
        if (event.target) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            menu.classList.remove('active')
            burger.classList.remove('active-burger')
            body.classList.remove('locked')
        }
    })
}
burgerMenu()


// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
    const nav = document.querySelector('nav')

    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
        nav.classList.add('fixed__nav')
    } else {
        nav.classList.remove('fixed__nav')
    }
}
window.addEventListener('scroll', fixedNav)
















// SWIPER

function initializeSwiper(className, id) {
    const sliders = document.querySelectorAll(className);

    sliders.forEach(slider => {
        new Swiper(slider, {
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: `.swiper-button-next-${id}`,
                prevEl: `.swiper-button-prev-${id}`,
            },
            centeredSlides: true,
            grabCursor: true,
            slidesPerView: 1.3,
            spaceBetween: 30,
            loop: true,
            breakpoints: {
                1450: {
                    slidesPerView: 3.5,
                    spaceBetween: 70,
                },
                992: {
                    slidesPerView: 3,
                },
                768: {
                    slidesPerView: 2.7,
                },
                480: {
                    slidesPerView: 1.7,
                },
            },
        });
    });
}

initializeSwiper('.slider__swiper-1', 1);
initializeSwiper('.slider__swiper-2', 2);
initializeSwiper('.slider__swiper-3', 3);
initializeSwiper('.slider__swiper-4', 4);
initializeSwiper('.slider__swiper-5', 5);

const swiperSlider = new Swiper('.slider__swiper', {

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // initialSlide: 3,
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: 1.3,
    spaceBetween: 30,
    loop: true,

    breakpoints: {
        1450: {
            slidesPerView: 3.5,
            spaceBetween: 70,
        },
        992: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2.7,
        },
        480: {
            slidesPerView: 1.7,
        }
    }
});




// PRODUCT SWIPER

const swiper1 = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 1,
    // freeMode: true,
    watchSlidesProgress: true,

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 3,
            spaceBetween: 20
        },

        720: {
            slidesPerView: 3,
            spaceBetween: 20
        },
    }
});

const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
    },
    thumbs: {
        swiper: swiper1,
    },

    breakpoints: {

    }

});






const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const menu = dropdown.querySelector('.dropdown__menu');
    let timeout;

    dropdown.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        menu.classList.add('dropdown-active');
    });

    dropdown.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => {
            menu.classList.remove('dropdown-active');
        }, 300);
    });
});






