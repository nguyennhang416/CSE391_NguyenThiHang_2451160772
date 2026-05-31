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

## A3 — Promise States

### Sơ đồ trạng thái Promise

- `Pending` → `Fulfilled`
- `Pending` → `Rejected`

`Pending` là trạng thái ban đầu khi một Promise vừa được tạo và vẫn đang chờ xử lý.
Khi thao tác thành công, Promise chuyển sang `Fulfilled` và trả về giá trị.
Nếu có lỗi xảy ra, Promise chuyển sang `Rejected` và trả về lý do lỗi.

### Callback Hell là gì?

Callback Hell xảy ra khi code sử dụng nhiều callback lồng nhau, khiến cấu trúc mã bị thụt sâu, khó đọc và khó bảo trì.

Ví dụ callback hell 4 cấp:

```javascript
loginUser(user, function(error, userData) {
  if (error) return handleError(error);
  getProfile(userData.id, function(error, profile) {
    if (error) return handleError(error);
    getPosts(profile.id, function(error, posts) {
      if (error) return handleError(error);
      getComments(posts[0].id, function(error, comments) {
        if (error) return handleError(error);
        console.log(comments);
      });
    });
  });
});
```

### Refactor thành async/await

```javascript
async function loadUserComments(user) {
  try {
    const userData = await loginUser(user);
    const profile = await getProfile(userData.id);
    const posts = await getPosts(profile.id);
    const comments = await getComments(posts[0].id);
    console.log(comments);
  } catch (error) {
    handleError(error);
  }
}
```

### Giải thích

- `async/await` giúp viết code bất đồng bộ trông giống như code đồng bộ, tránh lồng callback sâu.
- Promise chuyển trạng thái từ `Pending` sang `Fulfilled` khi thực hiện thành công, hoặc `Rejected` khi gặp lỗi.
- `try...catch` trong `async` bắt lỗi giống như xử lý trong hàm đồng bộ.

## C1 — Error Handling Strategy

Phần này mô tả chiến lược xử lý lỗi cho một ứng dụng E‑Commerce gọi nhiều API: mạng, lỗi server, timeout và retry.

1) Network errors (mất mạng)

- Triển khai UI rõ ràng: thông báo "Bạn đang offline" và vô hiệu hoá các hành động cần mạng.
- Dùng cơ chế queue + background sync (Service Worker) để lưu các thao tác cần gửi khi offline và gửi lại khi có mạng.
- Hiển thị dữ liệu cache (nếu có) để giảm gián đoạn; cung cấp nút "Thử lại" và tự động retry với backoff.

2) API errors

- 5xx (Server error): Hiện thông báo chung "Server gặp sự cố, thử lại sau"; log chi tiết cho monitoring; retry có điều kiện (throttled exponential backoff).
- 404 (Not Found): Không retry; hiển thị message cụ thể (ví dụ "Sản phẩm không tồn tại").
- 429 (Too Many Requests): Đọc header `Retry-After` nếu có, hoặc áp backoff; giảm tốc độ gọi (client-side rate limiting).

3) Timeout (> 10s)

- Dùng AbortController để timeout request và cho người dùng biết là request đã timeout.
- Ví dụ hàm `fetchWithTimeout(url, ms)`:

```javascript
async function fetchWithTimeout(url, options = {}, ms = 10000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    return res;
  } catch (err) {
    clearTimeout(id);
    // err.name === 'AbortError' khi timeout
    throw err;
  }
}
```

Giải thích: `AbortController` cho phép huỷ fetch khi quá thời gian; bắt `AbortError` để phân biệt timeout với lỗi mạng khác.

4) Retry logic (thử lại 3 lần nếu lỗi network)

- Chỉ retry cho lỗi tạm thời: network failures (`TypeError` / `AbortError`) hoặc 5xx theo chính sách.
- Dùng exponential backoff (ví dụ base 500ms → 500, 1000, 2000ms).

Ví dụ `fetchWithRetry`:

```javascript
function delay(ms) { return new Promise(res => setTimeout(res, ms)); }

async function fetchWithRetry(url, options = {}, maxRetries = 3, timeout = 10000, backoff = 500) {
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      const res = await fetchWithTimeout(url, options, timeout);

      // Nếu response trả về lỗi phía server, có thể quyết định retry cho 5xx
      if (!res.ok) {
        if (res.status >= 500 && res.status < 600 && attempt < maxRetries) {
          await delay(backoff * Math.pow(2, attempt));
          continue; // thử lại
        }
        // Không retry cho 4xx (trừ 429 xử lý riêng)
        throw new Error(`HTTP ${res.status}`);
      }

      return await res.json();
    } catch (err) {
      const isNetworkError = err.name === 'TypeError' || err.name === 'AbortError';
      // Nếu là lỗi mạng hoặc timeout thì retry, nếu đã hết lần thử thì ném lỗi
      if (!isNetworkError || attempt === maxRetries) {
        throw err;
      }
      // backoff trước khi thử lại
      await delay(backoff * Math.pow(2, attempt));
    }
  }
}
```

Sử dụng:

```javascript
try {
  const data = await fetchWithRetry('https://api.example.com/data');
  // xử lý data
} catch (err) {
  // hiển thị lỗi phù hợp với người dùng
}
```

