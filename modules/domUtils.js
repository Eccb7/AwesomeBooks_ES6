import { showContent } from './domUtils';

export function initializeNavigation() {
  const navLinks = document.querySelectorAll('.navbar ul li a');

  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const sectionId = link.getAttribute('href').substring(1);
      showContent(sectionId);
      updateActiveNavLink(link);
    });
  });
}

function updateActiveNavLink(selectedLink) {
  const navLinks = document.querySelectorAll('.navbar ul li a');
  navLinks.forEach((link) => {
    if (link === selectedLink) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}
