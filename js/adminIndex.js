// Mô phỏng danh sách kỳ thi và người dùng

let exams = [
    { id: 0, name: "Math", amount: "30/35", average: "8.5", completeRate: "85%"},
    { id: 1, name: "English", amount: "25/30", average: "7.5", completeRate: "80%"},
    { id: 2, name: "History", amount: "20/25", average: "9.5", completeRate: "75%"},
    { id: 3, name: "Geography", amount: "15/20", average: "6.5", completeRate: "70%"},
    { id: 4, name: "Physics", amount: "10/15", average: "8.5", completeRate: "65%"},
    { id: 5, name: "Chemistry", amount: "10/10", average: "7.5", completeRate: "60%"},
    { id: 6, name: "Biology", amount: "25/25", average: "9.5", completeRate: "55%"}
];

let users = [
    { id: 0, studentID: "B21DCVT027", name: "Tung Lam", class: "E21CQCN02-B"},
    { id: 1, studentID: "B21DCVT028", name: "Ngoc Long", class: "E21CQCN02-B"},
    { id: 2, studentID: "B21DCVT029", name: "Dinh Minh", class: "E21CQCN02-B"},
    { id: 3, studentID: "B21DCVT030", name: "Anh Tuan", class: "E21CQCN02-B"},
    { id: 4, studentID: "B21DCVT031", name: "Khanh Linh", class: "E21CQCN02-B"},
    { id: 5, studentID: "B21DCVT032", name: "Kim Dung", class: "E21CQCN02-B"},
    { id: 6, studentID: "B21DCVT033", name: "Nam Anh", class: "E21CQCN02-B"}
];

localStorage.setItem('exams', JSON.stringify(exams));
localStorage.setItem('users', JSON.stringify(users));

let examsData = JSON.parse(localStorage.getItem('exams'));
let usersData = JSON.parse(localStorage.getItem('users'));

// Hiển thị danh sách kỳ thi
function displayExamList() {
    const examList = document.getElementById('testTableBody');
    examList.innerHTML = '';
    examsData.forEach(exam => {
        const examItem = document.createElement('tr');
        examItem.innerHTML = `
          <td>${exam.id}</td>
          <td>${exam.name}</td>
          <td>${exam.amount}</td>
          <td>${exam.average}</td>
          <td>${exam.completeRate}</td>
          <td class="col-action">
            <a href="/pages/editExam.html">
              <button type="button" class="btn btn-primary">Edit</button>
            </a>
              <button type="button" class="btn btn-danger" onclick='deleteExam(examsData, ${exam.id})'>Delete</button>
            </td>
        `;
      examList.appendChild(examItem);
    });
}

// Hiển thị danh sách người dùng
function displayUserList() {
    const userList = document.getElementById('userTableBody');
    userList.innerHTML = '';
    usersData.forEach(user => {
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
          <button type="button" class="btn btn-danger" onclick='deleteUser(usersData, ${user.id})'>Delete</button>
        </td>
        `;
        userList.appendChild(userItem);
    });
}

function deleteExam(array, idToDelete) {
    examsData = array.filter(exam => exam.id !== idToDelete);
    localStorage.setItem('exams', JSON.stringify(examsData));
    displayExamList();
}

function deleteUser(array, idToDelete) {
    usersData = array.filter(user => user.id !== idToDelete);
    localStorage.setItem('users', JSON.stringify(usersData));
    displayUserList();
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

// Hiển thị trang Dashboard Admin khi trang được tải
displayExamList();
displayUserList();

