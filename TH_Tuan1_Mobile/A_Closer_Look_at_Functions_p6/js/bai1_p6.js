// Đối tượng poll chứa câu hỏi, tùy chọn và số lượng câu trả lời
const poll = {
        question: "What is your favourite programming language?",
        options: ["JavaScript", "Python", "Rust", "C++"], // Đã xóa chỉ số từ mảng options
        answers: new Array(4).fill(0), // Tạo mảng answers với 4 phần tử, mỗi phần tử có giá trị 0

        // Phương thức đăng ký câu trả lời mới
        registerNewAnswer() {
            // Hiển thị prompt cho người dùng chọn tùy chọn
            const input = prompt(`${this.question}\n${this.options.map((opt, i) => `${i}: ${opt}`).join('\n')}\n(Write option number)`);
      
      // Chuyển đổi đầu vào thành số và kiểm tra tính hợp lệ
      const answer = Number(input);
      if (Number.isInteger(answer) && answer >= 0 && answer < this.answers.length) {
        this.answers[answer]++;
        this.displayResults(); // Gọi phương thức displayResults sau khi cập nhật câu trả lời
      } else {
        console.log('Invalid option. Please enter a number corresponding to one of the options.');
      }
    },
  
    // Phương thức hiển thị kết quả khảo sát
    displayResults(type = 'array') {
      if (type === 'string') {
        console.log(`Poll results are ${this.answers.join(', ')}`);
      } else {
        console.log(this.answers);
      }
    }
  };
  
  // Thêm sự kiện click cho nút "Answer poll"
  document.getElementById('answerPoll').addEventListener('click', () => {
    poll.registerNewAnswer();
  });
  
  // Dữ liệu thử nghiệm để kiểm tra
  const testData1 = [5, 2, 3];
  const testData2 = [1, 5, 3, 9, 6, 1];
  
  // Phương thức để hiển thị kết quả thử nghiệm
  function displayTestResults(data, type = 'array') {
    if (type === 'string') {
      console.log(`Poll results are ${data.join(', ')}`);
    } else {
      console.log(data);
    }
  }
  
  // Gọi phương thức với dữ liệu thử nghiệm
  displayTestResults(testData1);
  displayTestResults(testData2, 'string');