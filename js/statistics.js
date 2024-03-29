// Dữ liệu mẫu về kết quả thi
let examResults = [
    { exam: "Practice", user: "Nguyễn Văn A", score: 8.5, completed: true },
    { exam: "Practice", user: "Trần Thị B", score: 7.0, completed: true },
    { exam: "Practice", user: "Phạm Văn C", score: 6.5, completed: true },
    { exam: "Mid-term", user: "Nguyễn Văn A", score: 2.0, completed: true },
    { exam: "Mid-term", user: "Trần Thị B", score: 10, completed: true },
    { exam: "Mid-term", user: "Phạm Văn C", score: 8.0, completed: true },
    { exam: "Mid-term", user: "Cao Văn E", score: 5.5, completed: true },
    { exam: "Mid-term", user: "Phạm Hoàng D", score: 8.0, completed: true },
    { exam: "End-term", user: "Nguyễn Văn A", score: 8.0, completed: true },
    { exam: "End-term", user: "Trần Thị B", score: 8.5, completed: true },
    { exam: "End-term", user: "Phạm Văn C", score: 6.0, completed: true },
    { exam: "End-term", user: "Cao Văn E", score: 4.0, completed: true },
    { exam: "End-term", user: "Phạm Hoàng D", score: 9.0, completed: true },
    // Thêm dữ liệu thống kê khác nếu cần
  ];
  
  // fetch('../js/data.json')
  // .then(response => response.json())
  // .then(jsonData => {
  //     const examResults = jsonData;
  //     console.log(jsonData)
  // })
  // .catch(error => console.log(error));

  localStorage.setItem('examResults', JSON.stringify(examResults));
  // Hàm để tạo danh sách kỳ thi và hiển thị bảng thống kê khi trang được tải
  examResults = JSON.parse(localStorage.getItem('examResults'));
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
    headerRow.innerHTML = '<th>STT</th><th>Exam type</th><th>Student</th><th>Score</th><th>Status</th>';
    let count = 1;
  
    filteredResults.forEach(result => {
        const row = table.insertRow();
        row.innerHTML = `<td>${count}</td><td>${result.exam}</td><td>${result.user}</td><td>${result.score}</td><td>${result.completed ? 'Completed' : 'Not completed'}</td>`;
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
  
  // ---------- CHARTS ----------
  
  // BAR CHART
  function getTopCuoiKyUsers() {
    // Filter the exam results to include only "Cuối kỳ" exams
    const cuoiKyResults = examResults.filter(result => result.exam === "Cuối kỳ");
  
    // Sort the filtered results based on the scores in descending order
    cuoiKyResults.sort((a, b) => b.score - a.score);
  
    // Extract the top 5 users
    const top5Users = cuoiKyResults.slice(0, 5);
  
    return top5Users;
  }

  const barChartOptions = {
    series: [
      {
        data: getTopCuoiKyUsers().map(user => user.score),
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
      categories: getTopCuoiKyUsers().map(user => user.user),
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
        text: 'Điểm',
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
  function getTopGiuaKyUser() {
    const TopUser = examResults.filter(result => result.exam === "Giữa kỳ");
    TopUser.sort((a, b) => b.score - a.score);
    const top5Users = TopUser.slice(0, 5);

    return top5Users;
  }

  const areaChartOptions = {
    series: [
      {
        name: 'Giữa kỳ',
        data: getTopGiuaKyUser().map(user => user.score),
      },
      {
        name: 'Cuối kỳ',
        data: getTopCuoiKyUsers().map(user => user.score),
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
    labels: getTopCuoiKyUsers().map(user => user.user),
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
          text: 'Giữa kỳ',
          style: {
            color: '#f5f7ff',
          },
        },
        labels: {
          style: {
            colors: ['#f5f7ff'],
          },
        },
        min:0,
        max:10,
      },
      {
        opposite: true,
        title: {
          text: 'Cuối kỳ',
          style: {
            color: '#f5f7ff',
          },
        },
        labels: {
          style: {
            colors: ['#f5f7ff'],
          },
        },
        min:0,
        max:10,
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
  