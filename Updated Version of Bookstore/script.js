const books = [
    { 
        "name": "Die Geheimnisse des Ozeans", 
        "author": "Clara Meer", 
        "likes": 1250, 
        "liked": true, 
        "price": 19.99, 
        "publishedYear": 2018, 
        "genre": "Fantasy", 
        "image": "./img/book1.jpg", 
        "comments": [] 
    },
    { 
        "name": "Der vergessene Pfad", 
        "author": "Maximilian Schwarz", 
        "likes": 980, 
        "liked": false, 
        "price": 14.50, 
        "publishedYear": 2021, 
        "genre": "Fantasy", 
        "image": "./img/book2.avif", 
        "comments": [] 
    },
    { 
        "name": "Die Farben des Himmels", 
        "author": "Laura Blau", 
        "likes": 1520, 
        "liked": true, 
        "price": 22.95, 
        "publishedYear": 2019, 
        "genre": "Romantik", 
        "image": "./img/book3.gif", 
        "comments": [] 
    }
];

    function init() {
    const container = document.getElementById('books-container');
    container.innerHTML = '';
    books.forEach((book, index) => {
        const card = generateBookCard(book, index);
        container.innerHTML += card; 
    });
}

    function toggleLike(index) {
    const book = books[index];
    if (book.liked) {
        book.likes -= 1;
        book.liked = false;
    } else {
        book.likes += 1;
        book.liked = true;
    }
    const card = document.querySelectorAll('.book-card')[index];
    card.querySelector('.likes').textContent = `Likes: ${book.likes}`;
    card.querySelector('.heart').classList.toggle('liked', book.liked);
}

    function addComment(index) {
    const commentInput = document.getElementById(`comment-${index}`);
    const commentText = commentInput.value.trim();
    if (commentText) {
        const comment = { name: "[Mohammad]", comment: commentText }; 
        books[index].comments.unshift(comment);  
        const commentsList = document.getElementById(`comments-list-${index}`);
        commentsList.innerHTML = `<p><strong>${comment.name}:</strong> ${comment.comment}</p>` + commentsList.innerHTML;
        commentInput.value = ''; 
    }
}
