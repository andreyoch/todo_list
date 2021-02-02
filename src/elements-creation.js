import { Storage } from './classes';
function createProjectElement(projectName, objectProjectId) {
  const project = document.createElement('div');
  project.className = 'main-page_project project';

  const projectTitle = document.createElement('div');
  projectTitle.className = 'project_title';
  projectTitle.textContent = projectName;

  const projectNumberOfTasks = document.createElement('div');
  projectNumberOfTasks.className = 'project_number-of-tasks';
  projectNumberOfTasks.textContent = `Tasks : ${Storage.getNumberOfTasks(
    objectProjectId
  )}`;

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
    projectBtns.classList.add('show-project-btn');
    projectBtns.style = 'display: block';
    project.classList.remove('project-to-normal');
    project.classList.add('expand-project');
  });

  project.addEventListener('mouseleave', () => {
    projectBtns.style = 'display: none';
    project.classList.add('project-to-normal');
    project.classList.remove('expand-project');
  });

  projectTitle.addEventListener('click', renderProjectPage);

  return project;
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
  const projectTitle = project.querySelector('.project_title').textContent;
  const projectId = project.querySelector('.project-id').textContent;
  const tasks = Storage.getTasks(projectId);
  const projectPage = document.querySelector('.project-page');
  const projectPageTitle = projectPage.querySelector('.project-page_title');
  const projectIdProjectPageEl = projectPage.querySelector('.project-id');
  const oldTasks = projectPage.querySelectorAll('.task');
  const mobileMenu = document.querySelector('.mobile-menu-window');
  const mobileSearchInput = mobileMenu.querySelector('.search-input')
  const searchInput = document.querySelector('.search-input');
  //Update search input placeholder
  searchInput.placeholder = `Search in "${projectTitle}"`;
  mobileSearchInput.placeholder = `Search in "${projectTitle}"`
  //Update project page title
  projectPageTitle.textContent = projectTitle;
  //Give project page actual project id
  projectIdProjectPageEl.textContent = projectId;
  //Remove Old taskElements
  if (oldTasks.length > 0) {
    oldTasks.forEach((taskElement) => taskElement.remove());
  }
  tasks.forEach((task) => {
    addTaskElementToPage(
      createTaskElement(
        task.name,
        task.description,
        task.dueDate,
        task.priority,
        task.taskId
      )
    );
  });
  const mainPage = document.querySelector('.main-page');
  mainPage.style = 'display: none';
  projectPage.style = 'display: block';
}

function createTaskElement(name, description, dueDute, priorityColor, id) {
  let backgroundColor;
  switch (priorityColor) {
    case 'green':
      backgroundColor = '#19de97';
      break;
    case 'blue':
      backgroundColor = '#254fe7';
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
  taskPriorityLine.style = `background-color: ${backgroundColor};`;

  taskTitle.append(taskPriorityLine);

  const taskPriorityBlock = document.createElement('div');
  taskPriorityBlock.className = 'task_priority-block';
  taskPriorityBlock.style = `background-color: ${backgroundColor};`;

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
  taskDueDate.textContent = `Due: ${dueDute}`;

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
  taskId.textContent = id;

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

  //Show remove modal if click on remove task btn
  removeBtn.addEventListener('click', showTaskDeleteConfirmation);

  //Show edit modal if click on edit task btn
  editBtn.addEventListener('click', showEditTaskModal);
  return task;
}

function addTaskElementToPage(task) {
  const projectPageRow = document.querySelector('.project-page_row');

  projectPageRow.append(task);
}

function showTaskDeleteConfirmation(e) {
  const removeTaskModal = document.querySelector(
    '.project-page_remove-task-modal-window '
  );
  const task = e.target.parentElement.parentElement.parentElement;
  const taskId = task.querySelector('.task_id').textContent;
  const taskName = task.querySelector('.task_title').textContent;
  const noBtnModal = removeTaskModal.querySelector('.remove-task-modal_no-btn');
  const yesBtnModal = removeTaskModal.querySelector(
    '.remove-task-modal_yes-btn'
  );
  const removeTaskModalTitle = removeTaskModal.querySelector(
    '.remove-task-modal-window_title'
  );
  const projectId = document
    .querySelector('.project-page')
    .querySelector('.project-id').textContent;

  removeTaskModal.style = 'display: block';
  removeTaskModalTitle.innerHTML = `Are you sure to delete <br> "${taskName}" task?`;

  noBtnModal.addEventListener(
    'click',
    () => {
      removeTaskModal.style = 'display:none';
    },
    { once: true }
  );

  yesBtnModal.addEventListener(
    'click',
    () => {
      //Remove task element from page
      task.remove();
      //Remove task object from storage
      Storage.removeTask(projectId, taskId);
      removeTaskModal.style = 'display:none';
    },
    { once: true }
  );
}

function showEditTaskModal(e) {
  const editTaskModal = document.querySelector(
    '.project-page_edit-modal-window'
  );
  const task = e.target.parentElement.parentElement.parentElement;
  const projectPage = task.parentElement.parentElement;
  const projectId = projectPage.querySelector('.project-id').textContent;
  const taskId = task.querySelector('.task_id').textContent;
  const taskTitle = task.querySelector('.task_title');
  const taskDescription = task.querySelector('.task-expanded_description');
  const TaskDueDate = task.querySelector('.task-expanded_due-date');
  const taskPriorityBlock = task.querySelector('.task_priority-block');

  let taskPriorityLine = task.querySelector('.task-priority-line');

  //When change text content in Task titile,task priority line-removed
  if (taskPriorityLine === null) {
    taskPriorityLine = document.createElement('div');
    taskPriorityLine.className = 'task-priority-line';
  }

  //Update data in editModal form
  const editTaskModalTitle = editTaskModal.querySelector(
    '.edit-task-modal-window_name-field'
  );
  editTaskModalTitle.value = taskTitle.textContent;

  const editTaskModalDesc = editTaskModal.querySelector(
    '.edit-task-modal-window_task-description-input'
  );
  editTaskModalDesc.value = taskDescription.value;

  const editTaskModalDateField = editTaskModal.querySelector(
    '.edit-task-modal_date-input'
  );
  const taskPriorityBtns = editTaskModal.querySelectorAll('.edit');
  const saveModalBtn = editTaskModal.querySelector(
    '.edit-task-modal-window_btn'
  );
  editTaskModal.style = 'display: block';

  saveModalBtn.addEventListener(
    'click',
    () => {
      let priorityColor;
      taskPriorityBtns.forEach((el) => {
        if (el.checked) {
          priorityColor = el.value;
        }
      });

      const newTaskTitle = editTaskModalTitle.value;
      const newTaskDescription = editTaskModalDesc.value;
      const newDueDate = editTaskModalDateField.value;

      //Update info in task html element
      taskTitle.textContent = newTaskTitle;
      /*Append element with property color,because we removed taskPriorityLine el 
      after changing text content on TaskTitle */
      taskTitle.append(taskPriorityLine);
      taskDescription.textContent = newTaskDescription;
      TaskDueDate.textContent = newDueDate;

      let backgroundColor;
      switch (priorityColor) {
        case 'green':
          backgroundColor = '#19de97';
          break;
        case 'blue':
          backgroundColor = '#254fe7';
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

      taskPriorityBlock.style = `background-color: ${backgroundColor} `;
      taskPriorityLine.style = `background-color: ${backgroundColor} `;

      //Update info in storage
      Storage.updateTaskInfo(
        projectId,
        taskId,
        newTaskTitle,
        newTaskDescription,
        newDueDate,
        priorityColor
      );

      editTaskModal.style = 'display: none';
    },
    { once: true }
  );
}

export {
  createProjectElement,
  addProjectToPage,
  createTaskElement,
  addTaskElementToPage,
};
