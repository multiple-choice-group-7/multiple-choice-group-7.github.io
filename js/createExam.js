// Xử lý khi form được submit
document.getElementById('examForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const examData = {};
    const formData = new FormData(this);
    formData.forEach((value, key) => {
        examData[key] = value;
    });
    // Gửi dữ liệu đến backend hoặc xử lý dữ liệu ở đây
    console.log(examData);
});

// export const ans = examData;

// Hủy và quay lại trang trước
function cancel() {
    window.history.back();
}

