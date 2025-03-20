document.getElementById("updateForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn form reload trang

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let email = document.getElementById("email").value;
    let errorMessage = document.getElementById("errorMessage");

    // Kiểm tra mật khẩu có khớp không
    if (password !== confirmPassword) {
        errorMessage.textContent = "Mật khẩu nhập lại không khớp!";
        return;
    }

    // Kiểm tra mật khẩu tối thiểu 6 ký tự
    if (password.length < 6) {
        errorMessage.textContent = "Mật khẩu phải có ít nhất 6 ký tự!";
        return;
    }

    // Kiểm tra định dạng email đơn giản
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Email không hợp lệ!";
        return;
    }

    // Nếu hợp lệ
    alert("Cập nhật thông tin thành công!");
});
