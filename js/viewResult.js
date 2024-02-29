// Dữ liệu mẫu về kết quả thi của sinh viên
const studentResults = [
    { studentId: "SV001", studentName: "Nguyễn Văn A", exams: [
          { exam: "Luyện tập", score: 8.5, completed: true, date: "2024-02-25", answers: [
                { question: "Câu hỏi 1", chosenAnswer: "A", correctAnswer: "B", explanation: "Giải thích câu hỏi 1" },
                { question: "Câu hỏi 2", chosenAnswer: "B", correctAnswer: "B", explanation: null }
          ] },
          { exam: "Giữa kỳ", score: 9.0, completed: true, date: "2024-02-27", answers: [
                { question: "Câu hỏi 1", chosenAnswer: "B", correctAnswer: "B", explanation: null },
                { question: "Câu hỏi 2", chosenAnswer: "C", correctAnswer: "C", explanation: null }
          ] }
    ] },
    { studentId: "SV002", studentName: "Trần Thị B", exams: [
          { exam: "Luyện tập", score: 7.0, completed: true, date: "2024-02-25", answers: [
                { question: "Câu hỏi 1", chosenAnswer: "B", correctAnswer: "B", explanation: null },
                { question: "Câu hỏi 2", chosenAnswer: "C", correctAnswer: "C", explanation: null }
          ] },
          { exam: "Giữa kỳ", score: 8.0, completed: true, date: "2024-02-27", answers: [
                { question: "Câu hỏi 1", chosenAnswer: "A", correctAnswer: "B", explanation: "Giải thích câu hỏi 1" },
                { question: "Câu hỏi 2", chosenAnswer: "C", correctAnswer: "C", explanation: null }
          ] }
    ] }
    // Thêm dữ liệu kết quả của sinh viên khác nếu cần
];

// Hàm tìm kiếm sinh viên
function search() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const studentResultsDiv = document.getElementById('studentResults');
    studentResultsDiv.innerHTML = '';

    studentResults.forEach(student => {
        if (student.studentId.toLowerCase().includes(searchInput) || student.studentName.toLowerCase().includes(searchInput)) {
            const studentDiv = document.createElement('div');
            studentDiv.classList.add('student-result');
            studentDiv.innerHTML = `
              <h2>${student.studentName} (${student.studentId})</h2>
              <div class="exams">
                ${renderExams(student.exams)}
              </div>
            `;
            studentResultsDiv.appendChild(studentDiv);
        }
    });
}

// Hàm hiển thị danh sách kết quả kỳ thi của sinh viên
function renderExams(exams) {
    let html = '';
    exams.forEach(exam => {
        html += `
          <div class="exam">
            <h3>${exam.exam}</h3>
            <p>Điểm số: ${exam.score}</p>
            <p>Trạng thái: ${exam.completed ? 'Hoàn thành' : 'Chưa hoàn thành'}</p>
            <p>Ngày tham gia: ${exam.date}</p>
            <h4>Câu trả lời chi tiết:</h4>
            <ul>
              ${renderAnswers(exam.answers)}
            </ul>
          </div>
        `;
    });
    return html;
}

// Hàm hiển thị chi tiết câu trả lời của sinh viên cho mỗi câu hỏi
function renderAnswers(answers) {
    let html = '';
    answers.forEach(answer => {
        html += `
          <li>
            <p><strong>Câu hỏi:</strong> ${answer.question}</p>
            <p><strong>Câu trả lời của sinh viên:</strong> ${answer.chosenAnswer}</p>
            <p><strong>Đáp án đúng:</strong> ${answer.correctAnswer}</p>
            <p><strong>Giải thích:</strong> ${answer.explanation ? answer.explanation : 'Không có giải thích'}</p>
          </li>
        `;
    });
    return html;
}

// Gọi hàm search khi trang được tải
search();
