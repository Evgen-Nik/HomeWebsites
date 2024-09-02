require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import slider from './modules/slider';
import tabs from './modules/tabs';
import customSelect from './modules/customSelect';
import form from './modules/form';

window.addEventListener('DOMContentLoaded', () => {

    const pageType = document.body.getAttribute('data-page');

    if (pageType == 'home') {
        slider({
            slide: '.slider__item',
            prevArrow: '.slider__prev',
            nextArrow: '.slider__next',
            wrapper: '.slider__window',
            field: '.slider__inner',
            indicators: '.slider__indicators'
        });
    
        tabs();
    }
    if (pageType == 'create') {
        customSelect();
        form('#form');
    }
});