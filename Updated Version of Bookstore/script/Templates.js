function generateBookCard(book, index) {
    return `
        <div class="book-card">
            <!-- Title is now above the image -->
            <div class="title">${book.name}</div> <!-- Title for the book -->
            <img src="${book.image}" alt="${book.name}" class="book-image">
            
            <div class="author">Author: ${book.author}</div>
            <div class="price">€${book.price}</div>
            <div class="year">Published: ${book.publishedYear}</div>
            <div class="genre">Genre: ${book.genre}</div>
            
            <!-- Likes and Heart Icon are now together -->
            <div class="likes-container">
                <div class="likes">Likes: ${book.likes}</div>
                <div class="heart" onclick="toggleLike(${index})">&#9829;</div>
            </div>
            
            <!-- Comment Section -->
            <div class="comment-section">
                <div class="comments-title">Comments:</div> <!-- Title for comments -->
                <div id="comments-list-${index}" class="comments-list"></div> <!-- List of comments -->
                <input type="text" id="comment-${index}" placeholder="Enter your comment">
                <button onclick="addComment(${index})">Send Comment</button>
            </div>
        </div>
    `;
}
