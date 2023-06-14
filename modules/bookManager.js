export default class BookManager {
  constructor(container) {
    this.container = container;
    this.books = [];
  }

  addBook(title, author) {
    const book = {
      title,
      author,
    };
    this.books.push(book);
    this.renderBooks();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.renderBooks();
  }

  renderBooks() {
    this.container.innerHTML = '';
    if (this.books.length === 0) {
      const noBooksMessage = document.createElement('p');
      noBooksMessage.textContent = 'No books found.';
      this.container.appendChild(noBooksMessage);
    } else {
      const list = document.createElement('ul');
      list.classList.add('book-list');
      for (let i = 0; i < this.books.length; i += 1) {
        const book = this.books[i];
        const listItem = document.createElement('li');
        listItem.classList.add('book-item');

        const bookInfo = document.createElement('div');
        bookInfo.classList.add('book-info');

        const title = document.createElement('p');
        title.textContent = book.title;
        title.classList.add('book-title');

        const author = document.createElement('p');
        author.textContent = `by ${book.author}`;
        author.classList.add('book-author');

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', () => {
          this.removeBook(i);
        });

        bookInfo.appendChild(title);
        bookInfo.appendChild(author);

        listItem.appendChild(bookInfo);
        listItem.appendChild(removeButton);

        list.appendChild(listItem);
      }
      this.container.appendChild(list);
    }
  }
}
