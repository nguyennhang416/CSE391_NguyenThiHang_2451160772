# Reflection — Giải pháp bài 0.0

## 1. Ở Phần A, mỗi lần thêm/xóa/toggle 1 todo, bạn phải gọi bao nhiêu hàm?
- Thêm: `addTodo()` và `renderTodos()`.
- Toggle: `toggleTodo(id)` và `renderTodos()`.
- Xóa: `deleteTodo(id)` và `renderTodos()`.

## 2. Ở Phần B, khi `setTodos(...)` chạy, React tự động làm gì giúp bạn?
- React lưu giá trị state mới và sau đó tự động re-render component.
- React so sánh JSX cũ và mới rồi cập nhật DOM chỉ với phần thay đổi.

## 3. Nếu Portfolio của Minh có 50 project, cách nào quản lý danh sách an toàn hơn? Tại sao?
- Dùng React + `useState` để quản lý danh sách sẽ an toàn hơn.
- Vì React giữ state trong component, tự động render lại khi state thay đổi, tránh việc thao tác DOM thủ công dễ sai.
- React giúp code rõ ràng hơn khi dùng `.map()` để hiển thị danh sách và `.filter()` để xóa/bộ lọc.

## 4. Kết nối Portfolio
- `ProjectCard` giống như `TodoItem`: mỗi item đều được render từ mảng state.
- `useState` giữ dữ liệu danh sách project; `setProjects(...)` cập nhật state khi thêm/xóa/sửa.
- `.map()` dùng để tạo ra JSX cho từng project.
- `.filter()` dùng để loại bỏ project không cần hiển thị hoặc xóa project.
- Cách này giúp giữ UI và dữ liệu đồng bộ, không cần thao tác DOM thủ công, nên phù hợp với 50 project.
