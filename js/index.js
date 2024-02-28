const exams = [
    { name: "Luyện tập", status: "free" },
    { name: "Giữa kỳ", status: "timed" },
    { name: "Cuối kỳ", status: "timed" },
    // Thêm các kỳ thi khác vào đây
  ];
  
  const examList = document.getElementById('examList');
  const searchInput = document.getElementById('searchInput');
  const filterSelect = document.getElementById('filterSelect');
  
  // Hiển thị danh sách kỳ thi
  function displayExams(examsToShow) {
    examList.innerHTML = '';
    examsToShow.forEach(exam => {
      const examItem = document.createElement('div');
      examItem.classList.add('exam-item');
      examItem.innerHTML = `
        <h3>${exam.name}</h3>
        <p>Status: ${exam.status}</p>
        <button onclick="startExam('${exam.name}')">Bắt đầu làm</button>
      `;
      examList.appendChild(examItem);
    });
  }
  
  // Tìm kiếm kỳ thi
  function searchExams(query) {
    const filteredExams = exams.filter(exam =>
      exam.name.toLowerCase().includes(query.toLowerCase())
    );
    displayExams(filteredExams);
  }
  
  // Lọc kỳ thi theo trạng thái
  function filterExams(status) {
    if (status === 'all') {
      displayExams(exams);
    } else {
      const filteredExams = exams.filter(exam => exam.status === status);
      displayExams(filteredExams);
    }
  }
  
  // Bắt đầu làm bài thi
  function startExam(examName) {
    // Redirect hoặc thực hiện hành động khởi đầu bài thi
    alert(`Bắt đầu làm bài thi: ${examName}`);
  }
  
  // Sự kiện tìm kiếm
  searchInput.addEventListener('input', function() {
    searchExams(this.value);
  });
  
  // Sự kiện lọc
  filterSelect.addEventListener('change', function() {
    filterExams(this.value);
  });
  
  // Hiển thị danh sách kỳ thi mặc định khi trang được tải
  displayExams(exams);
  