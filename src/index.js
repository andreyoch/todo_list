import { activateMobileMenu } from './mobile-menu';
import {activateEditProjectModal} from './modals'

activateMobileMenu();
activateEditProjectModal();

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



