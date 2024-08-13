import {
  renderBookList,
  renderAuthorInfo,
  renderNewUserForm,
  renderNewUser,
} from './render-functions.js';
import {
  getFirstThreeFantasyBooks,
  getAuthor,
  createNewUser,
} from './fetch-functions.js';

export default async function app(appDiv) {
  const bookListEl = document.createElement('ul');
  bookListEl.id = 'book-list';
  appDiv.append(bookListEl);

  const authorInfoEl = document.createElement('div');
  authorInfoEl.id = 'author-info';
  appDiv.append(authorInfoEl);

  const newUserEl = document.createElement('div');
  newUserEl.id = 'new-user';
  appDiv.append(newUserEl);

  const newUserFormEl = document.createElement('form');
  newUserFormEl.id = 'new-user-form';
  appDiv.append(newUserFormEl);
  // Render the form!
  // renderNewUserForm;

  // Fetch the books!
  const books = await getFirstThreeFantasyBooks()
  // render out the books
  renderBookList(bookListEl, books)

  // bookListEl.addEventListener('???', () => {})
    /*
    FEEDBACK:
    Check if the clicked target is a button
    If it is, retrieve the author data using the author URL key from the button's dataset
    Once the author data is retrieved, render the author's information in the authorInfoEl element
    */

  // newUserFormEl.addEventListener('???', () => {})
    /*
    FEEDBACK:
    Prevent the default form submission behavior
    Extract the form data from the event and convert it into an object
    Ensure the 'isCool' property is a boolean value
    Create a new user in the database using the form data
    Once the new user is created, render the new user's information in the newUserEl element
    */
}
