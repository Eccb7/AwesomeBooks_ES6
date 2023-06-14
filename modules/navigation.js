function showContent(section) {
  const contentSections = document.querySelectorAll('.content');
  contentSections.forEach((content) => {
    content.classList.remove('active');
  });
  section.classList.add('active');
}

/* eslint-disable import/prefer-default-export */

export function initializeNavigation() {
  const navLinks = document.querySelectorAll('.navbar ul li a');
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = document.querySelector(link.getAttribute('href'));
      showContent(targetSection);
    });
  });
}
