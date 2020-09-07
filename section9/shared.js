var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanBtns = document.querySelectorAll('.plan button');
var toggleBtn = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

var closeModalBtn = document.querySelector('.modal__action--negative');

selectPlanBtns.forEach(planBtn => planBtn.addEventListener('click', openModal));
closeModalBtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', () => {
    mobileNav.style.display = 'block';
    closeModal();
})

function openModal() {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}

toggleBtn.addEventListener('click', () => {
    mobileNav.style.display = 'block';
});
