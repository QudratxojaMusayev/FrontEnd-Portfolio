// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor 
function UI() { }

UI.prototype.addBookList = function (book) {
    const listUI = document.querySelector('#book-list');

    // Create tr
    const row = document.createElement('tr');
    // Insert columns
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
    `;

    listUI.appendChild(row);
}

// Show alert
UI.prototype.showAlert = function (message, alertType) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.classList.add('alert');
    div.classList.add(alertType);
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent and form
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    // Insert alert before form
    container.insertBefore(div, form);

    // Disappear after 3 sec
    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000)
}

// Clear fields
UI.prototype.clearFields = function () {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
}

// Delete book
UI.prototype.deleteBook = function (target) {
    if (target.classList.contains('delete') && confirm('Are you sure to delete the book?')) {
        target.parentElement.parentElement.remove();
    }
}

// UI object
const ui = new UI();

// Event listeners
document.querySelector('#book-form').addEventListener('submit', function (e) {
    // Form values
    const title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value;

    // Book object
    const book = new Book(title, author, isbn);

    // Validation
    if (title === '' || author === '' || isbn === '') {
        // Error alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add book to list
        ui.addBookList(book);

        // Show alert
        ui.showAlert('Book added!', 'success');

        // Clear fields
        ui.clearFields();
    }

    e.preventDefault();
})

document.querySelector('#book-list').addEventListener('click', function (e) {
    // Delete book
    ui.deleteBook(e.target);

    // Show message
    ui.showAlert('Book deleted!', 'success');

    e.preventDefault();
})