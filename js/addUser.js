

// Xử lý khi form được submit
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Lấy dữ liệu từ form
    var nameInput = document.getElementById('name').value;
    var studentIDInput = document.getElementById('studentID').value;
    var classIDInput = document.getElementById('classID').value;
    let students = JSON.parse(localStorage.getItem('users'));
    const user = {
        id: students.length + 2,
        studentID: studentIDInput,
        name: nameInput, 
        class: classIDInput                     
    }
    students.push(user);
    localStorage.setItem('users', JSON.stringify(students));
    window.location.href = '/pages/adminIndex.html';
})