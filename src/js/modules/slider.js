function slider ({slide, prevArrow, nextArrow, wrapper, field, indicators}) {
    
    const slides = document.querySelectorAll(slide),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          slidesWrapper = document.querySelector(wrapper),
          slidesField = document.querySelector(field),
          myIndicators = document.querySelector(indicators);

    const width = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 0,
        slidesPerPage = 2,
        offset = 0;

    if (window.matchMedia("(max-width: 992px)").matches) {
        slidesPerPage = 1;
    } else {
        slidesPerPage = 2;
    }

    let startIndex = slideIndex * slidesPerPage;
    let endIndex = Math.min(startIndex + slidesPerPage, slides.length);

    slidesField.style.width = 100 * slides.length / slidesPerPage + '%';

    const dots = [];

    function createDot(i) {
        const dot = document.createElement('li');
        dot.classList.add('slider__dot');
        dot.setAttribute('data-slide-to', i + 1);
        if (i == 0) {
            dot.style.backgroundColor = 'var(--blue_main)';
        }
        myIndicators.append(dot);
        dots.push(dot);
    }

    if (slidesPerPage >= 2) {
        for (let i = 0; i < Math.ceil(slides.length / 2); i++) {
            createDot(i);
        }
    } else {
        for (let i = 0; i < slides.length; i++) {
            createDot(i);
        }
    }

    function deleteNotDigits(str) {
        return +str.replace(/[^\d.]/g, '');
    }

    function nextSlide() {
        if (offset == deleteNotDigits(width) * (Math.ceil(slides.length / slidesPerPage) - 1)){
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }
        slidesField.style.transform = `translateX(-${offset}px)`;

        if(endIndex == slides.length) {
            slideIndex = 0;
            startIndex = slideIndex * slidesPerPage;
            endIndex = slidesPerPage;
        } else {
            slideIndex = Math.min(slideIndex + 1, Math.ceil(slides.length / slidesPerPage) - 1);
            startIndex = slideIndex * slidesPerPage;
            endIndex = Math.min(startIndex + slidesPerPage, slides.length);
        }

        dots.forEach(dot => dot.style.backgroundColor = 'var(--grey_light2)');
        dots[slideIndex].style.backgroundColor = 'var(--blue_main)';
    }

    function prevSlide() {
        if (offset == 0){
            offset = deleteNotDigits(width) * (Math.ceil(slides.length / slidesPerPage) - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if(endIndex == slidesPerPage) {
            slideIndex = Math.ceil(slides.length / slidesPerPage) - 1;
            startIndex = slideIndex * slidesPerPage;
            endIndex = slides.length;
        } else {
            slideIndex = Math.max(slideIndex - 1, 0);
            startIndex = slideIndex * slidesPerPage;
            endIndex = Math.min(startIndex + slidesPerPage, slides.length);
        }
        dots.forEach(dot => dot.style.backgroundColor = 'var(--grey_light2)');
        dots[slideIndex].style.backgroundColor = 'var(--blue_main)';
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo - 1;
            offset = deleteNotDigits(width) * (slideIndex);

            slidesField.style.transform = `translateX(-${offset}px)`;

            dots.forEach(dot => dot.style.backgroundColor = 'var(--grey_light2)');
            dots[slideIndex].style.backgroundColor = 'var(--blue_main)';
        });
    });

    next.addEventListener('click', () => {
        nextSlide();
    });

    prev.addEventListener('click', () => {
        prevSlide();
    });
}



export default slider;