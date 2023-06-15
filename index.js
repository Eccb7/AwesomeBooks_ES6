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

  // Retrieve books from localStorage if available
  const storedBooks = localStorage.getItem('books');
  if (storedBooks) {
    const parsedBooks = JSON.parse(storedBooks);
    parsedBooks.forEach((book) => {
      bookManager.addBook(book.title, book.author);
    });
  }

  // Add book form submission event
  addBookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const titleInput = document.getElementById('titleInput');
    const authorInput = document.getElementById('authorInput');
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();

    if (title && author) {
      bookManager.addBook(title, author);

      // Save books to localStorage
      const books = bookManager.getAllBooks();
      localStorage.setItem('books', JSON.stringify(books));

      titleInput.value = '';
      authorInput.value = '';
    }
  });
});
