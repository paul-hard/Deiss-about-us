// Before/after
const afterImg = document.querySelector(".quality__tool-img");
const beforeImg = document.querySelector(".quality__tool-slide");

afterImg.addEventListener('mousemove', (event) => {
    let x = event.offsetX
    beforeImg.classList.remove('tr')
    beforeImg.style.width = x + "px"
});

afterImg.addEventListener('mouseleave', (event) => {
    beforeImg.style.width = 50 + "%"
    beforeImg.classList.add('tr')
});


const tools = document.querySelector('.innovative__body-image');
window.onscroll = function () { myFunction() };

function myFunction() {
    if (tools.scrollTop > 50 || tools.scrollTop > 50) {
        document.getElementByClassName("spoony").className = "_anim-items";
    }
}

// Swiper
const swiper = new Swiper('.swiper', {
    speed: 400,
    slidesPerView: 3,
    breakpoints: {
        320: {
            slidesPerView: 1,

        },
        480: {
            slidesPerView: 1.5,

        },
        600: {
            slidesPerView: 1.9,

        },
        801: {
            slidesPerView: 2.4,

        },
        998: {
            slidesPerView: 3,

        },
        1281: {
            slidesPerView: 3.5,

        },

    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    loop: true,
    spaceBetween: 2,
    grabCursor: true,
});
const videoSwiper = new Swiper('.video-swiper', {
    speed: 400,
    slidesPerView: 3,
    spaceBetween: -25,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        480: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        1023: {
            slidesPerView: 3,

        },
        1600: {
            slidesPerView: 4,

        },

    },
    navigation: {
        nextEl: '.video-button-next',
        prevEl: '.video-button-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    loop: true,
    grabCursor: true,
});

// popoup
const popupLinks = document.querySelectorAll(".popup-link");
console.log(popupLinks);

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace("#", "");
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            console.log(curentPopup);
            e.preventDefault();
        });
    }
}

const popupCloseIcon = document.querySelectorAll(".close-popup");
console.log(popupCloseIcon);
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener("click", function (e) {
            popupClose(el.closest(".popup"));
            e.preventDefault();
        });
    }
}


function popupOpen(curentPopup) {
    if (curentPopup) {
        const popupActive = document.querySelector("popup.open");
        if (popupActive) {
            popupClose(popupActive, false);
        } else {

        }
        curentPopup.classList.add("open");
        curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest(".popup__content")) {
                popupClose(e.target.closest(".popup"));
            }
        });
    }
}

function popupClose(popupActive) {
    popupActive.classList.remove("open");
}


// grater parallax-effect
let bg = document.querySelector('.mouse-parallax-grater');
window.addEventListener('mousemove', function (e) {
    let x = e.clientX / window.innerWidth;
    bg.style.transform = 'translate(-' + x * 100 + 'px';
});
