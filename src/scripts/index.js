import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/style.css';
import showsList from './Display/cards.js';
import showPopup from './Display/commentPopup.js';

showsList.renderCards();

const closeBtn = document.querySelector('.btn-close');
closeBtn.addEventListener('click', () => {
});
showPopup();