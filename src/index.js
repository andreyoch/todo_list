import { activateMobileMenu } from './mobile-menu';
import { activateModals } from './modals';
import { Project, Storage } from './classes';
import { createProjectElement, addProjectToPage } from './elements-creation';

activateMobileMenu();
activateModals();

const projects = document.querySelectorAll('.project');

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

renderProjectsElements();

function renderProjectsElements() {
  const projects = Storage.getProjects();
  projects.forEach((project) =>
    addProjectToPage(createProjectElement(project.projectName, project.id))
  );
}
