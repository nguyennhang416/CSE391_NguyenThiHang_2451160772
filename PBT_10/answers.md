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
