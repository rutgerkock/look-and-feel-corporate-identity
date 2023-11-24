const menuButton = document.getElementById('menuButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const header = document.getElementById('header');

menuButton.addEventListener('click', function () {
    toggleMenu();
});

const menuLinks = document.querySelectorAll('#dropdownMenu a');
menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        toggleMenu();
    });
});

function toggleMenu() {
    if (dropdownMenu.style.height === '0px' || dropdownMenu.style.height === '') {
        dropdownMenu.style.height = '100vh';
        menuButton.classList.add('expanded');
        header.classList.add('header-expanded');
    } else {
        dropdownMenu.style.height = '0';
        menuButton.classList.remove('expanded');
        header.classList.remove('header-expanded');
    }
}

const meerLezenHiddenWaarom = document.getElementById('meer_lezen_hidden_waarom');
const meerLezenWaarom = document.getElementById('meer_lezen_waarom');

meerLezenWaarom.addEventListener('click', function () {
    meerLezenHiddenWaarom.classList.toggle('show');
});
function showUpButton() {
    var upButton = document.getElementById("up_button");
    if (upButton) {
        upButton.style.opacity = "1"; 
        upButton.style.bottom = "20px"; 
    }
}

function hideUpButton() {
    var upButton = document.getElementById("up_button");
    if (upButton) {
        upButton.style.opacity = "0";
        upButton.style.bottom = "0";
    }
}

window.addEventListener("scroll", function() {
    var mainSection = document.getElementById("waarom_section");
    if (mainSection) {
        if (window.scrollY > mainSection.offsetTop) {
            showUpButton();
        } else {
            hideUpButton();
        }
    }
});

window.addEventListener("load", hideUpButton);
