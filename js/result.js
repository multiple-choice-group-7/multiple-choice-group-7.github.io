const questions = [
    {
      question: "Câu hỏi 1: Đâu là ngôn ngữ lập trình phổ biến nhất hiện nay?",
      options: ["JavaScript", "Python", "Java", "C"],
      answer: "JavaScript",
      userAnswer: "JavaScript" // Giả sử người dùng chọn đúng câu này
    },
    {
      question: "Câu hỏi 2: HTML là viết tắt của từ gì?",
      options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Tool Markup Language"],
      answer: "Hyper Text Markup Language",
      userAnswer: "Hyper Text Markup Language" // Giả sử người dùng chọn đúng câu này
    }
    // Thêm các câu hỏi khác vào đây
  ];
  
  const resultSummary = document.getElementById('resultSummary');
  const answerDetails = document.getElementById('answerDetails');
  let correctAnswers = 0;
  
  // Hiển thị kết quả tổng quan
  function displayResultSummary() {
    const totalQuestions = questions.length;
    resultSummary.innerHTML = `
      <p>Số câu trả lời đúng: <span id="correctAnswers">${correctAnswers}</span></p>
      <p>Tổng số câu: <span id="totalQuestions">${totalQuestions}</span></p>
      <p>Điểm số: <span id="score">${calculateScore()} / ${totalQuestions}</span></p>
    `;
  }
  
  // Tính toán điểm số
  function calculateScore() {
    return (correctAnswers / questions.length) * 10; // Giả sử mỗi câu đúng được 10 điểm
  }
  
  // Hiển thị chi tiết câu trả lời
  function displayAnswerDetails() {
    answerDetails.innerHTML = '';
    questions.forEach((question, index) => {
      const detailItem = document.createElement('div');
      detailItem.innerHTML = `
        <p><strong>Câu hỏi ${index + 1}:</strong> ${question.question}</p>
        <p><strong>Câu trả lời của bạn:</strong> ${question.userAnswer}</p>
        <p><strong>Đáp án đúng:</strong> ${question.answer}</p>
      `;
      if (question.userAnswer === question.answer) {
        detailItem.classList.add('correct');
      } else {
        detailItem.classList.add('incorrect');
      }
      answerDetails.appendChild(detailItem);
    });
  }
  
  // Tính toán số câu trả lời đúng
  function calculateCorrectAnswers() {
    correctAnswers = questions.reduce((count, question) => {
      if (question.userAnswer === question.answer) {
        return count + 1;
      }
      return count;
    }, 0);
  }
  
  // Hiển thị kết quả khi trang được tải
  displayResultSummary();
  displayAnswerDetails();
  