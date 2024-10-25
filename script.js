const toggleSwitch  = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const textBox = document.getElementById('text-box'); 
const image1  = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
// const imageItems = [image1,image2,image3];




// Function ToggleLightMode
function toggleDarkLightMode(isDark){
    nav.style.backgroundColor = isDark ?'rgb(0 0 0 /50%)':'rgb(255 255 255 /50%)'; 
    textBox.style.backgroundColor = isDark ?'rgb(255 255 255 / 50%)':'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ?'Dark Mode': 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') :
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun') ;
    isDark? imageMode('dark') : imageMode('light');
    console.log('james');
    

}

// Dark or Light Images 
function imageMode(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;

    // imageItems.forEach

}


// DARKmode styles

// function darkMode(){
//     nav.style.backgroundColor = 'rgb(0 0 0 /50%)';
//     textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
//     console.log(toggleIcon.children);
//     toggleIcon.children[0].textContent = 'Dark Mode';
//     toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
//     imageMode('dark');
   

// }

// // Light Mode

// function lightMode(){
//     nav.style.backgroundColor = 'rgb(255 255 255 /50%)';
//     textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
//     console.log(toggleIcon.children);
//     toggleIcon.children[0].textContent = 'LightMode';
//     toggleIcon.children[1].classList.replace('fa-moon', 'fa-soon');
//     imageMode('light');
    
     
// }

// Switch Theme 
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true);

    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false);
    }
}

// Add Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Checking local storage for theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme ==='dark'){
        toggleSwitch.checked = true;
        toggleDarkLightMode();
    }

}

