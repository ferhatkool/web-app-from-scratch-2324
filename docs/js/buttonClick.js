const dialogAboutMeButton = document.getElementById('aboutMeButton');
const dialogAboutMe = document.getElementById('dialogAboutMe');
const dialogAboutMeDiv = document.getElementById('aboutMeStopPropagation');

dialogAboutMeButton.addEventListener('click', () => dialogAboutMe.showModal());
dialogAboutMe.addEventListener('click', () => {
    dialogAboutMe.classList.add('fade-out-dialog');
    setTimeout(() => {
        dialogAboutMe.close();
        dialogAboutMe.classList.remove('fade-out-dialog');
    }, 1000); // Animation duration
});
dialogAboutMeDiv.addEventListener('click', (event) => event.stopPropagation());

const dialogMusicButton = document.getElementById('musicButton');
const dialogMusic = document.getElementById('dialogMusic');
const dialogMusicDiv = document.getElementById('musicStopPropagation');

dialogMusicButton.addEventListener('click', () => dialogMusic.showModal());
dialogMusic.addEventListener('click', () => {
    dialogMusic.classList.add('fade-out-dialog');
    setTimeout(() => {
        dialogMusic.close();
        dialogMusic.classList.remove('fade-out-dialog');
    }, 1000); // Animation duration
});
dialogMusicDiv.addEventListener('click', (event) => event.stopPropagation());

const dialogProjectsButton = document.getElementById('projectsButton');
const dialogProjects = document.getElementById('dialogProjects');
const dialogProjectsDiv = document.getElementById('projectsStopPropagation');

dialogProjectsButton.addEventListener('click', () => dialogProjects.showModal());
dialogProjects.addEventListener('click', () => {
    dialogProjects.classList.add('fade-out-dialog');
    setTimeout(() => {
        dialogProjects.close();
        dialogProjects.classList.remove('fade-out-dialog');
    }, 1000); // Animation duration
});
dialogProjectsDiv.addEventListener('click', (event) => event.stopPropagation());

const dialogTop5Button = document.getElementById('top5Button');
const dialogTop5 = document.getElementById('dialogTop5');
const dialogTop5Div = document.getElementById('top5StopPropagation');

dialogTop5Button.addEventListener('click', () => dialogTop5.showModal());
dialogTop5.addEventListener('click', () => {
    dialogTop5.classList.add('fade-out-dialog');
    setTimeout(() => {
        dialogTop5.close();
        dialogTop5.classList.remove('fade-out-dialog');
    }, 1000); // Animation duration
});
dialogTop5Div.addEventListener('click', (event) => event.stopPropagation());

const dialogBlogButton = document.getElementById('blogButton');
const dialogBlog = document.getElementById('dialogBlog');
const dialogBlogDiv = document.getElementById('blogStopPropagation');

dialogBlogButton.addEventListener('click', () => dialogBlog.showModal());
dialogBlog.addEventListener('click', () => {
    dialogBlog.classList.add('fade-out-dialog');
    setTimeout(() => {
        dialogBlog.close();
        dialogBlog.classList.remove('fade-out-dialog');
    }, 1000); // Animation duration
});
dialogBlogDiv.addEventListener('click', (event) => event.stopPropagation());