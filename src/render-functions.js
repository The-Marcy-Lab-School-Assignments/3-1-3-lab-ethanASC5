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
}

export const renderNewUserForm = (newUserFormEl) => {
}

export const renderNewUser = (newUserEl, newUser) => {
}