// Lấy tham số từ URL
function getUserDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");

    // Danh sách user mẫu
    const users = [
        { id: 1, username: "test1", email: "test1@gmail.com" },
        { id: 2, username: "test2", email: "test2@gmail.com" },
        { id: 3, username: "test3", email: "test3@gmail.com" }
    ];

    // Tìm user theo ID
    const user = users.find(user => user.id == userId);

    if (user) {
        document.getElementById("username").textContent = user.username;
        document.getElementById("email").textContent = user.email;
    } else {
        document.querySelector(".detail-box").innerHTML = "<p>Không tìm thấy người dùng!</p>";
    }
}

// Chuyển đến trang cập nhật khi nhấn "Chỉnh sửa"
document.getElementById("editBtn").addEventListener("click", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get("id");
    window.location.href = `update.html?id=${userId}`;
});

// Gọi hàm lấy thông tin người dùng
getUserDetails();
