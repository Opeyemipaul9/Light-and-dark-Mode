const toggleSwitch  = document.querySelector('input[type="checkbox"]');


// Switch Theme 
function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

// Add Event Listener
toggleSwitch.addEventListener('change', switchTheme);