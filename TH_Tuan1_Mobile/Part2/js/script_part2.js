//-------------------------------JavaScript Fundamentals – Part 2-------------------------------

// ------------Bai 1---------------

// Tạo arrow function 'calcAverage' để tính trung bình của 3 điểm số
// let calcAverage = (scores) =>{
//     let sum = scores.reduce((a, b) => a + b, 0);
//     return sum / scores.length;
// } ;

// let avgDolphins1 = calcAverage([44, 23, 71]);
// let avgKoalas1 = calcAverage([65, 54, 49]);

// let avgDolphins2 = calcAverage([85, 54, 41]);
// let avgKoalas2 = calcAverage([23, 34, 27]);

// function checkWinner  (avgDolphins, avgKoalas)  {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log('Dolphins thắng ');
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log('Koalas thắng');
//   } else {
//     console.log('Không có đội nào thắng');
//   }
// };

// checkWinner(avgDolphins1, avgKoalas1); 
// checkWinner(avgDolphins2, avgKoalas2); 


// ------------Bai 2---------------

// const calcTip = (bill) => {
//     return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;
// };

// function calcTip(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//   }
// // Kiểm tra hàm với bill = 100  
//   console.log(calcTip(100));

//   //Tạo mảng 'bills'
//   const bills = [125, 555, 44];

// // Tạo mảng 'tips'
// //   const tips = bills.map(calcTip);
// let tips = [];
// for (let i = 0; i < bills.length; i++) {
//     tips.push(calcTip(bills[i]));
// }

// // Tạo mảng 'total'
// const total = bills.map((bill, index) => {
//     return  bill + tips[index]
// });

// // let total = [];
// // for (let i = 0; i < bills.length; i++) {
// //     total.push(bills[i] + tips[i]);
// // }
// console.log('Bills:', bills)
// console.log('Tips:', tips); 
// console.log('Total:', total);


// ------------Bai 3---------------

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height ** 2);// Lũy thừa 2, lũy thừa 3 là height **3
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function() {
//         this.bmi = this.mass / (this.height ** 2);
//         return this.bmi;
//     }
// };
// // Tính toán BMI cho cả hai
// console.log(mark.bmi); //=> undefined

// mark.calcBMI();
// console.log(mark.bmi.toFixed(2)); //=> 27.30
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//     // console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
//     console.log('Mark\'s BMI (' +mark.bmi.toFixed(2)+')  is higher than John\'s ('+john.bmi.toFixed(2)+')!');
// } else if (john.bmi > mark.bmi) {
//     console.log('Jonh\'s BMI (' +john.bmi.toFixed(2)+')  is higher than Mark\'s ('+mark.bmi.toFixed(2)+')!');
// } else {
//     console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi})!`);
// }

// ------------Bai 4---------------

function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
// Tạo mảng 'bills' 10 phần tử
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Tạo 2 mảng 'tips' và 'totals'
const tips = [];
const totals = [];

// Tính toán tips và totals và thêm values vào mảng tương ứng
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    totals.push(bills[i] + tips[i]);
}

// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument
function calcAverage(totals) {
    // let sum = 0;
    // for (let i = 0; i < totals.length; i++) {
    //     sum += totals[i];
    // }
    // return sum / totals.length;
    return totals.reduce((a, b) => a + b, 0) / totals.length;
}

// 4.3. Call the function with the 'totals' array
console.log(calcAverage(totals));



