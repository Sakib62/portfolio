// ---about me section---
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function openTab(event, tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.target.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// --responsive sidemenu---
var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}

// ---contact-form-portfolio---
const scriptURL = 'https://script.google.com/macros/s/AKfycbzhTLO0GoJFo-GrjvH85XtpSD_BDKsAi_cwmQVIZZVeRcQKp1ZNpAnTgQZJxo4sZmSp/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thanks for your feedback!"
        setTimeout(function() {
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

// ... existing JavaScript code ...

// Scroll to top button functionality
const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.visibility = 'visible';
        scrollToTopBtn.style.opacity = '1';
    } else {
        scrollToTopBtn.style.visibility = 'hidden';
        scrollToTopBtn.style.opacity = '0';
    }
};

scrollToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
});
