// Xử lý form đăng nhập
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const registerBtn = document.querySelector('.register-btn');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Xử lý đăng nhập ở đây
            console.log('Đăng nhập:', { username, password });
            alert('Đăng nhập thành công!');
        });
    }
    
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            // Chuyển hướng đến trang đăng ký
            window.location.href = '/Register.html';
        });
    }
});