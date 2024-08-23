 // Giả sử các giá trị ban đầu
 let score = 20;
 let secretNumber = 13;

 // Chọn các phần tử
 const againBtn = document.querySelector('.again');
 const checkBtn = document.querySelector('.check');
 const message = document.querySelector('.message');
 const number = document.querySelector('.number');
 const scoreLabel = document.querySelector('.score');
 const guessInput = document.querySelector('.guess');
 const body = document.querySelector('body');

 // Trình lắng nghe sự kiện cho nút 'check'
 checkBtn.addEventListener('click', function() {
     const guess = Number(guessInput.value);

     // Khi không có đoán
     if (!guess) {
         message.textContent = 'No number!';
     }
     // Khi đoán đúng
     else if (guess === secretNumber) {
         message.textContent = 'Correct number!';
         number.textContent = secretNumber;
         body.style.backgroundColor = '#60b347';
         number.style.width = '30rem';
     }
     // Khi đoán sai
     else {
         if (score > 1) {
             message.textContent = guess > secretNumber ? 'Too high' : 'Too low';
             score--;
             scoreLabel.textContent = `Score: ${score}`;

         } else {
             message.textContent = 'You lost the game!';
             scoreLabel.textContent = `Score: 0`;
             number.textContent = secretNumber;
         }
     }
 });

 // Trình lắng nghe sự kiện cho nút 'again'
 againBtn.addEventListener('click', function() {
     // Khôi phục giá trị ban đầu
     score = 20;
     secretNumber = Math.trunc(Math.random() * 20) + 1;

     // Khôi phục điều kiện ban đầu
     message.textContent = 'Start guessing...';
     number.textContent = '?'; 
     scoreLabel.textContent = `Score: ${score}`;
     guessInput.value = '';

     // Khôi phục các kiểu dáng
     body.style.backgroundColor = '#222';
     number.style.width = '15rem';
 });