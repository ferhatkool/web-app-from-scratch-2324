// get elements from the html with a specified id //
const dialogAboutMeButton = document.getElementById('aboutMeButton');
const dialogAboutMe = document.getElementById('dialogAboutMe');
const dialogAboutMeDiv = document.getElementById('aboutMeStopPropagation');

// add an eventlistener for a click on the about me dialogs to show the content //
dialogAboutMeButton.addEventListener('click', () => dialogAboutMe.showModal());
// add an eventlistener for a fade out of the dialog //
dialogAboutMe.addEventListener('click', () => {
    // add a class with the specified styling to create a fade out animation //
    dialogAboutMe.classList.add('fade-out-dialog');
    // add a timeout for the closing of the dialog, so the fade out animation can play without being skipped. //
    setTimeout(() => {
        dialogAboutMe.close();
        dialogAboutMe.classList.remove('fade-out-dialog');
    }, 1000); // Animation duration
});
// add an eventlistner that stops the closing of the dialog when there is a click inside the dialog itself //
dialogAboutMeDiv.addEventListener('click', (event) => event.stopPropagation());

// get elements of the playlists dialog from the html with a specified id //
const dialogMusicButton = document.getElementById('musicButton');
const dialogMusic = document.getElementById('dialogMusic');
const dialogMusicDiv = document.getElementById('musicStopPropagation');

// add an eventlistener for a click on the playlists dialogs to show the content //
dialogMusicButton.addEventListener('click', () => dialogMusic.showModal());
// add an eventlistener for a fade out of the dialog //
dialogMusic.addEventListener('click', () => {
    // add a class with the specified styling to create a fade out animation //
    dialogMusic.classList.add('fade-out-dialog');
    // add a timeout for the closing of the dialog, so the fade out animation can play without being skipped. //
    setTimeout(() => {
        dialogMusic.close();
        dialogMusic.classList.remove('fade-out-dialog');
    }, 1000); // Animation duration
});
// add an eventlistner that stops the closing of the dialog when there is a click inside the dialog itself //
dialogMusicDiv.addEventListener('click', (event) => event.stopPropagation());

// get elements of the projects dialog from the html with a specified id //
const dialogProjectsButton = document.getElementById('projectsButton');
const dialogProjects = document.getElementById('dialogProjects');
const dialogProjectsDiv = document.getElementById('projectsStopPropagation');

// add an eventlistener for a click on the projects dialog to show the content //
dialogProjectsButton.addEventListener('click', () => dialogProjects.showModal());
// add an eventlistener for a fade out of the dialog //
dialogProjects.addEventListener('click', () => {
    // add a class with the specified styling to create a fade out animation //
    dialogProjects.classList.add('fade-out-dialog');
    // add a timeout for the closing of the dialog, so the fade out animation can play without being skipped. //
    setTimeout(() => {
        dialogProjects.close();
        dialogProjects.classList.remove('fade-out-dialog');
    }, 1000); // Animation duration
});
// add an eventlistner that stops the closing of the dialog when there is a click inside the dialog itself //
dialogProjectsDiv.addEventListener('click', (event) => event.stopPropagation());

// get elements of the top 5 list dialog from the html with a specified id //
const dialogTop5Button = document.getElementById('top5Button');
const dialogTop5 = document.getElementById('dialogTop5');
const dialogTop5Div = document.getElementById('top5StopPropagation');

// add an eventlistener for a click on the top 5 list dialog to show the content //
dialogTop5Button.addEventListener('click', () => dialogTop5.showModal());
// add an eventlistener for a fade out of the dialog //
dialogTop5.addEventListener('click', () => {
    // add a class with the specified styling to create a fade out animation //
    dialogTop5.classList.add('fade-out-dialog');
    // add a timeout for the closing of the dialog, so the fade out animation can play without being skipped. //
    setTimeout(() => {
        dialogTop5.close();
        dialogTop5.classList.remove('fade-out-dialog');
    }, 1000); // Animation duration
});
// add an eventlistner that stops the closing of the dialog when there is a click inside the dialog itself //
dialogTop5Div.addEventListener('click', (event) => event.stopPropagation());

// get elements of the blog dialog from the html with a specified id //
const dialogBlogButton = document.getElementById('blogButton');
const dialogBlog = document.getElementById('dialogBlog');
const dialogBlogDiv = document.getElementById('blogStopPropagation');

// add an eventlistener for a click on the blog dialog to show the content //
dialogBlogButton.addEventListener('click', () => dialogBlog.showModal());
// add an eventlistener for a fade out of the dialog //
dialogBlog.addEventListener('click', () => {
    // add a class with the specified styling to create a fade out animation //
    dialogBlog.classList.add('fade-out-dialog');
    // add a timeout for the closing of the dialog, so the fade out animation can play without being skipped. //
    setTimeout(() => {
        dialogBlog.close();
        dialogBlog.classList.remove('fade-out-dialog');
    }, 1000); // Animation duration
});
// add an eventlistner that stops the closing of the dialog when there is a click inside the dialog itself //
dialogBlogDiv.addEventListener('click', (event) => event.stopPropagation());