const showContent = (section) => {
  const contentSections = document.querySelectorAll('.content');
  contentSections.forEach((content) => {
    content.classList.remove('active');
  });
  section.classList.add('active');
};

const updateActiveNavLink = (selectedLink) => {
  const navLinks = document.querySelectorAll('.navbar ul li a');
  navLinks.forEach((link) => {
    if (link === selectedLink) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};

export default function initializeNavigation() {
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
