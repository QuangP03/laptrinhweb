const users = [
    { id: 1, username: "quang", email: "quang@gmail.com" },
    { id: 2, username: "thuan", email: "thuan@gmail.com" },
    { id: 3, username: "tri", email: "tri@gmail.com" },
    { id: 4, username: "tung", email: "tung@gmail.com" },
    { id: 5, username: "dang", email: "dang@gmail.com" },
    { id: 6, username: "lam", email: "lam@gmail.com" },
    { id: 7, username: "vtri", email: "vtriLU@gmail.com" },
    { id: 8, username: "vi", email: "vi@gmail.com" },
];

const rowsPerPage = 5;
let currentPage = 1;

function displayUsers(page) {
    const tableBody = document.getElementById("userTable");
    tableBody.innerHTML = "";

    let start = (page - 1) * rowsPerPage;
    let end = start + rowsPerPage;
    let paginatedUsers = users.slice(start, end);

    paginatedUsers.forEach(user => {
        let row = `
            <tr>
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>
                    <a href="edit.html?id=${user.id}">Edit</a> |
                    <a href="view.html?id=${user.id}">View</a> |
                    <a href="#" onclick="deleteUser(${user.id})">Delete</a>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    updatePagination();
}

function updatePagination() {
    let totalPages = Math.ceil(users.length / rowsPerPage);
    let pageNumbers = document.getElementById("pageNumbers");
    pageNumbers.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        let btn = document.createElement("button");
        btn.textContent = i;
        btn.onclick = function() { currentPage = i; displayUsers(i); };
        if (i === currentPage) btn.style.backgroundColor = "darkblue";
        pageNumbers.appendChild(btn);
    }
}

function deleteUser(userId) {
    if (confirm("Bạn có chắc chắn muốn xóa user này?")) {
        let index = users.findIndex(user => user.id === userId);
        if (index !== -1) {
            users.splice(index, 1);
            displayUsers(currentPage);
        }
    }
}

document.getElementById("prevPage").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayUsers(currentPage);
    }
});

document.getElementById("nextPage").addEventListener("click", () => {
    if (currentPage < Math.ceil(users.length / rowsPerPage)) {
        currentPage++;
        displayUsers(currentPage);
    }
});

displayUsers(currentPage);
