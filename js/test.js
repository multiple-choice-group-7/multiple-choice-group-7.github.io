const questions = [
    {
        question: "Câu hỏi 1: Đâu là ngôn ngữ lập trình phổ biến nhất hiện nay?",
        options: ["JavaScript", "Python", "Java", "C"],
        answer: "JavaScript"
    },
    {
        question: "Câu hỏi 2: HTML là viết tắt của từ gì?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Markup Language"],
        answer: "Hyper Text Markup Language"
    }
    // Thêm các câu hỏi khác vào đây
];

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const countdownElement = document.getElementById('countdown');
const submitBtn = document.getElementById('submitBtn');
const messageElement = document.getElementById('message');

let currentQuestionIndex = 0;
const totalTime = 60; // Thời gian làm bài, tính theo giây
let timeLeft = totalTime;

// Hiển thị câu hỏi và lựa chọn
function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.textContent = option;
        optionBtn.onclick = () => selectOption(option);
        optionsElement.appendChild(optionBtn);
    });
}

// Chọn lựa chọn
function selectOption(option) {
  // Xử lý lựa chọn ở đây (nếu cần)
}

// Bắt đầu bộ đếm thời gian
function startTimer() {
    const timerInterval = setInterval(() => {
        timeLeft--;
        countdownElement.textContent = formatTime(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            countdownElement.textContent = 'Hết giờ!';
            submitExam();
        }
    }, 1000);
}

// Gửi bài làm
function submitExam() {
    // Xử lý gửi bài ở đây
    // Ví dụ:
    setTimeout(() => {
        window.location.href = 'viewResult.html';
    }, 5000)
    const currentQuestion = questions[currentQuestionIndex];
    messageElement.textContent = 'Bài thi đã được nộp. Kết quả sẽ được thông báo sau.';
    submitBtn.disabled = true;
}

// Format thời gian
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

// Khởi động bài thi
function startExam() {
    displayQuestion();
    startTimer();
}

// Bắt đầu bài thi khi trang được tải
startExam();
