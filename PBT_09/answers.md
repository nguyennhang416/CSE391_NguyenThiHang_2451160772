# ANSWERS — PBT_09

## PHẦN A — KIỂM TRA ĐỌC HIỂU

### Câu A1 — DOM Tree
- Vẽ DOM tree cho cấu trúc HTML đã cho.
- Query selectors:
  - Chọn thẻ `<h1>`: `document.querySelector('h1')`
  - Chọn input trong form: `document.querySelector('#todoForm input')`
  - Chọn tất cả `.todo-item`: `document.querySelectorAll('.todo-item')`
  - Chọn link đang active: `document.querySelector('nav a.active')`
  - Chọn `<li>` đầu tiên trong `#todoList`: `document.querySelector('#todoList li')`
  - Chọn tất cả `<a>` bên trong `<nav>`: `document.querySelectorAll('nav a')`

### Câu A2 — innerHTML vs textContent
- `textContent` chỉ lấy/nội dung text thuần, không parse HTML.
- `innerHTML` có thể thêm HTML và có thể gây XSS nếu chèn dữ liệu người dùng không lọc.
- Sửa code nguy hiểm bằng cách dùng `textContent` hoặc sanitize input trước khi gán.

### Câu A3 — Event Bubbling
- Khi click vào button, thứ tự output là:
  1. `BUTTON`
  2. `INNER`
  3. `OUTER`
- Nếu sử dụng `e.stopPropagation()` trong handler button, output chỉ còn:
  1. `BUTTON`

## PHẦN C — DEBUG & PHÂN TÍCH

### Câu C1
- Sửa lỗi event listener `addEventListener('onclick', ...)` thành `'click'`.
- Sửa `countDisplay = count;` thành `countDisplay.textContent = count;`.
- Sửa `item.remove;` thành `item.remove();`.
- Sửa `localStorage.getItem('count')` trả về string và cần parse number.
- Sửa `countDisplay.innerHTML` có thể dùng `textContent`.
- Sửa các lỗi DOM selector nếu thiếu phần tử.
- Sửa hàm `deleteHistory` dùng `element.remove()`.

### Câu C2
- Bind event lên từng element là xấu vì tạo nhiều listener, tốn bộ nhớ và giảm tốc độ.
- Event Delegation dùng 1 listener duy nhất trên container và xử lý `event.target`.
- `DocumentFragment` dựng DOM ngoài bộ đếm, append một lần giúp giảm reflow.

---

