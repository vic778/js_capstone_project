import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/style.css';
// eslint-disable-next-line import/no-cycle
import showsList from './Display/cards.js';
import { showPopup, hidePopup } from './Display/commentPopup.js';
import { getComments, commentsCounter, addComment } from './API/commentsAPI.js';

showsList.renderCards();

const inputForm = document.querySelector('.form');
inputForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const getName = document.querySelector('#exampleFormControlInput1').value;
  const getComment = document.querySelector('#exampleFormControlTextarea1').value;
  const getId = inputForm.dataset.id;
  addComment(getId, getName, getComment);
  inputForm.reset();
});

const displayComment = document.querySelector('.display-comment');
const commentElement = (getDate, getName, getComment) => {
  const commentContainer = document.createElement('div');
  const commentData = document.createElement('p');

  commentData.innerHTML = `${getDate}: ${getName}: ${getComment} `;

  commentContainer.appendChild(commentData);
  displayComment.appendChild(commentContainer);
};

const displayCommentCount = async (itemId) => {
  const noOfComments = await commentsCounter(itemId);
  const commentsSect = document.querySelector('.commentSection');
  commentsSect.innerHTML = `${noOfComments}`;
};

const displayAllComments = async (itemId) => {
  const allComments = await getComments(itemId);
  if (allComments.length > 0) {
    allComments.forEach((comment) => {
      commentElement(comment.creation_date, comment.username, comment.comment);
    });
  }
  displayCommentCount(itemId);
};

const viewCommentsBtn = document.querySelector('.display-comment-btn');
viewCommentsBtn.addEventListener('click', () => {
  displayComment.innerHTML = '';
  const itemId = viewCommentsBtn.dataset.id;
  displayAllComments(itemId);
});

const closeBtn = document.querySelector('.btn-close');
closeBtn.addEventListener('click', () => {
  displayComment.innerHTML = '';
});

showPopup();
hidePopup();
export { commentsCounter, displayCommentCount };