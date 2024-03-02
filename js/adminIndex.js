// Mô phỏng danh sách kỳ thi và người dùng
let exams = [
    { id: 1, name: "Luyện tập", status: "active" },
    { id: 2, name: "Giữa kỳ", status: "inactive" }
];

let users = [
    { id: 1, name: "Nguyễn Văn A", role: "student" },
    { id: 2, name: "Trần Thị B", role: "student" },
    { id: 3, name: "Admin", role: "admin" }
];

// Hiển thị danh sách kỳ thi
function displayExamList() {
    const examList = document.getElementById('examList');
    examList.innerHTML = '';
    exams.forEach(exam => {
        const examItem = document.createElement('div');
        examItem.innerHTML = `
          <p><strong>${exam.name}</strong> (${exam.status})</p>
          <button onclick="editExam(${exam.id})">Chỉnh sửa</button>
          <button onclick="deleteExam(${exam.id})">Xóa</button>
        `;
      examList.appendChild(examItem);
    });
}

// Hiển thị danh sách người dùng
function displayUserList() {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';
    users.forEach(user => {
        const userItem = document.createElement('div');
        userItem.innerHTML = `
          <p><strong>${user.name}</strong> (${user.role})</p>
          <button onclick="editUser(${user.id})">Chỉnh sửa</button>
          <button onclick="deleteUser(${user.id})">Xóa</button>
        `;
        userList.appendChild(userItem);
    });
}

// Hiển thị thống kê
function displayStatistics() {
    const statistics = document.getElementById('statistics');
    // Tính toán thống kê và hiển thị ở đây
    statistics.innerHTML = `
      <p>Số lượng người dùng: ${users.length}</p>
      <p>Số lượng kỳ thi: ${exams.length}</p>
      <!-- Thêm các thống kê khác ở đây -->
    `;
}

// Mở modal thêm mới kỳ thi
function openAddExamModal() {
    const modal = document.getElementById('addExamModal');
    modal.style.display = 'block';
}

// Đóng modal thêm mới kỳ thi
function closeAddExamModal() {
    const modal = document.getElementById('addExamModal');
    modal.style.display = 'none';
}

// Mở modal thêm mới người dùng
function openAddUserModal() {
    const modal = document.getElementById('addUserModal');
    modal.style.display = 'block';
}

// Đóng modal thêm mới người dùng
function closeAddUserModal() {
    const modal = document.getElementById('addUserModal');
    modal.style.display = 'none';
}

// Thêm mới kỳ thi
function addExam() {
  // Thêm logic thêm mới kỳ thi ở đây
}

// Chỉnh sửa kỳ thi
function editExam(id) {
  // Thêm logic chỉnh sửa kỳ thi ở đây
}

// Xóa kỳ thi
function deleteExam(id) {
  // Thêm logic xóa kỳ thi ở đây
}

// Thêm mới người dùng
function addUser() {
  // Thêm logic thêm mới người dùng ở đây
}

// Chỉnh sửa người dùng
function editUser(id) {
  // Thêm logic chỉnh sửa người dùng ở đây
}

// Xóa người dùng
function deleteUser(id) {
  // Thêm logic xóa người dùng ở đây
}

// Hiển thị trang Dashboard Admin khi trang được tải
displayExamList();
displayUserList();
displayStatistics();

