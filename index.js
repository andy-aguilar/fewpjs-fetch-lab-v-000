function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    let h1 = document.createElement("h1")
    h1.textContent = book.name
    main.appendChild(h1)
  })
}


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
