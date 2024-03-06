// Mô phỏng danh sách kỳ thi và người dùng

let exams = [
    { id: 0, name: "Midterm", description: "Mid-term test", type: "Limited", status: "Active", file: "midterm.xlsx"},
    { id: 1, name: "Endterm", description: "End-term test", type: "Limited", status: "Active", file: "endterm.xlsx"},
    { id: 3, name: "Practice 1", description: "Practice 1", type: "Free", status: "Active", file: "practice1.xlsx"},
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


let examsData 
let usersData

if (localStorage.getItem('users') === null) {
  localStorage.setItem('users', JSON.stringify(users));
  usersData = JSON.parse(localStorage.getItem('users'));
} else {
  usersData = JSON.parse(localStorage.getItem('users'));
}

if (localStorage.getItem('exams') === null) {
  localStorage.setItem('exams', JSON.stringify(exams));
  examsData = JSON.parse(localStorage.getItem('exams'));
} else {
  examsData = JSON.parse(localStorage.getItem('exams'));
}


// Hiển thị danh sách kỳ thi
function displayExamList() {
    const examList = document.getElementById('testTableBody');
    examList.innerHTML = '';
    examsData.forEach(exam => {
        const examItem = document.createElement('tr');
        examItem.innerHTML = `
          <td>${exam.id}</td>
          <td>${exam.name}</td>
          <td>${exam.description}</td>
          <td>${exam.type}</td>
          <td>${exam.status}</td> 
          <td>${exam.file}</td>
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

