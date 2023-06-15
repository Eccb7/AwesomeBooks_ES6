import getCurrentDate from './modules/dateUtils.js';
import BookManager from './modules/bookManager.js';
import initializeNavigation from './modules/navigation.js';

document.addEventListener('DOMContentLoaded', () => {
  const currentDateElement = document.getElementById('currentDate');
  const bookContainer = document.getElementById('bookContainer');
  const addBookForm = document.getElementById('addBookForm');

  const bookManager = new BookManager(bookContainer);

  // Initialize navigation functionality
  initializeNavigation();

  // Display current date
  const currentDate = getCurrentDate();
  currentDateElement.textContent = currentDate;

  // Add book form submission event
  addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleInput = document.getElementById('titleInput');
    const authorInput = document.getElementById('authorInput');
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();

    if (title && author) {
      bookManager.addBook(title, author);
      titleInput.value = '';
      authorInput.value = '';
    }
  });
});
