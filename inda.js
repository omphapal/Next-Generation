const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar_menu');

mobileMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

const faqButtons = document.querySelectorAll('.faq_button');
faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
// JavaScript to toggle service details
const detailButtons = document.querySelectorAll('.details_btn');

detailButtons.forEach((button) => {
button.addEventListener('click', () => {
const details = button.nextElementSibling;

// Toggle display of service details
if (details.style.display === 'block') {
    details.style.display = 'none';
} else {
    // Hide other open details
    document.querySelectorAll('.service_details').forEach((detail) => {
        detail.style.display = 'none';
    });
    details.style.display = 'block';
}
});
});
