// --------------------------Bai1 ----------------------------
// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borussia Dortmund',
//     players: [
//         ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Lewandowski', 'Costa'],
//         ['Burki', 'Piszczek', 'Hummels', 'Akanji', 'Guerreiro', 'Witsel', 'Weigl', 'Sancho', 'Brandt', 'Reus', 'Alcacer']
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Muller', 'Lewandowski', 'Kimmich'],
//     odds: {
//         team1: 1.33,
//         draw: 3.25,
//         team2: 6.5
//     }
// };

// // Tạo mảng cầu thủ cho mỗi đội
// const [players1, players2] = game.players;

// // Tạo biến cho thủ môn và các cầu thủ còn lại
// const [gk, fieldPlayers] = players1;

// // Tạo mảng `allPlayers` chứa tất cả cầu thủ của cả hai đội
// const allPlayers = [players1, players2];

// // Tạo mảng `players1Final` với 3 cầu thủ dự bị
// const players1Final = [players1, 'Thiago', 'Coutinho', 'Perisic'];

// // Tạo các biến cho từng tỷ lệ cược
// const { team1, draw, team2 } = game.odds;

// // Viết hàm `printGoals` để in tên các cầu thủ và số bàn thắng
// function printGoals(players) {
//     console.log(players); // In tên cầu thủ
//     console.log(`Total goals: ${players.length}`); // In tổng số bàn thắng
// }

// // Gọi hàm với các cầu thủ
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(game.scored);

// // 7. Xác định đội bóng có khả năng thắng cao hơn
// const minOdds = Math.min(team1, draw, team2);
// const teamMostLikelyToWin = {
//     [team1]: game.team1,
//     [team2]: game.team2,
//     [draw]: 'Draw'
// }[minOdds];

// console.log(`The team most likely to win is ${teamMostLikelyToWin}`);


// ------------------Bai 2--------------------------
// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borussia Dortmund',
//     players: [
//         ['Neuer', 'Pavard', 'Martinez', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Coman', 'Muller', 'Lewandowski', 'Costa'],
//         ['Burki', 'Piszczek', 'Hummels', 'Akanji', 'Guerreiro', 'Witsel', 'Weigl', 'Sancho', 'Brandt', 'Reus', 'Alcacer']
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Muller', 'Lewandowski', 'Kimmich'],
//     odds: {
//         team1: 1.33,
//         draw: 3.25,
//         team2: 6.5
//     }
// };

// // Loop qua mảng game.scored và in tên cầu thủ cùng số bàn thắng
// for (let i = 0; i < game.scored.length; i++) {
//     console.log(`Goal ${i + 1}: ${game.scored[i]}`);
// }

// // Tính toán và in ra tỷ lệ cược trung bình
// const odds = Object.values(game.odds);
// const averageOdd = odds.reduce((acc, odd) => acc + odd, 0) / odds.length;
// console.log(`Average odd: ${averageOdd.toFixed(2)}`);

// // In ra các tỷ lệ cược theo định dạng yêu cầu
// console.log(`Odd of victory ${game.team1}: ${game.odds.team1}`);
// console.log(`Odd of draw: ${game.odds.draw}`);
// console.log(`Odd of victory ${game.team2}: ${game.odds.team2}`);

// // Tạo đối tượng 'scorers' với số bàn thắng của từng cầu thủ
// const scorers = game.scored.reduce((acc, player) => {
//     acc[player] = (acc[player] || 0) + 1;
//     return acc;
// }, {});

// console.log(scorers);

// -----------------------Bai 3----------------------------
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '� Substitution'],
    [47, '⚽ GOAL'],
    [61, '� Substitution'],
    [64, '� Yellow card'],
    [69, '� Red card'],
    [70, '� Substitution'],
    [72, '� Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '� Yellow card'],
]);

// Tạo mảng các sự kiện khác nhau
const events = [...new Set(gameEvents.values())];
console.log('Different game events:', events);

// Xóa sự kiện thẻ vàng ở phút 64
gameEvents.delete(64);
console.log('Updated game events:', gameEvents);

// Tính toán và in ra thời gian trung bình giữa các sự kiện
const eventsCount = gameEvents.size;
const gameDuration = 90; // 90 phút
const averageInterval = gameDuration / eventsCount;
console.log(`An event happened, on average, every ${averageInterval.toFixed(2)} minutes`);

// Duyệt qua gameEvents và in ra từng sự kiện với thông tin về hiệp một hoặc hiệp hai
for (const [minute, event] of gameEvents) {
    const half = minute <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`[${half}] ${minute}: ${event}`);
}