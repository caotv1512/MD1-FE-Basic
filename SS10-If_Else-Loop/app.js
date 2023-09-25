// =================== Câu điều kiện ================
// Cấu trúc:
// if (condition == điều kiện ĐÚNG) {
//   // logic code được thực thi
// }
// const code = 123;
// if (code == 133) {
//     console.log("Chúc mừng bạn đã chúng thưởng, mời bạn nhận thưởng rồi ra về ");
// }
// console.log('Hẹn gặp bạn lần sau....');

// =============Điều kiện rẽ nhánh if else===============
// Cấu trúc:
// if(condition){
//     // logic code được thực thi
// }else{
//     // logic code được thực thi
// }
// const code = '123';
// if (code == 123) {
//     console.log("Chúc mừng bạn đã chúng giải nhất, mời bạn nhận thưởng rồi ra về ");
// } else {
//     console.log('Chúc mừng bạn đã nhận giải khuyến khích');
// }

// =============Điều kiện rẽ nhánh if - else if - else===============
// Cấu trúc:
// if (condition) {
//     // logic code được thực thi
// } else if (condition) {
//     // logic code được thực thi
// } else if (condition) {
//     // logic code được thực thi
// }

// const age = 22;
// if (age < 18) {
//     console.log("Bạn đang ở độ tuổi đi học");
// } else if (age == 18) {
//     console.log("Bạn đã đủ tuổi đi nghĩa vụ");
// } else if (age > 18 && age <= 24) {
//     console.log("Bạn đang đi học đại học đúng honggg");
// } else {
//     console.log("Bạn đã lớn rồi đi kiếm tiền thôiiiiii");
// }

// ===================Điều kiện rẽ nhánh swich case ===============
// Cấu trúc:
// switch (expression) {
//     // Kiểm tra result === value
//     case value1:
//     // Thực thi khối lệnh 1
//     break;
//     case value2:
//     // Thực thi khối lệnh 2
//     break;
//     case valueN:
//     // Thực thi khối lệnh n
//     break;
//     default:
//     // Thực thi khối lệnh khi tất cả các case
// }
// const age = 19;
// switch (age) {
//     // Kiểm tra result === value
//     case 18:
//         console.log("Bạn 18 tuổi");
//         break;
//     case 20:
//         console.log("Bạn 20 tuổi");
//         break;
//     case 22:
//         console.log("Bạn 22 tuổi");
//         break;
//     default:
//         console.log('Bạn không thuộc những tuổi bên trên');
// }

//Cho người dùng nhập vào 1 số .
// Nếu số đó =1 => Hôm nay là thứ 2.
// Nếu số đó =2 => Hôm nay là thứ 3.
// Nếu số đó =3 => Hôm nay là thứ 4.
// Nếu số đó =4 => Hôm nay là thứ 5.
// Nếu số đó =5 => Hôm nay là thứ 6.
// Nếu số đó =6 => Hôm nay là thứ 7.
// Nếu số đó =7 => Hôm nay là Chủ Nhật.
// Nếu số khác => Số bạn nhập vào không hợp lệ

// =================== Vòng lặp================
// Cấu trúc:
// for (initialization, condition, increment) {
//     // logic code được thực thi
// }
// initialization: Giá trị khởi tạo của vòng lặp
// condition: Điều kiện của vòng lặp
// increment: Bước nhảy của vòng lặp || Bước thực thi sau khi vòng lặp được thực hiện.
// for (let i = 0; i < 10; i++) {
//     console.log(10);
// }
// Lần 1: i = 0 ; i < 5 điều kiện đúng
// => thực hiện console.log(i)
// => sau đó i++ => i = 1;
// Lần 2: i = 1 ; i < 5 điều kiện đúng
// => thực hiện console.log(i)
// => sau đó i++ => i = 2;
// Lần 3: i = 2 ; i < 5 điều kiện đúng
// => thực hiện console.log(i)
// => sau đó i++ => i = 3;
// ......
// Lần 6: i = 5; điều kiện sai => dừng vòng lặp

// Cho người dùng nhập vào 1 số.
// In ra tổng của số cộng với từ 1 -> 5
// Ví dụ: nhập vào là 5
// In ra: 5+1 cho đến 5+5

// Cho người dùng nhâp vào 1 số.
// let input = prompt("Enter a number");
// input = Number(input);
// console.log('Input là: ', input);
// for (let i = 1; i <= 5; i++) {
//     console.log(input + i);
// }
// for (i = 0; i <= 10; i++) {
//     console.log(i);
// }

// =============== Loop while============
// Cấu trúc:
// while (condition) {
// -condition : điều kiện
// logic code được thực thi
// }
// - Mục đích sử dụng: vòng vô hạn, không biết trước số lần lặp
// let input = prompt("Enter a number");
// while (input = 5) {
//     console.log(check);
//     break;
// }