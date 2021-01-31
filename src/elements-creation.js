import { Storage } from './classes';
function createProjectElement(projectName, objectProjectId) {
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

  project.append(
    projectTitle,
    projectNumberOfTasks,
    projectActiveBtns,
    projectId
  );

  const projectBtns = project.querySelector('.project_btns');
  project.addEventListener('mouseenter', () => {
    projectBtns.style = 'display: block';
    project.style = 'height: 140px';
  });

  project.addEventListener('mouseleave', () => {
    projectBtns.style = 'display: none';
    project.style = 'height: 98px';
  });

  projectTitle.addEventListener('click', renderProjectPage);

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
      Storage.updateProjectName(projectId, nameField.value);
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

function renderProjectPage(e) {
  const project = e.target.parentElement;
  const projectId = project.querySelector('.project-id').textContent;
  const tasks = Storage.getTasks();
  // tasks.forEach((task) => {
  //   addTaskElementToPage(
  //     createTaskElement(task.name, task.description, task.dueDate)
  //   );
  // });
  const mainPage = document.querySelector('.main-page');
  const projectPage = document.querySelector('.project-page');
  mainPage.style = 'display: none';
  projectPage.style = 'display: block';
}

function createTaskElement(name, description, dueDute,priorityColor) {
  let backgroundColor
  switch(priorityColor) {
    case 'green':
    backgroundColor = '#19de97'
    break;
    case 'blue':
      backgroundColor = '#254fe7'
      break;
    case 'yellow':
      backgroundColor = '#f0dc27';
      break;
    case 'purple':
      backgroundColor = '#6f3ebe';
      break;
    case 'red':
      backgroundColor = '#e72525';
      break;
  }

  console.log(backgroundColor,priorityColor)


  const task = document.createElement('div');
  task.className = 'task';

  const taskUpperElementsRow = document.createElement('div');
  taskUpperElementsRow.className = 'task_upper-elements-row';

  const checkboxInput = document.createElement('input');
  checkboxInput.type = 'checkbox';
  checkboxInput.className = 'task_checkbox';

  const taskTitle = document.createElement('div');
  taskTitle.className = 'task_title';
  taskTitle.textContent = name;
  const taskPriorityLine = document.createElement('div');
  taskPriorityLine.className = 'task-priority-line';
  taskPriorityLine.style = `background-color: ${backgroundColor};`

  taskTitle.append(taskPriorityLine);

  const taskPriorityBlock = document.createElement('div');
  taskPriorityBlock.className = 'task_priority-block';
  taskPriorityBlock.style = `background-color: ${backgroundColor};`

  const imgIconContainer = document.createElement('div');
  imgIconContainer.className = 'img-container';

  const icon = document.createElement('img');
  icon.className = 'expand-icon';
  icon.src = 'img/expand.png';
  icon.alt = 'expand-icon';

  imgIconContainer.append(icon);

  taskUpperElementsRow.append(
    checkboxInput,
    taskTitle,
    taskPriorityBlock,
    imgIconContainer
  );

  //Create expanded content task block
  const taskExpandedContent = document.createElement('div');
  taskExpandedContent.className = 'task-expanded_content-normal';

  const taskDescriptionInput = document.createElement('textarea');
  taskDescriptionInput.className = 'task-expanded_description';
  taskDescriptionInput.setAttribute('disabled', 'disabled');
  taskDescriptionInput.textContent = description;

  const taskDueDate = document.createElement('div');
  taskDueDate.className = 'task-expanded_due-date';
  taskDueDate.textContent = dueDute;

  const taskBtnsRow = document.createElement('div');
  taskBtnsRow.className = 'task-expanded_btns-row';

  const editBtn = document.createElement('div');
  editBtn.className = 'task_expanded-edit-btn task-expanded_btn';
  editBtn.textContent = 'Edit';

  const removeBtn = document.createElement('div');
  removeBtn.className = 'task_expanded-remove-btn task-expanded_btn';
  removeBtn.textContent = 'Remove';

  taskBtnsRow.append(editBtn, removeBtn);

  const taskId = document.createElement('span');
  taskId.className = 'task_id';
  // taskId.textContent = taskObjectId;

  taskExpandedContent.append(taskDescriptionInput, taskDueDate, taskBtnsRow);

  task.append(taskUpperElementsRow, taskExpandedContent, taskId);

  //Animation for imgIconContainer

  imgIconContainer.addEventListener('click', (e) => {
    imgIconContainer.classList.toggle('expand-icon-expanded');
    task.classList.toggle('expanded-task');
    taskExpandedContent.classList.toggle('task-expanded_content-expanded');
    taskUpperElementsRow.classList.toggle('task_upper-elements-expanded');
    imgIconContainer.addEventListener(
      'click',
      () => {
        imgIconContainer.classList.toggle('expand-icon-normal');
        task.classList.toggle('decreaseHeight');
      },
      { once: true }
    );
  });

  //Animation for completed task
  checkboxInput.addEventListener('click', () => {
    task.classList.toggle('completed-task');
    taskPriorityBlock.classList.toggle('completed-task-task-priority');
    taskPriorityLine.classList.toggle('completed-task-task-priority');
  });

  return task;
}

function addTaskElementToPage(task) {
  const projectPageRow = document.querySelector('.project-page_row');

  projectPageRow.append(task);
}

export {
  createProjectElement,
  updateNumberOfTasks,
  addProjectToPage,
  createTaskElement,
  addTaskElementToPage,
};
