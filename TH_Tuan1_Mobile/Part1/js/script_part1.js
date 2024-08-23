//-------------------------------JavaScript Fundamentals – Part 1-------------------------------

// ------Bai 1-------------------

// // Data 1
// let markMass1 = 78;
// let markHeight1 = 1.69;
// let johnMass1 = 92;
// let johnHeight1 = 1.95;

// // Data 2
// let markMass2 = 95;
// let markHeight2 = 1.88;
// let johnMass2 = 85;
// let johnHeight2 = 1.76;

// let markBMI1 = markMass1 / (markHeight1 * markHeight1);
// let johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);

// let markBMI2 = markMass2 / (markHeight2 * markHeight2);
// let johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);

// let markHigherBMI1 = markBMI1 > johnBMI1;
// let markHigherBMI2 = markBMI2 > johnBMI2;

// console.log("Data 1: Chỉ số BMI của Mark cao hơn của John? " + markHigherBMI1);
// console.log("Data 2: Chỉ số BMI của Mark cao hơn của John? " + markHigherBMI2);


// ------------Bai 2---------------
// // Data 1
// let markMass1 = 78;
// let markHeight1 = 1.69;
// let johnMass1 = 92;
// let johnHeight1 = 1.95;

// // Data 2
// let markMass2 = 95;
// let markHeight2 = 1.88;
// let johnMass2 = 85;
// let johnHeight2 = 1.76;

// let markBMI1 = markMass1 / (markHeight1 * markHeight1);
// let johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);

// let markBMI2 = markMass2 / (markHeight2 * markHeight2);
// let johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);

// // SS Data 1
// // Làm tròn 1 chữ số thập phân
// let markBMI1Rounded = markBMI1.toFixed(1);
// let johnBMI1Rounded = johnBMI1.toFixed(1);


// if (markBMI1 > johnBMI1) {
//     console.log(`Data 1: Mark's BMI (${markBMI1Rounded}) is higher than John's (${johnBMI1Rounded})`);
// } else {
//     console.log(`Data 1: John's BMI (${johnBMI1Rounded}) is higher than Mark's (${markBMI1Rounded})`);
// }

// // SS Data 2
// if (markBMI2 > johnBMI2) {
//     console.log(`Data 2: Mark's BMI (${markBMI2.toFixed(1)}) is higher than John's (${johnBMI2.toFixed(1)})`);
// } else {
//     console.log(`Data 2: John's BMI (${johnBMI2.toFixed(1)}) is higher than Mark's (${markBMI2.toFixed(1)})`);
// }


// ------------Bai 3---------------
// // Data 1
// let dolphinsScores1 = [96, 108, 89];
// let koalasScores1 = [88, 91, 110];

// // Data Bonus 1
// let dolphinsBonus1 = [97, 112, 101];
// let koalasBonus1 = [109, 95, 123];

// // Data Bonus 2
// let dolphinsBonus2 = [97, 112, 101];
// let koalasBonus2 = [109, 95, 106];

// // Tính điểm trung bình
// function averageScore(scores) {
//     //reduce tính tổng của mảng với 
//     // a khởi tạo là a = 0 
//     // b là giá trị hiện tại đang được xử lý trong mảng
//     // for(let i = 0; i < scores.length; i++){
//     //      let sum += scores[i];
//     // }
//     let sum = scores.reduce((a, b) => a + b, 0);
//     return sum / scores.length;
// }


// // // So sánh điểm trung bình
// function compareScores(dolphinsScores, koalasScores) {
//     let dolphinsAverage = averageScore(dolphinsScores);
//     let koalasAverage = averageScore(koalasScores);

//     if (dolphinsAverage >= 100 && dolphinsAverage > koalasAverage) {
//         console.log("Dolphins là đội thắng");
//     } else if (koalasAverage >= 100 && koalasAverage > dolphinsAverage) {
//         console.log("Koalas là đội thắng");
//     } else if (dolphinsAverage === koalasAverage && dolphinsAverage >= 100 && koalasAverage >= 100) {
//         console.log("Cả hai đội đều hòa");
//     } else {
//         console.log("Không có đội nào thắng");
//     }
// }

// // Kiểm tra
// compareScores(dolphinsScores1, koalasScores1);
// compareScores(dolphinsBonus1, koalasBonus1);
// compareScores(dolphinsBonus2, koalasBonus2);


// ------------Bai 4---------------
//  Dùng toán tử 3 ngôi

// function calculateTip(bill) {
//     return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
// }

// function print(bill) {
//     console.log(`Tiền hóa đơn là: ${bill}, 
//         Tiền tip là: ${calculateTip(bill)},
//         Tổng tiền là: ${bill + calculateTip(bill)}`);
// }

// // function print(bill) {
// //     console.log("Tiền hóa đơn là: " + bill + ", " +
// //         "Tiền tip là: " + calculateTip(bill) + ", " +
// //         "Tổng tiền là: " + (bill + calculateTip(bill)));
// // }

// print(275);
// print(40);
// print(430);



