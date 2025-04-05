// Function to change the text content of the paragraph
document.getElementById('changeTextButton').addEventListener('click', function() {
    document.getElementById('text').textContent = "The text has been changed!";
});

// Function to toggle CSS styles on the paragraph
document.getElementById('toggleStyleButton').addEventListener('click', function() {
    const textElement = document.getElementById('text');
    textElement.classList.toggle('changedStyle');
});

// Function to add a new element to the page
document.getElementById('addElementButton').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = "This is a new paragraph added dynamically!";
    newElement.classList.add('newElement');
    document.body.appendChild(newElement);
});
