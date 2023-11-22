// Custom Scripts
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





// TABS

function tabs(headerSelector, tabSelector, contentSelector, activeClass, display = 'flex') {
    const headers = document.querySelectorAll(headerSelector);

    headers.forEach((header) => {
        const tabs = header.querySelectorAll(tabSelector);
        const contents = header.parentElement.querySelectorAll(contentSelector);

        function hideTabContent() {
            contents.forEach((item) => {
                item.style.display = 'none';
            });
            tabs.forEach((item) => {
                item.classList.remove(activeClass);
            });
        }

        function showTabContent(i = 0) {
            contents[i].style.display = display;
            tabs[i].classList.add(activeClass);
        }

        hideTabContent();
        showTabContent();

        header.addEventListener('click', (e) => {
            const target = e.target;

            if (
                target.classList.contains(tabSelector.replace(/\./, '')) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, ''))
            ) {
                tabs.forEach((item, i) => {
                    if (target == item || target.parentNode == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    });
}

// Пример использования:
tabs('.tabs__header', '.tabs__header-item', '.tabs__content-item', 'active');















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
