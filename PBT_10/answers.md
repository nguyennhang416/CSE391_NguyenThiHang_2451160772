# PBT_10 — Answers

## A1 — Thứ tự output và giải thích

### Thứ tự output

1. 1 - Start
2. 4 - End
3. 3 - Promise
4. 6 - Promise 2
5. 2 - Timeout 0ms
6. 7 - Nested timeout
7. 5 - Timeout 100ms

### Giải thích

- `console.log("1 - Start")` chạy ngay khi script được thực thi.
- `setTimeout(() => console.log("2 - Timeout 0ms"), 0)` tạo một macrotask và đưa callback vào hàng đợi task, không chạy ngay lập tức.
- `Promise.resolve().then(() => console.log("3 - Promise"))` tạo một microtask; microtask được ưu tiên xử lý ngay sau khi stack hiện tại rỗng.
- `console.log("4 - End")` chạy tiếp trong cùng chuỗi thực thi hiện tại.
- `setTimeout(() => console.log("5 - Timeout 100ms"), 100)` tạo một macrotask khác với độ trễ tối thiểu 100ms.
- `Promise.resolve().then(() => {
    console.log("6 - Promise 2");
    setTimeout(() => console.log("7 - Nested timeout"), 0);
});` cũng tạo microtask, và trong callback này lại tạo thêm macrotask mới.

Sau khi stack chính xong, Event Loop xử lý microtask trước:
- `3 - Promise`
- `6 - Promise 2`

Trong callback `6 - Promise 2`, macrotask `7 - Nested timeout` được thêm vào hàng đợi sau macrotask hiện tại.

Sau đó Event Loop xử lý macrotask theo thứ tự:
- `2 - Timeout 0ms`
- `7 - Nested timeout`
- `5 - Timeout 100ms`

### Kết luận

Microtask Queue (`Promise.then`) luôn được xử lý trước Macrotask Queue (`setTimeout`) sau khi call stack hiện tại kết thúc, nên các log từ promise xuất hiện trước các log từ `setTimeout`.

## A2 — Fetch API

```javascript
async function getData() {
    try {
        const response = await fetch("https://api.example.com/data");
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed:", error.message);
        return null;
    }
}
```

1. `await fetch(...)` — `fetch` trả về gì? Tại sao cần `await`?

- `fetch` trả về một `Promise` đại diện cho yêu cầu HTTP.
- `await` chờ `Promise` đó hoàn thành và trả về đối tượng `Response` khi kết nối tới máy chủ thành công.
- Nếu không dùng `await`, biến `response` sẽ chứa một `Promise` chưa hoàn thành thay vì dữ liệu trả về.

2. `response.ok` — Khi nào `false`? Liệt kê 3 status codes tương ứng.

- `response.ok` bằng `false` khi HTTP status code không nằm trong khoảng 200–299.
- Ví dụ status codes:
  - `404` — Not Found (đường dẫn không tồn tại)
  - `500` — Internal Server Error (lỗi server)
  - `401` — Unauthorized (không có quyền truy cập)

3. `response.json()` — Tại sao cần `await` lần nữa?

- `response.json()` cũng trả về một `Promise` vì việc phân tích JSON có thể mất thời gian.
- `await` chờ quá trình parse JSON hoàn thành và trả về đối tượng JavaScript.
- Nếu không dùng `await`, biến `data` sẽ là một `Promise` thay vì dữ liệu đã giải mã.

4. `try...catch` — Catch những lỗi gì? (Network error? 404? JSON parse error?)

- `catch` bắt được lỗi mạng như mất kết nối hoặc DNS thất bại.
- `catch` cũng bắt lỗi do `fetch` bị từ chối (ví dụ CORS, timeout nếu được cấu hình).
- Không tự động bắt `404`, vì `fetch` vẫn trả về `Response` thành công về mặt mạng; phần `if (!response.ok)` đóng vai trò chuyển 404/500 thành lỗi.
- `catch` cũng bắt được lỗi parse JSON nếu response không phải JSON hợp lệ.
