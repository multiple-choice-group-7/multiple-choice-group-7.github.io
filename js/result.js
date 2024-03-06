import { formatTime } from "./utils.js";

const listExam = document.getElementById('list-exam');
const optionsElement = document.getElementById('options');

document.addEventListener("DOMContentLoaded", function () {
    const displayRes = displayResult();
    const resultTableBody = document.getElementById("resultTableBody");

    // Hiển thị thông tin sinh viên
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${displayRes.studentId}</td>
        <td>${displayRes.startedTime}</td>
        <td>${displayRes.finishedTime}</td>
        <td>${formatTime(displayRes.timeSpent)}</td>
        <td>${displayRes.totalQuestions}</td>
        <td>${displayRes.correctAnswers}</td>
        <td>${displayRes.mark}</td>
        <td>${displayRes.mark >= 5 ? 'Pass' : 'Failed'}</td>
    `;
    resultTableBody.appendChild(row);
});


// Lấy dư liệu từ localStorage
function getLocalStorageData() {
    if(!localStorage.getItem('result')) return null;
    const data = localStorage.getItem('result');
    return JSON.parse(data);
}

// Tính toán điểm số
function calculateScore(correctAnswers, totalQuestions) {
    return (correctAnswers / totalQuestions) * 10; // Giả sử mỗi câu đúng được 10 điểm
}

// Tính tổng số điểm của bài thi sau khi hoàn thành
function calculateTotalCorrectAnswer(userChoices, questions) {
    const checkLst = Array(userChoices.length).fill(-1);
    let totalMark = 0;

    for(let j = 0; j < questions.length; j++) {
        if(userChoices[j] === -1) continue;
        for(let i = 0; i < questions[j].answers.length; i++) {
            if (questions[j].answers[i].correct) {
                if (userChoices[j] === i) {
                    checkLst[j] = true;
                    totalMark += questions[j].mark;
                    break;
                } else {
                    checkLst[j] = false;
                }
            }
        }
    };

    return {totalMark: totalMark, checkLst: checkLst};
}

// Hiển thị chi tiết câu trả lời
function displayAnswerDetails(questions, userChoices, checkCorrectAnswer) {
    console.log(checkCorrectAnswer);
    console.log(userChoices);
    questions.forEach((question, index) => {
        const id = index + 1;
        let checkClass = 'notSelected';
        if (checkCorrectAnswer[index] === true) {
            checkClass = 'correct';
        } else if(checkCorrectAnswer[index] === false) {
            checkClass = 'incorrect';
        }

        // Hiển thị câu hỏi trong bảng thông tin bài thi
        const questionNum = `<a class="list-group-item list-group-item-action col-sm-4 ${checkClass}" id="question-${id}" href="#exam-question-${id}">${id}</a>`;
        listExam.innerHTML += questionNum;

        // Hiển thị câu hỏi và các đáp án chi tiết
        const questionElement = document.createElement('div');
        questionElement.className = 'd-flex flex-row justify-content-space-around align-items-start exam-question gap-3 mb-3';
        questionElement.id = 'exam-question-' + id;


        // Đổi điểm từ số sang số thập phân có 2 chữ số sau dấu phẩy
        const mark = question.mark.toFixed(2);

        // Hiển thị Số thứ tự câu hỏi và cờ đánh dấu câu hỏi
        let pSelected = 'Not yet answered';
        if(checkCorrectAnswer[index] === true) {
            pSelected = 'Correct answer';
        } else if(checkCorrectAnswer[index] === false) {
            pSelected = 'Wrong answer';
        }
        const questionNumElement = document.createElement('div');
        questionNumElement.className = 'col-sm-2 exam-question-num';
        questionNumElement.innerHTML = `<div class="d-flex flex-row justify-content-start align-items-end">
                                            <p class="mb-2 fw-bold">Question</p>
                                            <h3 class="mb-2 mx-1"> ${id}</h3>
                                        </div>
                                        <p>${pSelected}</p>
                                        <p>Marked out of ${mark}</p>`;
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
            let ansChoiceClass = '';
            if (userChoices[id - 1] === index) {
                ansChoiceClass = 'ansChosen';
            }
            answers.innerHTML += `<div class="exam-question-answer ${ansChoiceClass} d-flex flex-row justify-content-start align-items-center" id="exam-question-${id}-choice">
                                        <p>${option.text}</p>
                                  </div>`;
        });
        answers.innerHTML += `<div class="">
                                <i class="fa-solid fa-check"></i>
                                <i class="fa-solid fa-xmark"></i>
                                <p>Clear my choice</p>
                                </div>`;
        questionContent.appendChild(answers);
        questionElement.appendChild(questionContent);
        optionsElement.appendChild(questionElement);
    });
}

// Hiển thị kết quả khi trang được tải
function displayResult() {
    const data = getLocalStorageData();
    if (!data) return;
    const {studentId, startedTime, finishedTime, timeLeft, totalTime, questions, userChoices} = data;
    const totalQuestions = questions.length;
    const correctAnswers = calculateTotalCorrectAnswer(userChoices, questions).totalMark;
    const mark = calculateScore(correctAnswers, totalQuestions);

    displayAnswerDetails(questions, userChoices, calculateTotalCorrectAnswer(userChoices, questions).checkLst);

    return {
        studentId,
        startedTime,
        finishedTime,
        timeSpent: timeLeft,
        totalQuestions,
        correctAnswers,
        mark
    };
}

