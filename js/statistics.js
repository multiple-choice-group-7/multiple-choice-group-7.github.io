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
  // import { ans } from "./result.js";
  // console.log(ans);
  
  // ---------- CHARTS ----------
  
  // BAR CHART
  const barChartOptions = {
    series: [
      {
        data: [10, 8, 6, 4, 2],
        name: 'Products',
      },
    ],
    chart: {
      type: 'bar',
      background: 'transparent',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: '40%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      borderColor: '#55596e',
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      labels: {
        colors: '#f5f7ff',
      },
      show: true,
      position: 'top',
    },
    stroke: {
      colors: ['transparent'],
      show: true,
      width: 2,
    },
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
    xaxis: {
      categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'],
      title: {
        style: {
          color: '#f5f7ff',
        },
      },
      axisBorder: {
        show: true,
        color: '#55596e',
      },
      axisTicks: {
        show: true,
        color: '#55596e',
      },
      labels: {
        style: {
          colors: '#f5f7ff',
        },
      },
    },
    yaxis: {
      title: {
        text: 'Count',
        style: {
          color: '#f5f7ff',
        },
      },
      axisBorder: {
        color: '#55596e',
        show: true,
      },
      axisTicks: {
        color: '#55596e',
        show: true,
      },
      labels: {
        style: {
          colors: '#f5f7ff',
        },
      },
    },
  };
  
  const barChart = new ApexCharts(
    document.querySelector('#bar-chart'),
    barChartOptions
  );
  barChart.render();
  
  // AREA CHART
  const areaChartOptions = {
    series: [
      {
        name: 'Purchase Orders',
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: 'Sales Orders',
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    chart: {
      type: 'area',
      background: 'transparent',
      height: 350,
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ['#00ab57', '#d50000'],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    dataLabels: {
      enabled: false,
    },
    fill: {
      gradient: {
        opacityFrom: 0.4,
        opacityTo: 0.1,
        shadeIntensity: 1,
        stops: [0, 100],
        type: 'vertical',
      },
      type: 'gradient',
    },
    grid: {
      borderColor: '#55596e',
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      labels: {
        colors: '#f5f7ff',
      },
      show: true,
      position: 'top',
    },
    markers: {
      size: 6,
      strokeColors: '#1b2635',
      strokeWidth: 3,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      axisBorder: {
        color: '#55596e',
        show: true,
      },
      axisTicks: {
        color: '#55596e',
        show: true,
      },
      labels: {
        offsetY: 5,
        style: {
          colors: '#f5f7ff',
        },
      },
    },
    yaxis: [
      {
        title: {
          text: 'Purchase Orders',
          style: {
            color: '#f5f7ff',
          },
        },
        labels: {
          style: {
            colors: ['#f5f7ff'],
          },
        },
      },
      {
        opposite: true,
        title: {
          text: 'Sales Orders',
          style: {
            color: '#f5f7ff',
          },
        },
        labels: {
          style: {
            colors: ['#f5f7ff'],
          },
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
  };
  
  const areaChart = new ApexCharts(
    document.querySelector('#area-chart'),
    areaChartOptions
  );
  areaChart.render();
  