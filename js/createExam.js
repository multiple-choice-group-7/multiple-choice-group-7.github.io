// Xử lý khi form được submit
document.getElementById('examForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const examData = {};
    formData.forEach((value, key) => {
      examData[key] = value;
    });
    // Gửi dữ liệu đến backend hoặc xử lý dữ liệu ở đây
    console.log(examData);
  });
  
  // Hủy và quay lại trang trước
  function cancel() {
    window.history.back();
  }
  