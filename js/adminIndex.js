// Mô phỏng danh sách kỳ thi và người dùng

let tests = [
    { id: 1, name: "Math", amount: "30/35", average: "8.5", completeRate: "85%"},
    { id: 2, name: "English", amount: "25/30", average: "7.5", completeRate: "80%"},
    { id: 3, name: "History", amount: "20/25", average: "9.5", completeRate: "75%"},
    { id: 4, name: "Geography", amount: "15/20", average: "6.5", completeRate: "70%"},
    { id: 5, name: "Physics", amount: "10/15", average: "8.5", completeRate: "65%"},
    { id: 6, name: "Chemistry", amount: "10/10", average: "7.5", completeRate: "60%"},
    { id: 7, name: "Biology", amount: "25/25", average: "9.5", completeRate: "55%"}
];

let users = [
    { id: 1, studentID: "B21DCVT027", name: "Tung Lam", class: "E21CQCN02-B"},
    { id: 2, studentID: "B21DCVT028", name: "Ngoc Long", class: "E21CQCN02-B"},
    { id: 3, studentID: "B21DCVT029", name: "Dinh Minh", class: "E21CQCN02-B"},
    { id: 4, studentID: "B21DCVT030", name: "Anh Tuan", class: "E21CQCN02-B"},
    { id: 5, studentID: "B21DCVT031", name: "Khanh Linh", class: "E21CQCN02-B"},
    { id: 6, studentID: "B21DCVT032", name: "Kim Dung", class: "E21CQCN02-B"},
    { id: 7, studentID: "B21DCVT033", name: "Nam Anh", class: "E21CQCN02-B"}
];

// Hiển thị danh sách kỳ thi
function displayExamList() {
    const examList = document.getElementById('testTableBody');
    examList.innerHTML = '';
    tests.forEach(test => {
        const examItem = document.createElement('tr');
        examItem.innerHTML = `
          <td>${test.id}</td>
          <td>${test.name}</td>
          <td>${test.amount}</td>
          <td>${test.average}</td>
          <td>${test.completeRate}</td>
          <td class="col-action">
            <a href="/pages/editExam.html">
              <button type="button" class="btn btn-primary">Edit</button>
            </a>
              <button type="button" class="btn btn-danger" onclick='onDelete(tests, ${test.id})'>Delete</button>
            </td>
        `;
      examList.appendChild(examItem);
    });
}

// Hiển thị danh sách người dùng
function displayUserList() {
    const userList = document.getElementById('userTableBody');
    userList.innerHTML = '';
    users.forEach(user => {
        const userItem = document.createElement('tr');
        userItem.innerHTML = `
        <td>${user.id}</td>
        <td>${user.studentID}</td>
        <td>${user.name}</td>
        <td>${user.class}</td>
        <td class="col-action">
          <a href="/pages/editExam.html">
            <button type="button" class="btn btn-primary">Edit</button>
          </a>
          <button type="button" class="btn btn-danger" onclick='onDelete(users, ${user.id})'>Delete</button>
        </td>
        `;
        userList.appendChild(userItem);
    });
}

function onDelete(array, idToDelete) {
  const indexToDelete = array.findIndex(obj => obj.id === idToDelete);
  if (indexToDelete !== -1) {
      const newArray = array.splice(indexToDelete, 1);
      console.log(newArray);
      displayUserList();
      displayExamList();
  }
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

