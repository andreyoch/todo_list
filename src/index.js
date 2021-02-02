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

activateSearchBars();
activateLogoAndMobileMenuBtn();

function activateSearchBars() {
  const searchInput = document.querySelector('.search-input');
  const mobileMenu = document.querySelector('.mobile-menu-window');

  searchInput.addEventListener('keyup', search);
  mobileMenu.addEventListener('keyup', search);
}

function activateLogoAndMobileMenuBtn() {
  const logo = document.querySelector('.logo');
  const mobileProjectsBtn = document.querySelector('.projects-btn');
  const mainPage = document.querySelector('.main-page');
  const projectPage = document.querySelector('.project-page');
  const searchInput = document.querySelector('.search-input');
  let projects = document.querySelectorAll('.project');

  logo.addEventListener('click', () => {
    mainPage.style = 'display:block';
    projectPage.style = 'display:none';
    searchInput.placeholder = 'Search';
    projects = document.querySelectorAll('.project');
    projects.forEach((project) => project.remove());
    renderProjectsElements();
  });
  mobileProjectsBtn.addEventListener('click', () => {
    mainPage.style = 'display:block';
    projectPage.style = 'display:none';
    searchInput.placeholder = 'Search';
    projects = document.querySelectorAll('.project');
    projects.forEach((project) => project.remove());
    renderProjectsElements();
  });
}

function search(e) {
  const mainPage = document.querySelector('.main-page');
  const mainPageDisplayProperty = mainPage.style.display;
  const searchQuery = e.target.value;
  /*If mainPage display style dont equals 'none',we are on main page and search only project 
    otherwise,we are on project page and search only tasks*/
  if (mainPageDisplayProperty !== 'none') {
    const projects = document.querySelectorAll('.main-page_project');
    projects.forEach((project) => {
      const projectTitle = project.querySelector('.project_title').textContent;
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
}
