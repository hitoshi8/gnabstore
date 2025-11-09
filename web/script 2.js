// Xử lý dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownBtn = document.querySelector('.dropdown-btn');
    
    // Toggle dropdown khi click nút
    dropdownBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdown.classList.toggle('active');
    });
    
    // Đóng dropdown khi click bên ngoài
    document.addEventListener('click', function(e) {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
    
    // Ngăn đóng dropdown khi click trong dropdown content
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.addEventListener('click', function(e) {
        e.stopPropagation();
    });
    
    // Xử lý click trên dropdown item
    const dropdownItems = document.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            const method = this.textContent.trim();
            alert(`Bạn đã chọn: ${method}`);
            dropdown.classList.remove('active');
        });
    });
    
    // Scroll animation cho các section
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
    
    // Quan sát tất cả section và product trừ cái đầu tiên
    document.querySelectorAll('.section:not(.page-load), .product:not(.page-load)').forEach(element => {
        observer.observe(element);
    });
});