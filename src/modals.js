import { Project, Storage } from './classes';
import {
  createProjectElement,
  addProjectToPage,
  createTaskElement,
  addTaskElementToPage,
} from './elements-creation';
function activateModals() {
  const removeProjectModal = document.querySelector('.remove-modal-window');
  const editProjectModal = document.querySelector('.edit-modal-window');
  const editModalCloseBtn = editProjectModal.querySelector('.edit-modal-close');
  const removeModalCloseBtn = removeProjectModal.querySelector(
    '.remove-modal-close'
  );
  const addProjectBtn = document.querySelector('.main-page_add-project-btn');
  const addProjectModal = document.querySelector(
    '.main-page_add-project-modal'
  );
  const addProjectNameFieldModal = addProjectModal.querySelector(
    '.add-modal-window_name-field'
  );
  const createProjectModalBtn = addProjectModal.querySelector(
    '.create-modal-window_btn'
  );
  const addTaskModal = document.querySelector('.project-page_modal-window');
  const addTaskBtn = document.querySelector('.project-page_add-task-btn');
  const addTaskModalCloseBtn = document.querySelector('.add-task-modal-close');
  const createTaskModalBtn = document.querySelector(
    '.create-task-modal-window_btn'
  );

  editModalCloseBtn.addEventListener(
    'click',
    () => (editProjectModal.style = 'display: none')
  );

  removeModalCloseBtn.addEventListener(
    'click',
    () => (removeProjectModal.style = 'display: none')
  );

  addTaskModalCloseBtn.addEventListener('click', () => {
    addTaskModal.style = 'display:none';
  });

  addProjectBtn.addEventListener('click', () => {
    addProjectModal.style = 'display: block';

    createProjectModalBtn.addEventListener(
      'click',
      () => {
        const projectName = addProjectNameFieldModal.value;
        addProjectNameFieldModal.value = '';
        //Create new project object
        let project = new Project(projectName);
        Storage.addProject(project);
        //Create project element,give to projectElement project object id and add projectElement to Page
        const projectElement = createProjectElement(projectName, project.id);
        addProjectToPage(projectElement);
        addProjectModal.style = 'display: none';
      },
      { once: true }
    );
  });

  addTaskBtn.addEventListener('click', () => {
    addTaskModal.style = 'display: block';

    createTaskModalBtn.addEventListener(
      'click',
      (e) => {
        //Collect  data from form
        const modalContent = e.target.parentElement.parentElement;
        const nameInput = modalContent.querySelector(
          '.add-task-modal-window_name-field'
        );
        const descriptionInput = modalContent.querySelector(
          '.add-task-modal-window_task-description-input'
        );
        const dueDateInput = modalContent.querySelector(
          '.add-task-modal_date-input'
        );
        const taskPriorityBtns = modalContent.querySelectorAll(
          'input[name="priority-element"]'
        );
        let priorityColor;
        taskPriorityBtns.forEach((el) => {
          if (el.checked) {
            priorityColor = el.value;
          }
        });
        const taskName = nameInput.value;
        const taskDescription = descriptionInput.value;
        const dueDate = dueDateInput.value;

        //Clean inputs
        nameInput.value = '';
        descriptionInput.value = '';
        dueDateInput.value = '';
        taskPriorityBtns.forEach((el) => (el.checked = false));

        addTaskModal.style = 'display: none';
        addTaskElementToPage(createTaskElement(taskName,taskDescription,dueDate,priorityColor));
      },
      { once: true }
    );
  });

  //If user click oustide window - close window
  window.addEventListener('click', (e) => {
    if (
      e.target.className ===
      'main-page_edit-project-modal-window edit-modal-window modal-window'
    ) {
      editProjectModal.style = 'display: none';
    }
  });

  window.addEventListener('click', (e) => {
    if (
      e.target.className ===
      'main-page_remove-project-modal-window remove-modal-window modal-window'
    ) {
      removeProjectModal.style = 'display: none';
    }
  });

  window.addEventListener('click', (e) => {
    if (e.target.className === 'main-page_add-project-modal modal-window') {
      addProjectModal.style = 'display: none';
    }
  });

  window.addEventListener('click', (e) => {
    if (e.target.className === 'project-page_modal-window modal-window') {
      addTaskModal.style = 'display: none';
    }
  });
}
export { activateModals };
