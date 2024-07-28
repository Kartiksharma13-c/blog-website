// Function to handle comment submission
function handleCommentSubmission(postId) {
    const form = document.getElementById(`comment-form-${postId}`);
    const commentsDiv = document.getElementById(`comments-${postId}`);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById(`name-${postId}`).value;
        const message = document.getElementById(`message-${postId}`).value;

        if (name && message) {
            const comment = document.createElement('p');
            comment.innerHTML = `<strong>${name}:</strong> ${message}`;
            commentsDiv.appendChild(comment);

            // Clear form fields
            form.reset();
        }
    });
}

// Initialize comment handling for each post
handleCommentSubmission('post1');
handleCommentSubmission('post2');
handleCommentSubmission('post3');