import { Storage } from './classes';
function createProjectElement(projectName,objectProjectId) {
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

  editBtn.addEventListener('click', editProjectName);
  removeBtn.addEventListener('click', showProjectDeleteConfirmation);

  const projectId = document.createElement('div');
  projectId.textContent = objectProjectId;
  projectId.className = 'project-id';

  project.append(projectTitle, projectNumberOfTasks, projectActiveBtns,projectId);

  const projectBtns = project.querySelector('.project_btns');
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

function editProjectName(e) {
  const editProjectModalBtn = document.querySelector('.edit-modal-window_btn');
  const editProjectModal = document.querySelector('.edit-modal-window');
  const project = e.target.parentElement.parentElement;
  const projectName = project.querySelector('.project_title');
  const nameField = document.querySelector('.edit-modal-window_name-field');
  nameField.value = projectName.textContent;
  editProjectModal.style = 'display:block';

  editProjectModalBtn.addEventListener(
    'click',
    () => {
      //Update project name(grab value from name field)
      projectName.textContent = nameField.value;
      const projectId = project.querySelector('.project-id').textContent;
      Storage.updateProjectName(projectId,nameField.value)
      editProjectModal.style = 'display:none';
    },
    { once: true }
  );
}

function showProjectDeleteConfirmation(e) {
  const removeProjectModal = document.querySelector('.remove-modal-window');
  const project = e.target.parentElement.parentElement;
  const projectName = project.querySelector('.project_title').textContent;
  const noBtn = removeProjectModal.querySelector(
    '.remove-project-modal_no-btn'
  );
  const yesBtn = removeProjectModal.querySelector(
    '.remove-project-modal_yes-btn'
  );
  let removeProjectModalTitle = removeProjectModal.querySelector(
    '.remove-modal-window_title'
  );
  removeProjectModalTitle.innerHTML = `Are you sure to delete <br>"${projectName}" project?`;
  removeProjectModal.style = 'display: block';

  noBtn.addEventListener(
    'click',
    () => (removeProjectModal.style = 'display: none')
  );
  yesBtn.addEventListener(
    'click',
    () => {
      const projectId = project.querySelector('.project-id').textContent;
      Storage.removeProject(projectId);
      //Remove project from page
      project.remove();
      removeProjectModal.style = 'display: none';
    },
    { once: true }
  );
}

export { createProjectElement, updateNumberOfTasks, addProjectToPage };
