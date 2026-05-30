# ANSWERS — PBT_07

## PHẦN A — KIỂM TRA ĐỌC HIỂU

### Câu A1 — var / let / const (dự đoán + giải thích)
- Đoạn 1:
  - Dự đoán: In `undefined` rồi gán `x = 5` (do hoisting của `var`).
  - Giải thích: `var x` được hoisted (khai báo lên trên) nhưng giá trị gán xảy ra sau `console.log`.

- Đoạn 2:
  - Dự đoán: Báo `ReferenceError` (temporal dead zone).
  - Giải thích: `let` không được hoisted theo cách cho phép truy cập trước khi gán.

- Đoạn 3:
  - Dự đoán: Khi cố gán lại `const z` sẽ ném `TypeError`.
  - Giải thích: `const` không thể tái gán; nhưng có thể thay đổi nội dung object/array.

- Đoạn 4:
  - Dự đoán: In `[1,2,3,4]` — `arr.push(4)` hợp lệ với `const` vì chỉ thay đổi nội dung.

- Đoạn 5:
  - Dự đoán: In `Trong block: 2` rồi `Ngoài block: 1` — `let` có scope block.

### Câu A2 — Data Types & Coercion (dự đoán và giải thích)
- Kết quả dự đoán:
  - `typeof null` => "object"
  - `typeof undefined` => "undefined"
  - `typeof NaN` => "number"
  - `"5" + 3` => "53"
  - `"5" - 3` => 2
  - `"5" * "3"` => 15
  - `true + true` => 2
  - `[] + []` => "" (chuỗi rỗng)
  - `[] + {}` => "[object Object]" hoặc "[object Object]" (tuỳ môi trường parsing của `{}` như block)
  - `{ } + []` => 0 hoặc "[object Object]" (kết quả phụ thuộc cách JS parse `{}` khi đứng đầu dòng)

Giải thích cho `"5" + 3` vs `"5" - 3`:
  - Toán tử `+` nếu có một operand là string sẽ thực hiện concatenation (chuỗi).
  - Các toán tử số học khác (`-`, `*`, `/`) ép cả hai operand về number, nên `"5" - 3` => 2.

### Câu A3 — So sánh `==` vs `===` (dự đoán)
- `5 == "5"` => true
- `5 === "5"` => false
- `null == undefined` => true
- `null === undefined` => false
- `NaN == NaN` => false
- `0 == false` => true
- `0 === false` => false
- `"" == false` => true

Quy tắc: Nên dùng `===` (strict equality) để tránh bất ngờ do type coercion.

### Câu A4 — Truthy & Falsy
- Các giá trị Falsy trong JS: `false`, `0`, `-0`, `0n` (BigInt zero), `""` (empty string), `null`, `undefined`, `NaN`.
- Dự đoán cho các if:
  - `if ("0")` => In (truthy)
  - `if ("")` => Không in (falsy)
  - `if ([])` => In (array rỗng là truthy)
  - `if ({})` => In (object rỗng là truthy)
  - `if (null)` => Không in
  - `if (0)` => Không in
  - `if (-1)` => In (non-zero là truthy)
  - `if (" ")` => In (chuỗi chứa space là truthy)

### Câu A5 — Template Literals (chuyển đổi)
- Cách 1:
  - `var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;
- Cách 2:
  - `var url = `https://api.example.com/users/${userId}/orders?page=${page}`;
- Cách 3:
  - `var html = `<div class="card">\n  <h2>${title}</h2>\n  <p>${description}</p>\n  <span>Giá: ${price}đ</span>\n</div>`;`

## PHẦN B — THỰC HÀNH CODE

Tôi đã tạo các file code: `calculator.js`, `student_data.js`, `guess_number.html` + `guess.js`, `fizzbuzz.js`.

- **B1 (`calculator.js`)**: Hàm `calculate` đã cài đặt; kết quả mong đợi của test trong file:
  - `calculate(10, "+", 5)` -> `15`
  - `calculate(10, "/", 0)` -> `Lỗi: Không thể chia cho 0`
  - `calculate(10, "^", 5)` -> `Lỗi: Operator '^' không hợp lệ`
  - `calculate("abc", "+", 5)` -> `Lỗi: Input không phải số`
  - `calculate(2, "**", 10)` -> `1024`

- **B2 (`student_data.js`)**: File in bảng, đếm xếp loại, SV cao/ thấp, điểm TB môn và theo giới tính. (Mở file và chạy `node PBT_07/student_data.js` để xem bảng đầy đủ.)

- **B3 (`guess_number.html` + `guess.js`)**: Game dùng `prompt`/`alert`, giới hạn 7 lần, kiểm tra input, cảnh báo khi đoán trùng.

- **B4 (`fizzbuzz.js`)**: `classicFizzBuzz()` và `customFizzBuzz(n, rules)` đã cài.

> Lưu ý: Môi trường hiện tại không có `node` nên tôi không thể chạy script ở đây; bạn chạy các lệnh sau trên máy của bạn và chụp ảnh console:

```bash
cd d:/session_01_html_css
node PBT_07/var_let_const.js
node PBT_07/calculator.js
node PBT_07/student_data.js
node PBT_07/fizzbuzz.js
node PBT_07/restaurant_bill.js
```

## PHẦN C — SUY LUẬN

### C1 — Debug JavaScript (liệt kê lỗi & sửa)
Mã gốc có các lỗi chính sau:
1. `tinhGiaGiamGia` nhận `giaBan` là string trong test (`"100000"`) — cần convert sang Number.
2. Thiếu dấu `;` (không bắt buộc nhưng nên sửa).
3. `if (giaSauGiam = 0)` — dùng phép gán `=` thay vì so sánh `===`.
4. Khi `phanTramGiam` ngoài 0..100, hàm trả về chuỗi lỗi nhưng test vẫn in; xử lý hợp lý.
5. `setTimeout` trong vòng lặp dùng `var i` gây capture cùng `i` — cần `let i`.
6. `console.log("Item " + i)` sẽ in `5` cho tất cả vì `var` — sửa sang `let` để mỗi callback có giá trị riêng.

Sửa mẫu (tối giản):
```javascript
function tinhGiaGiamGia(giaBan, phanTramGiam) {
  const price = Number(giaBan);
  if (Number.isNaN(price)) return 'Giá không hợp lệ';
  if (phanTramGiam < 0 || phanTramGiam > 100) return 'Phần trăm giảm không hợp lệ';

  const giamGia = price * phanTramGiam / 100;
  const giaSauGiam = price - giamGia;
  if (giaSauGiam === 0) console.log('Sản phẩm miễn phí!');
  return giaSauGiam;
}

// Sử dụng let trong vòng lặp
for (let i = 0; i < 5; i++) {
  setTimeout(function() { console.log('Item ' + i); }, 1000);
}
```

### C2 — Hóa đơn nhà hàng
- Hàm `generateBill(items, options)` đã cài trong `restaurant_bill.js`.
- Ví dụ output (khi chạy với items mẫu và `day: 'Wednesday', tipPercent: 5`):

HÓA ĐƠN NHÀ HÀNG
---------------------------
1. Phở bò      x2  @65.000đ = 130.000đ
2. Trà đá      x3  @5.000đ  = 15.000đ
3. Bún chả     x1  @55.000đ = 55.000đ
---------------------------
Tổng cùng: 200.000đ
Giảm giá (15%): 30.000đ   # (ví dụ: >100k và Wednesday thêm 5%)
VAT (8%): 13.600đ
Tip (5%): 9.320đ
---------------------------
THANH TOÁN: 192.920đ

(Số liệu trên là ví dụ minh họa; chạy file sẽ cho kết quả chính xác theo cách làm tròn.)

## PHẦN D — VIDEO OBS
- Tôi đã chuẩn bị checklist và placeholder `videos/` để bạn lưu video. Việc quay webcam và console bạn làm rồi upload vào `PBT_07/videos/`.

## CHECKLIST NỘP BÀI (cập nhật)
- [x] File `answers.md` — đã cập nhật (bạn cần bổ sung ảnh/video)
- [x] File `var_let_const.js` — đã tạo
- [x] File `calculator.js` — đã tạo
- [x] File `student_data.js` — đã tạo
- [x] File `guess_number.html` + `guess.js` — đã tạo
- [x] File `fizzbuzz.js` — đã tạo
- [x] File `restaurant_bill.js` — đã tạo
- [x] Folder `screenshots/` — đã tạo (chờ ảnh của bạn)
- [ ] Video OBS — bạn thực hiện và thêm vào `PBT_07/videos/`

---
_Ghi chú_: Tôi không có `node` trong môi trường này nên đã đưa dự đoán/đầu ra mẫu vào tài liệu; bạn chạy các lệnh trên máy để kiểm tra và chụp ảnh console, rồi tôi sẽ giúp chèn ảnh vào `answers.md` nếu bạn tải lên.
