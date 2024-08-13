export const renderBookList = (bookListEl, books) => {
    bookListEl.innerHTML = ''

    for (let i = 0; i < books.length; i++) {
        // Create a new h1 HTML element
        const li = document.createElement('li');
        const img = document.createElement('img');
        const pTag = document.createElement('p');
        const button = document.createElement('button');

        img.src = books[i].coverUrl
        img.alt = `An old cover of ${books[i].title}`
        pTag.textContent = `Title: ${books[i].title}`
        button.dataset.authorUrlKey = books[i].author.urlKey
        button.textContent = `View ${books[i].author.name}`

        li.append(img, pTag, button)
        bookListEl.append(li)
    }

}

export const renderAuthorInfo = (authorInfoEl, author) => {
	authorInfoEl.innerHTML = "";
	const h2 = document.createElement("h2");
	const img = document.createElement("img");
	const p = document.createElement("p");
	const p2 = document.createElement("p");
	const a = document.createElement("a");

	h2.textContent = author.name;
	img.src = author.pictureUrl;
	img.alt = `A picture of ${author.name}`;
	p.textContent = `Born: ${author.birthDate}`;
	p2.textContent = author.bio;
	a.href = author.wikipediaUrl;
	a.textContent = `Wikipedia Link`;

	authorInfoEl.append(h2, img, p, p2, a);
};

export const renderNewUserForm = (newUserFormEl) => {
	newUserFormEl.innerHTML = `
	<label for="username">Username</label>
	<input id="username" name="username">
	<label for="is-cool">Is this user cool?</label>
	<input type="checkbox" id="is-cool" name="isCool">
	<label for="favorite-language">Favorite Language</label>
	<select name="favoriteLanguage" id="favorite-language">
		<option value="None">None</option>
		<option value="JavaScript">JavaScript</option>
		<option value="Python">Python</option>
		<option value="Ruby">Ruby</option>
	</select>
	<button>Create User</button>`;
};


export const renderNewUser = (newUserEl, newUser) => {
  // 1. Clear the existing content of the newUserEl element

  // 2. Create a new heading element (h2) to display the username
  
  // 3. Create a new paragraph element (p) to display the user's "cool" status
  
  // 4. Create another paragraph element (p) to display the user's favorite programming language

  // 5. Set the text content of the heading element to the username, and store the user's ID in a data attribute
  
  // 6. Set the text content of the coolStatusEl element based on whether the user is "cool" or not
  
  // 7. Set the text content of the favLanguageEl element to the user's favorite programming language

  // 8. Append the headingEl, coolStatusEl, and favLanguageEl elements to the newUserEl element
}