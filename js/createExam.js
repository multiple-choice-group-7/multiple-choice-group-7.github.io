// Xử lý khi form được submit
document.getElementById('examForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Lấy dữ liệu từ form
    var nameInput = document.getElementById('name').value;
    var descriptionInput = document.getElementById('description').value;
    var typeInput = document.getElementById('select').value || 'Free';
    var fileInput = document.getElementById('file').value;
    fileInput = fileInput.substring(0,12);
    var exams = JSON.parse(localStorage.getItem('exams'));
    const newExam = {
        id: exams.length + 1,
        name: nameInput,
        description: descriptionInput,
        type: typeInput,
        file: fileInput
    }
    exams.push(newExam);
    localStorage.setItem('exams', JSON.stringify(exams));
    window.location.href = '/pages/adminIndex.html';
});

