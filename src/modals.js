
function activateEditProjectModal() {
  const editProjectBtn = document.querySelectorAll('.edit-btn');
  const editProjectModal = document.querySelector('.edit-modal-window');
  const editModalCloseBtn = editProjectModal.querySelector('.close');

  editProjectBtn.forEach((btn) =>
    btn.addEventListener('click', editProjectName)
  );

  editModalCloseBtn.addEventListener(
    'click',
    () => (editProjectModal.style = 'display: none')
  );

  //If user click oustide window - close window
  window.addEventListener('click', (e) => {
    if (
      e.target.className ===
      'main-page_edit-project-modal-window edit-modal-window'
    ) {
      editProjectModal.style = 'display: none';
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
export { activateEditProjectModal };
