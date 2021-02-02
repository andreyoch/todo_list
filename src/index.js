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

activateSearchBar();

function activateSearchBar() {
  const searchInput = document.querySelector('.search-input');

  searchInput.addEventListener('keyup', (e) => {
    const mainPage = document.querySelector('.main-page');
    const mainPageDisplayProperty = mainPage.style.display;
    const searchQuery = e.target.value;
    /*If mainPage display style dont equals 'none',we are on main page and search only project 
    otherwise,we are on project page and search only tasks*/
    if (mainPageDisplayProperty !== 'none') {
      const projects = document.querySelectorAll('.main-page_project');
      projects.forEach((project) => {
        const projectTitle = project.querySelector('.project_title')
          .textContent;
        if (projectTitle.includes(searchQuery)) {
          project.style = 'display: flex';
        } else {
          project.style = 'display: none';
        }
      });
    } else {
      const tasks = document.querySelectorAll('.task');
      tasks.forEach((task) => {
        const taskTitle = task.querySelector('.task_title').textContent;
        if (taskTitle.includes(searchQuery)) {
          task.style = 'display: flex';
        } else {
          task.style = 'display: none';
        }
      });
    }
  });
}
