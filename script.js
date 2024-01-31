const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';



/* Dark or Light Images */
function imageMode(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

/* Toggle Dark Light Mode */
function toggleDarkLightMode(mode){
    if (mode === DARK_THEME){
        nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
        textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
        toggleIcon.children[0].textContent = 'Dark Mode';
        toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
        localStorage.setItem('theme',DARK_THEME);
        imageMode(DARK_THEME);
    }
    else{
        nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
        textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
        toggleIcon.children[0].textContent = 'Light Mode';
        toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
        localStorage.setItem('theme',LIGHT_THEME);
        imageMode(LIGHT_THEME);
    }
}

/* Switch Theme Dynamically */
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', DARK_THEME); // document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents).
        toggleDarkLightMode(DARK_THEME);
    } else {
        document.documentElement.setAttribute('data-theme', LIGHT_THEME);
        toggleDarkLightMode(LIGHT_THEME);
    }
}

/* Event Listener */
toggleSwitch.addEventListener('change', switchTheme);

/* check localstorage for theme */
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme === DARK_THEME){
        toggleSwitch.checked = true;
        toggleDarkLightMode(DARK_THEME);
    }
} 