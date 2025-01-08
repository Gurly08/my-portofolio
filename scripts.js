document.addEventListener('DOMContentLoaded', function () {
    const toggleMenu = document.querySelector('.toggle-menu');
    const menu = document.querySelector('.menu');

    toggleMenu.addEventListener('click', function () {
      menu.classList.toggle('show');
    });
  });