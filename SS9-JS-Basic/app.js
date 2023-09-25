// alert("Hello 500 ae học lập trình!!!!!");
// ==== Commnet======
// Phím tắt: ctrl + /
// Định nghĩa: Là mô tả hoặc bỏ qua các đoạn code trong javascript.
// Có 2 loại comment: Comment 1 dòng và commet theo khối.
// Comment 1 dòng:  ctrl + /.
// Comment theo khối: / **  */

/** Comment theo khối.*/
// Đây là khai báo biến
// var name = "CaoTV";
// var number = 1;
// - var : variable : Từ khóa khai báo biến.
// - name: Tên biến.
// - "=" : gán giá (dữ liệu) cho biến, phép gán.
// - CaoTV: giá trị của biến.
// alert("Tên tôi là :" + name)

// ===== Kiểu dữ liệu. ===============
// - string : dạng chuỗi => được đặt trong cặp ngoặc đơn '' hoặc ngoặc kép"" .
// - number : dạng số
// - boolean: dạng check (logic): được khai báo bằng giá trị true hoặc false.
// - undefined: dạng giá trị không xác định.
// - null: rỗng : Chẳng có gì cả : ví dụ: var name = ""
// - object

//====== Quy tắc khai báo biến =====
//======= Từ khóa khai báo biến =====
/**
 * - Có 3 từ khóa khai báo biến: var, let, const
 * - var: có thể khai báo lại biến đó, có thể thay đổi giá trị của biến , là biến global.
 * - let: không thể khai báo lại biến, có thể thay đổi giá trị của biến, là biến cục bộ.
 * - const: không thể khai báo lại biến, không thể thay đổi giá trị của biến, là một hằng và là biến cục bộ.
 */

// var name = 'CaoTV'
// var name = 'CaoTV2'
// name = 1111
// name = ''

// let studentName = 'CaoTV';
// studentName = 'CaoTV2';

// const studentName = 'CaoTV';
// studentName = 'CaoTV2';
// alert('My name is ' + studentName)

// ======== Quy tắc đặt tên biến ==============
// - Khi đặt tên biến luôn luôn phải bắt đầu bằng chữ cái.
// - Có 3 cách đặt tên biến chính: camelCase, kebab-case, snake_case
// - camelCase: viết thường chữ cái đầu tên và viết hoa chữ cái đầu tiên của từ tiếp theo.
//   Cộng đồng lập trình khuyên dùng
// - kebab-case: Viết thường tất cả các chữ cái và mỗi từ cách nhau bởi dấu ghệch ngang "-"
// - snake_case: Viết thường tất cả các chữ cái và mỗi từ cách nhau bởi dấu ghệch ngang "_"

// ==== Toán Tử ==============
// Các phép toán tử như: (+, -, *, /, %, **, ++, --)

// const a = 3;
// let b = '2';
// const c = a + b
// const firstName = "Tran";
// const lastName = "Cao";
// const fullName = firstName + " " + lastName
// console.log(fullName);

// =============== Các hàm built in ===============
// - Là các hàm có đươc xây dựng săn bởi javascript.
// -alert, confirm, prompt, console.log -
//     Cấu trúc: tên_hàm + ()

// cons t myName = prompt("Enter your name")
// alert("Hello anh :" + myName + "Ngon Zai")

// === Toán tử: Gán === === === === ===
// Các phép toán tử gán như (=, +=, -=, *=, /=, %=, **=)
// let a = 3;
// let b = 5;
// let c = 4;
// c **= b;
// c = c % b
// console.log("Giá trị của c là: ", c);

// =================Toán tử so sánh ==================
// Các phép toán tử so sánh như: (>, <, >=, <=, ==, !=, ===, !==)
// Đinh nghĩa: Các toán tủ so sánh sẽ trả về kiểu dữ liệu boolean: true, false
// console.log(2 != 2);
// Lưu ý: == chỉ so sánh giá trị của biến
//        === só sánh cả giá trị và kiêu dữ liệu của biến
// const a = 10;
// const b = "10";
// console.log("Giá trị của a là: ", a);
// console.log("Giá trị của b là: ", b);
// console.log(a != b);
// ============= Toán tử logic ============
// Các phép toán tử logic như: (&&, ||, !)
// Đinh nghĩa: Các toán tử logic sẽ trả về kiểu dữ liệu boolean: true, false
// - &&: và. Check điều kiện của cả hai vế đều đúng. Ví dụ : a > b && b > c
// - ||: hoặc. Check điều kiện của một trong hai vế đúng. Ví dụ : a > b || b > c
// - !: Phủ định. Trả về giá trị ngược lại cua tham số truyền vào. Ví dụ:  !a

// console.log(!(6 < 7) || 7 < 6 && 3 > 2 && !(10 < -100));
// false|| false && true && true

// ===================Toán tử 3 ngôi==============.
// Cấu trúc:  điều_kiện ? giá_trị_1 : giá_trị_2
// - Điều kiện đúng sẽ lấy giá trị 1,  ngược lại sẽ lấy giá trị 2

// const a = (3 > 4) ? 10 : 20;
// console.log(a);

// Cho người dùng nhập và một số và in ra số đó là số chẵn hay số lẻ.
// const input = prompt("Enter a number");
// // Số chẵn : %2 == 0
// // Số lẻ : %2 != 0
// const b = (input % 2 == 0) ? "số chẵn" : "số lẻ";
// console.log('Số bạn vừa nhâp vào là :' + b);

// Nhập vào giờ VN nhưng in ra giờ mỹ: Ví dụ: 2 ==> 2am , 14 ==> 2pm.
// const time = (input > 12) ? input - 12 + "pm" : input + "am";
// console.log('Giờ Mỹ là : ', time);

// Bài tập 5: 
// const input = confirm("Bạn đã đủ 18 tuổi chưa!")
// const check = input ? "Đã đủ 18 tuổi" : "Chưa đủ 18 tuổi";
// console.log(check);

// const noti = alert("Chào mừng bạn đến với học viện Rikkei Academy")
// console.log(noti);