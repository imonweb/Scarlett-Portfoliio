import '../src/css/styles.scss';

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab) 

dom.i2svg()

// library.add(faCheck);
dom.watch();

const hamburgerContainer = document.querySelector('#header__main-nav');
const hamburger = document.querySelector('.header__main-nav--hamburger');
const links = document.querySelectorAll('.header__main-nav--links li');

hamburger.addEventListener('click', () => {
  hamburgerContainer.classList.toggle('clicked');
  links.forEach((link) => {
    link.classList.toggle('fade');
  });
});