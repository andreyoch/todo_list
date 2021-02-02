import { activateMobileMenu } from './mobile-menu';
import { activateModals } from './modals';
import { Storage } from './classes';
import { createProjectElement, addProjectToPage } from './elements-creation';

activateMobileMenu();
activateModals();

renderProjectsElements();

function renderProjectsElements() {
  const projects = Storage.getProjects();
  projects.forEach((project) =>
    addProjectToPage(createProjectElement(project.projectName, project.id))
  );
}

