// for mobile
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
    event.preventDefault();
});

// tabs

const tabs = document.querySelectorAll('.tabs li');
const tabContentBox = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
tabs.forEach(item => item.classList.remove('is-active'))
tab.classList.add('is-active');
event.preventDefault();

const target = tab.dataset.target;
console.log(target);
tabContentBox.forEach(box =>{
    if (box.getAttribute('id') === target)
    {
        box.classList.remove('is-hidden');
    } else
    box.classList.add('is-hidden')
    })
    })
})

// modal
const signupButton = document.querySelector('#signup');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');
 
signupButton.addEventListener('click', () => {
modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});