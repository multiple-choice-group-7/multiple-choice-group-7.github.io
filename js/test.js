import ToastManager from './toast.js';
import { formatTime, formatDateTimeCurrent } from './utils.js';

const questions = [
    {
        question: "What is the capital of India?",
        mark: 1,
        answers: [
            { text: "A. Paris", correct: true },
            { text: "B. Berlin", correct: false },
            { text: "C. New Delhi", correct: false },
            { text: "D. Rome", correct: false },
        ],
    },
    {
        question: "Which planet is known as the Red Planet?",
        mark: 1,
        answers: [
            { text: "A. Mars", correct: true },
            { text: "B. Venus", correct: false },
            { text: "C. Jupiter", correct: false },
            { text: "D. Saturn", correct: false },
        ],
    },
    {
        question: "What is the largest mammal in the world?",
        mark: 1,
        answers: [
            { text: "A. Elephant", correct: false },
            { text: "B. Blue Whale", correct: true },
            { text: "C. Giraffe", correct: false },
            { text: "D. Gorilla", correct: false },
        ],
    },
    {
        question: "What is the Admin name of Viral Coder Channel?",
        mark: 1,
        answers: [
            { text: "A. Binod", correct: false },
            { text: "B. Mukesh", correct: true },
            { text: "C. Mukul", correct: false },
            { text: "D. Kohli", correct: false },
        ],
    },
    {
        question: "What is the national game of India?",
        mark: 1,
        answers: [
            { text: "A. ricket", correct: false },
            { text: "B. Hockey", correct: true },
            { text: "C. Football", correct: false },
            { text: "D. Chess", correct: false },
        ],
    },
    {
        question: "What is the capital of France?",
        mark: 1,
        answers: [
            { text: "A. Paris", correct: true },
            { text: "B. Berlin", correct: false },
            { text: "C. New Delhi", correct: false },
            { text: "D. Rome", correct: false },
        ]
    },
    {
        question: "What is the capital of Japan?",
        mark: 1,
        answers: [
            { text: "A. Paris", correct: false },
            { text: "B. Berlin", correct: false },
            { text: "C. Tokyo", correct: true },
            { text: "D. Rome", correct: false },
        ]
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        mark: 1,
        answers: [
            { text: "A. China", correct: false },
            { text: "B. Japan", correct: true },
            { text: "C. Korea", correct: false },
            { text: "D. Vietnam", correct: false },
        ]
    },
    {
        question: "What is the national flower of Japan?",
        mark: 1,
        answers: [
            { text: "A. Cherry Blossom", correct: true },
            { text: "B. Rose", correct: false },
            { text: "C. Sunflower", correct: false },
            { text: "D. Lotus", correct: false },
        ]
    },
    {
        question: "What is the national bird of Japan?",
        mark: 1,
        answers: [
            { text: "A. Pigeon", correct: false },
            { text: "B. Sparrow", correct: false },
            { text: "C. Crane", correct: true },
            { text: "D. Peacock", correct: false },
        ]
    },
  ];

//   tạo mảng chứa các lựa chọn của người dùng (măc định là -1, tức là chưa chọn gì cả) và có độ dài bằng số lượng câu hỏi
const userChoices = Array(questions.length).fill(-1);

const listExam = document.getElementById('list-exam');
const optionsElement = document.getElementById('options');
const countdownElement = document.getElementById('countdown');

const totalTime = 60*30; // Thời gian làm bài, tính theo giây
let timeLeft = totalTime;
let startedTime;

// Đổi màu câu hỏi trong thẻ có id list-exam khi được bấm vào
export function updateColor(opt, id) {
    const question = document.getElementById(`question-${id}`);
    // add class to the clicked question and remove any existing classes from the another question
    question.classList.add('active');
    for (let i = 1; i <= questions.length; i++) {
        if (i !== id) {
            const anotherQuestion = document.getElementById(`question-${i}`);
            anotherQuestion.classList.remove('active');
        }
    }

    // add class is-chosen to the answer that is selected
    const questionNum = document.querySelectorAll(`#exam-question-${id}-choice`);
    questionNum.forEach((question, index) => {
        const spanOption = question.querySelector('.el-radio__input span');
        const inputOption = question.querySelector('.el-radio__input input');
        const pOption = question.querySelector('p');
        if(opt === index) {
            pOption.classList.add('is-chosen');
            pOption.classList.add('fw-bold');
            spanOption.classList.add('el-radio__inner');
            inputOption.classList.add('opacity-0');
        } else {
            pOption.classList.remove('is-chosen');
            pOption.classList.remove('fw-bold');
            spanOption.classList.remove('el-radio__inner');
            inputOption.classList.remove('opacity-0');
        }
    });
}

// Hiển thị toàn bộ câu hỏi và các đáp án có thể nhấn chọn
function displayAllQuestions() {
    questions.forEach((question, index) => {
        const id = index + 1;

        //   onclick="updateColor(${id},null)"
        // Hiển thị câu hỏi trong bảng thông tin bài thi
        const questionNum = `<a class="list-group-item list-group-item-action col-sm-4" id="question-${id}" href="#exam-question-${id}">${id}</a>`;
        listExam.innerHTML += questionNum;

        // Hiển thị câu hỏi và các đáp án chi tiết
        const questionElement = document.createElement('div');
        questionElement.className = 'd-flex flex-row justify-content-space-around align-items-start exam-question gap-3 mb-3';
        questionElement.id = 'exam-question-' + id;


        // Đổi điểm từ số sang số thập phân có 2 chữ số sau dấu phẩy
        const mark = question.mark.toFixed(2);

        // Hiển thị Số thứ tự câu hỏi và cờ đánh dấu câu hỏi
        const questionNumElement = document.createElement('div');
        questionNumElement.className = 'col-sm-2 exam-question-num';
        questionNumElement.innerHTML = `<div class="d-flex flex-row justify-content-start align-items-end">
                                            <p class="mb-2 fw-bold">Question</p>
                                            <h3 class="mb-2 mx-1"> ${id}</h3>
                                        </div>
                                        <p>Not yet answered</p>
                                        <p>Marked out of ${mark}</p>
                                        <div id="mark-question-${id}" class="exam-question-flag d-flex flex-row justify-content-start align-items-center" onclick="flagQuestion(${id})">
                                            <i class="far fa-flag"></i>
                                            <p class="flag-content">Flag question</p>
                                        </div>`;
        questionElement.appendChild(questionNumElement);

        // Hiển thị nội dung câu hỏi và các đáp án
        const questionContent = document.createElement('div');
        questionContent.className = 'col-sm-10 exam-question-content';

        questionContent.innerHTML = `<div class="exam-question-tilte">
                                        <h3>${question.question}</h3>
                                     </div>`;
        const answers = document.createElement('div');
        answers.className = 'exam-question-answers';
        question.answers.forEach((option, index) => {
            answers.innerHTML += `<div class="exam-question-answer d-flex flex-row justify-content-start align-items-center" id="exam-question-${id}-choice">
                                        <div class="el-radio__input d-flex flex-row align-item-center">
                                            <span></span>
                                            <input type="radio" name="exam-question-${id}-choice" value="${index}" onclick="selectOption(${index}, ${id})">
                                        </div>
                                        <p>${option.text}</p>
                                  </div>`;
        });
        questionContent.appendChild(answers);
        questionElement.appendChild(questionContent);
        optionsElement.appendChild(questionElement);
    });
}

// Chọn lựa chọn
export function selectOption(option, idQuestion) {
  // Xử lý lựa chọn ở đây (nếu cần)
  updateColor(option, idQuestion);
  userChoices[idQuestion-1] = option;
}

// Xóa lựa chọn
export function clearOption(idQuestion) {
  // Xóa tick chọn trong input radio
    const question = document.getElementById(`exam-question-${idQuestion}`);
    const options = question.querySelectorAll('input');
    options.forEach((option) => {
        option.checked = false;
    });
    updateColor(idQuestion);
}

// Đánh dấu câu hỏi đồng thời thay đổi nội dung đánh dấu và cờ đánh dấu và thay đổi hàm xử lý khi click
export function flagQuestion(id) {
    const markQuestion = document.getElementById(`mark-question-${id}`);
    const question = document.getElementById(`question-${id}`);

    // Thay đổi icon sang <i class="fa-solid fa-flag" style="color: #ff0000;"></i>
    const flagIcon = markQuestion.querySelector('i');
    flagIcon.className = 'fa-solid fa-flag';
    flagIcon.style.color = '#ff0000';

    // Thay đổi nội dung và thay đổi hàm xử lý khi click 
    const flagContent = markQuestion.querySelector('.flag-content');
    flagContent.textContent = 'Remove flag';
    question.classList.add('flagged');
    markQuestion.setAttribute('onclick', `unflagQuestion(${id})`);
}

// Xóa đánh dấu câu hỏi đồng thời thay đổi nội dung đánh dấu và cờ đánh dấu
export function unflagQuestion(id) {
    const markQuestion = document.getElementById(`mark-question-${id}`);
    const question = document.getElementById(`question-${id}`);

    // Thay đổi icon sang <i class="far fa-flag"></i>
    const flagIcon = markQuestion.querySelector('i');
    flagIcon.className = 'far fa-flag';
    flagIcon.style.color = '#86c3b7';

    // Thay đổi nội dung và thay đổi hàm xử lý khi click 
    const flagContent = markQuestion.querySelector('.flag-content');
    flagContent.textContent = 'Flag question';
    question.classList.remove('flagged');
    markQuestion.setAttribute('onclick', `flagQuestion(${id})`);
}

// Bắt đầu bộ đếm thời gian
function startedTimer() {
    startedTime = formatDateTimeCurrent();
    const timerInterval = setInterval(() => {
        timeLeft--;
        countdownElement.textContent = formatTime(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            submitExam();
        }
    }, 1000);
}


// Gửi bài làm
export const submitExam = () => {
    const finishedTime = formatDateTimeCurrent();
    const time = new Date(timeLeft * 1000);
    const result = {
        studentId: 'B21DCCN123',
        startedTime: startedTime,
        finishedTime: finishedTime,
        timeLeft: totalTime-timeLeft,
        totalTime: totalTime,
        questions: questions,
        userChoices: userChoices
    }
    localStorage.setItem('result', JSON.stringify(result));
    const toastManager = new ToastManager();
    toastManager.createToastInRedirectedPage('success', 'Submitted exam successfully!', 'result.html');
    // setTimeout(() => {
    //     window.location.href = 'result.html';
    // }, 500);
}

// Khởi động bài thi
 export function startExam() {
    // displayQuestion();
    displayAllQuestions();
    startedTimer();
}

// Bắt đầu bài thi khi trang được tải
startExam();
