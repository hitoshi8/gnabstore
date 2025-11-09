
document.addEventListener('DOMContentLoaded', function() {
    const firstCard = document.querySelector('.section');
    firstCard.classList.add('page-load');
});
        
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});
    
document.querySelectorAll('.section:not(.page-load)').forEach(card => {
    observer.observe(card);
});

document.querySelectorAll('.product:not(.page-load)').forEach(card => {
    observer.observe(card);
});

