import { activateMobileMenu } from './mobile-menu';
import { activateModals } from './modals';

activateMobileMenu();
activateModals();

const projects = document.querySelectorAll('.project');
const projectBtns = document.querySelector('.project_btns');

projects.forEach((project) =>
  project.addEventListener('mouseenter', (e) => {
    const projectBtns = project.querySelector('.project_btns');
    project.style = 'height: 140px';
    projectBtns.style = 'display: block';
  })
);

projects.forEach((project) =>
  project.addEventListener('mouseleave', (e) => {
    const projectBtns = project.querySelector('.project_btns');
    project.style = 'height: 98px';
    projectBtns.style = 'display: none';
  })
);
