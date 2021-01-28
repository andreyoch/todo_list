
function createProjectElement(projectName) {
  const project = document.createElement('div');
  project.className = 'main-page_project project';

  const projectTitle = document.createElement('div');
  projectTitle.className = 'project_title';
  projectTitle.textContent = projectName;

  const projectNumberOfTasks = document.createElement('div');
  projectNumberOfTasks.className = 'project_number-of-tasks';
  projectNumberOfTasks.textContent = 'Tasks: 0';

  const projectActiveBtns = document.createElement('div');
  projectActiveBtns.className = 'project_btns';

  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.textContent = 'Edit';

  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove-btn';
  removeBtn.textContent = 'Remove';

  projectActiveBtns.append(editBtn, removeBtn);

  project.append(projectTitle, projectNumberOfTasks, projectActiveBtns);

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

  return project;
}

function updateNumberOfTasks(projectElement, numberOfTasks) {
  const numberOfTasksElement = projectElement.querySelector(
    'project_number-of-tasks'
  );
  numberOfTasks.textContent = `Tasks: ${numberOfTasks}`;
}

function addProjectToPage(projectElement) {
  const mainPageRow = document.querySelector('.main-page_row');
  mainPageRow.append(projectElement);
}

export { createProjectElement, updateNumberOfTasks, addProjectToPage };
