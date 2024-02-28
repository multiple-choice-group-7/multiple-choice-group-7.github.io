// Dữ liệu mẫu về kết quả thi
const examResults = [
    { exam: "Luyện tập", user: "Nguyễn Văn A", score: 8.5, completed: true },
    { exam: "Luyện tập", user: "Trần Thị B", score: 7.0, completed: true },
    { exam: "Luyện tập", user: "Phạm Văn C", score: 6.5, completed: true },
    { exam: "Giữa kỳ", user: "Nguyễn Văn A", score: 9.0, completed: true },
    { exam: "Giữa kỳ", user: "Trần Thị B", score: 8.0, completed: true },
    { exam: "Cuối kỳ", user: "Nguyễn Văn A", score: 8.0, completed: true }
    // Thêm dữ liệu thống kê khác nếu cần
  ];
  
  // Hàm để tạo danh sách kỳ thi và hiển thị bảng thống kê khi trang được tải
  function initialize() {
    const examSelect = document.getElementById('examSelect');
    const examOptions = new Set(examResults.map(result => result.exam));
    examOptions.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.textContent = option;
      examSelect.appendChild(optionElement);
    });
  
    examSelect.addEventListener('change', updateStatistics);
    updateStatistics();
  }
  
  // Hàm để cập nhật bảng thống kê dựa trên kỳ thi được chọn
  function updateStatistics() {
    const selectedExam = document.getElementById('examSelect').value;
    const filteredResults = selectedExam === 'all' ? examResults : examResults.filter(result => result.exam === selectedExam);
  
    const statisticsTable = document.getElementById('statisticsTable');
    statisticsTable.innerHTML = '';
  
    if (filteredResults.length === 0) {
      statisticsTable.innerHTML = '<p>Không có kết quả nào.</p>';
      return;
    }
  
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    headerRow.innerHTML = '<th>STT</th><th>Tên kỳ thi</th><th>Tên người dùng</th><th>Điểm số</th><th>Hoàn thành</th>';
    let count = 1;
  
    filteredResults.forEach(result => {
      const row = table.insertRow();
      row.innerHTML = `<td>${count}</td><td>${result.exam}</td><td>${result.user}</td><td>${result.score}</td><td>${result.completed ? 'Đã hoàn thành' : 'Chưa hoàn thành'}</td>`;
      count++;
    });
  
    statisticsTable.appendChild(table);
  }
  
  // Hàm để xuất báo cáo (giả sử xuất ra console)
  function exportReport() {
    console.log('Xuất báo cáo...');
  }
  
  // Gọi hàm initialize khi trang được tải
  initialize();
  