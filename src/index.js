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

const expandIcon = document.querySelector('.expand-icon');

function renderProjectsElements() {
  const projects = Storage.getProjects();
  projects.forEach((project) =>
    addProjectToPage(createProjectElement(project.projectName, project.id))
  );
}

expandIcon.addEventListener('click', (e) => {
  expandIcon.classList.toggle('expand-icon-expanded');
  const task = e.target.parentElement.parentElement.parentElement;
  task.classList.toggle('expanded-task');
  const expandedContent = document.querySelector(
    '.task-expanded_content-normal'
  );
  expandedContent.classList.toggle('task-expanded_content-expanded');
  expandIcon.addEventListener(
    'click',
    () => {
      expandIcon.classList.toggle('expand-icon-normal');
    },
    { once: true }
  );
});
