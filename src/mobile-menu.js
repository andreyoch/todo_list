function activateMobileMenu() {
  const burgerIcon = document.querySelector('.burger-icon');
  const mobileMenu = document.querySelector('.mobile-menu-window');

  burgerIcon.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-menu-active');
  });
}

export { activateMobileMenu };
