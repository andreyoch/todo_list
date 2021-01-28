function activateProjectBtns() {
  const removeProjectModal = document.querySelector('.remove-modal-window');
  const editProjectBtn = document.querySelectorAll('.edit-btn');
  const removeProjectBtn = document.querySelectorAll('.remove-btn');
  const editProjectModal = document.querySelector('.edit-modal-window');
  const editModalCloseBtn = editProjectModal.querySelector('.edit-modal-close');
  const removeModalCloseBtn = removeProjectModal.querySelector(
    '.remove-modal-close'
  );

  editProjectBtn.forEach((btn) =>
    btn.addEventListener('click', editProjectName)
  );
  removeProjectBtn.forEach((btn) =>
    btn.addEventListener('click', showProjectDeleteConfirmation)
  );

  editModalCloseBtn.addEventListener(
    'click',
    () => (editProjectModal.style = 'display: none')
  );

  removeModalCloseBtn.addEventListener(
    'click',
    () => (removeProjectModal.style = 'display: none')
  );

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
      editProjectModal.style = 'display:none';
    },
    { once: true }
  );
}
function showProjectDeleteConfirmation(e) {
  const removeProjectModal = document.querySelector('.remove-modal-window');
  const project = e.target.parentElement.parentElement;
  const projectName = project.querySelector('.project_title').textContent;
  let removeProjectModalTitle = removeProjectModal.querySelector(
    '.remove-modal-window_title'
  );
  removeProjectModalTitle.textContent = `Are you sure to delete "${projectName}"?`;
  removeProjectModal.style = 'display: block';
}
export { activateProjectBtns };
