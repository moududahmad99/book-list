// // Define UI element
// let form = document.querySelector('#book-form');

// // Define Book class

// class Book {
//     constructor (title, author, isbn) {
//         this.title = title;
//         this.author = author;
//         this.isbn = isbn;
//     }
// }

// // Define UI Class
// class UI {
//     constructor () {

//     }

//     addToBooklist(book) {
//         let list = document.querySelector('#book-list');
//         let row = document.createElement('tr')
        
//         row.innerHTML = `
//         <td>${book.title}</td>
//         <td>${book.author}</td>
//         <td>${book.isbn}</td>
//         <td><a href="#" class='delete' >X<a/></td>
//         `
//         list.appendChild(row)
//     }

//     clearField () {
//         document.querySelector('#title').value = '';
//         document.querySelector('#author').value = '';
//         document.querySelector('#isbn').value = '';
//     }
// }

// // Event Listener
// form.addEventListener('submit', newBook);

// // Define Function
// function newBook(e) {
//     let title = document.querySelector('#title').value;
//     let author = document.querySelector('#author').value;
//     let isbn = document.querySelector('#isbn').value;

//     let book = new Book (title, author, isbn)

//     let ui = new UI();

//     ui.addToBooklist(book)

//     ui.clearField();

//     e.preventDefault();
// }

// Define UI Element
let form = document.querySelector('#book-form');

// Book Class
class Book {
    constructor (title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Element
class UI {
    constructor () {

    }

    addToBooklist(book) {
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');

        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class="delete">X</a></td>
        `
        list.appendChild(row)
    }

    clearField() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

}

// Add Event Listener
form.addEventListener('submit', newBook);

// Define Functions
function newBook(e) {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let isbn = document.querySelector('#isbn').value;

    if(title === '' || author === '' || isbn === '') {
        alert('All Fields!')
    } else {

        let book = new Book(title, author, isbn);
        
        let ui = new UI();
    
        ui.addToBooklist(book)
    
        ui.clearField()
    }

    e.preventDefault()
}