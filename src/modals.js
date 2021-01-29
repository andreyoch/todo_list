import { createProjectElement, addProjectToPage } from './elements-creation';
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

  editModalCloseBtn.addEventListener(
    'click',
    () => (editProjectModal.style = 'display: none')
  );

  removeModalCloseBtn.addEventListener(
    'click',
    () => (removeProjectModal.style = 'display: none')
  );

  addProjectBtn.addEventListener('click', () => {
    addProjectModal.style = 'display: block';

    createProjectModalBtn.addEventListener(
      'click',
      () => {
        const projectName = addProjectNameFieldModal.value;
        addProjectNameFieldModal.value = '';

        addProjectToPage(createProjectElement(projectName));
        addProjectModal.style = 'display: none';
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
}
export { activateModals };
