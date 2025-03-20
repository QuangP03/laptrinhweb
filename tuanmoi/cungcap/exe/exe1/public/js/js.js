document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Ngăn chặn form reload trang

    // Lấy giá trị nhập vào
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("errorMessage");

    // Kiểm tra thông tin đăng nhập (ở đây chỉ là demo)
    if (username === "admin" && password === "123456") {
        alert("Đăng nhập thành công!");
        window.location.href = "dashboard.html"; // Chuyển hướng sau khi đăng nhập
    } else {
        errorMessage.textContent = "Sai tài khoản hoặc mật khẩu!";
    }
});
