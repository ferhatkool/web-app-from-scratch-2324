const dialogAboutMeButton = document.getElementById('aboutMeButton');
const dialogAboutMe = document.getElementById('dialogAboutMe');
const dialogAboutMeDiv = document.getElementById('aboutMeStopPropagation');

dialogAboutMeButton.addEventListener('click', () => dialogAboutMe.showModal());
dialogAboutMe.addEventListener('click', () => dialogAboutMe.close());
dialogAboutMeDiv.addEventListener('click', (event) => event.stopPropagation());

const dialogMusicButton = document.getElementById('musicButton');
const dialogMusic = document.getElementById('dialogMusic');
const dialogMusicDiv = document.getElementById('musicStopPropagation');

dialogMusicButton.addEventListener('click', () => dialogMusic.showModal());
dialogMusic.addEventListener('click', () => dialogMusic.close());
dialogMusicDiv.addEventListener('click', (event) => event.stopPropagation());

const dialogHobbiesButton = document.getElementById('hobbiesButton');
const dialogHobbies = document.getElementById('dialogHobbies');
const dialogHobbiesDiv = document.getElementById('hobbiesStopPropagation');

dialogHobbiesButton.addEventListener('click', () => dialogHobbies.showModal());
dialogHobbies.addEventListener('click', () => dialogHobbies.close());
dialogHobbiesDiv.addEventListener('click', (event) => event.stopPropagation());

const dialogTop5Button = document.getElementById('top5Button');
const dialogTop5 = document.getElementById('dialogTop5');
const dialogTop5Div = document.getElementById('top5StopPropagation');

dialogTop5Button.addEventListener('click', () => dialogTop5.showModal());
dialogTop5.addEventListener('click', () => dialogTop5.close());
dialogTop5Div.addEventListener('click', (event) => event.stopPropagation());

const dialogBlogButton = document.getElementById('blogButton');
const dialogBlog = document.getElementById('dialogBlog');
const dialogBlogDiv = document.getElementById('blogStopPropagation');

dialogBlogButton.addEventListener('click', () => dialogBlog.showModal());
dialogBlog.addEventListener('click', () => dialogBlog.close());
dialogBlogDiv.addEventListener('click', (event) => event.stopPropagation());