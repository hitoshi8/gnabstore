// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileDropdowns = document.querySelectorAll('.mobile-dropdown');
    
    // Toggle mobile menu
    if (hamburgerBtn && mobileMenu) {
        hamburgerBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Mobile dropdown functionality
    mobileDropdowns.forEach(dropdown => {
        const dropdownBtn = dropdown.querySelector('.mobile-dropdown-btn');
        
        dropdownBtn.addEventListener('click', function() {
            dropdown.classList.toggle('active');
        });
    });
    
    // Đóng menu khi click bên ngoài
    document.addEventListener('click', function(e) {
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            if (!e.target.closest('.mobile-nav') && !e.target.closest('.hamburger-btn')) {
                mobileMenu.classList.remove('active');
                hamburgerBtn.classList.remove('active');
            }
        }
    });
    
    // Đóng menu khi click vào link (tuỳ chọn)
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    mobileNavItems.forEach(item => {
        item.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            hamburgerBtn.classList.remove('active');
        });
    });
    
    // Đóng menu khi resize window (tuỳ chọn)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            if (mobileMenu && mobileMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                hamburgerBtn.classList.remove('active');
            }
        }
    });
});