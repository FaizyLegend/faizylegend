document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.dark-light');
  const toggleLeft = document.querySelector('.menu-icon');
  const leftSide = document.querySelector('.left-side');
  const sideMenuLinks = document.querySelectorAll('.side-menu a');

  // Toggle light mode
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });

  // Toggle left panel visibility
  toggleLeft.addEventListener('click', () => {
    leftSide.classList.toggle('visible');
  });

  // Close left panel when clicking outside
  document.addEventListener('click', (event) => {
    if (!leftSide.contains(event.target) && !toggleLeft.contains(event.target)) {
      leftSide.classList.remove('visible');
    }
  });

  // Additional event listener to close left panel when a link is clicked
  sideMenuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      leftSide.classList.remove('visible');
    });
  });
});
