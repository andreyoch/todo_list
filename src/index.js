import { activateMobileMenu } from './mobile-menu';

activateMobileMenu();

const project = document.querySelector('.project');
const projectBtns = document.querySelector('.project_btns');
project.addEventListener('mouseenter', () => {
  projectBtns.style = 'display: block';
  project.style = 'height: 140px';
});

project.addEventListener('mouseleave', () => {
  projectBtns.style = 'display: none';
  project.style = 'height: 98px';
});

//Show edit modal if user click on edit modal btn
const editProjectBtn = document.querySelectorAll('.edit-btn');
const editProjectModal = document.querySelector('.edit-modal-window');
const editModalCloseBtn = editProjectModal.querySelector('.close');
editProjectBtn.forEach((btn) =>
  btn.addEventListener(
    'click',
    () => (editProjectModal.style = 'display:block')
  )
);

editModalCloseBtn.addEventListener(
  'click',
  () => (editProjectModal.style = 'display: none')
);

window.addEventListener('click',(e) => {
  if(e.target.className === 'main-page_edit-project-modal-window edit-modal-window') {
    editProjectModal.style = 'display: none';
  }
})

