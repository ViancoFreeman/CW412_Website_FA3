function postQuestion() {
    const questionInput = document.getElementById('questionInput').value;
    if (questionInput.trim() === '') {
        alert('Please enter a question.');
        return;
    }

    const threadsContainer = document.getElementById('threadsContainer');
    const newThread = document.createElement('div');
    newThread.classList.add('thread');

    const userProfile = document.createElement('p');
    userProfile.classList.add('user-profile');
    userProfile.textContent = 'User Name';

    const questionText = document.createElement('p');
    questionText.textContent = questionInput;

    const replyButton = document.createElement('button');
    replyButton.classList.add('reply-button');
    replyButton.textContent = 'Reply';
    replyButton.onclick = () => replyToThread(newThread);

    const repliesContainer = document.createElement('div');
    repliesContainer.classList.add('replies');

    newThread.appendChild(userProfile);
    newThread.appendChild(questionText);
    newThread.appendChild(replyButton);
    newThread.appendChild(repliesContainer);

    threadsContainer.appendChild(newThread);

    document.getElementById('questionInput').value = ''; // Clear the input after posting
}

function replyToThread(thread) {
    const replyText = prompt('Enter your reply:');
    if (replyText && replyText.trim() !== '') {
        const reply = document.createElement('p');
        reply.textContent = `User Name: ${replyText}`;
        thread.querySelector('.replies').appendChild(reply);
    }
}
