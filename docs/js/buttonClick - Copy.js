document.addEventListener('DOMContentLoaded', function() {
    const aboutMeButton = document.querySelector('.aboutMe');
    const contentDiv = document.querySelector('.content');
    const defaultDiv = document.querySelector('.default');

    aboutMeButton.addEventListener('click', function() {
        // Toggle the display style of the content div
        if (contentDiv.style.display === 'none') {
            contentDiv.style.display = 'flex';
            defaultDiv.style.display = 'none';
        } else {
            contentDiv.style.display = 'none';
            defaultDiv.style.display = 'flex';
        }
    });
});