## Câu A1

1. type="email" → Ô nhập text, tự kiểm tra có @ và domain → Dùng cho đăng ký tài khoản
2. type="password" → Ký tự bị ẩn (••••) → Dùng nhập mật khẩu
3. type="number" → Ô nhập số, có nút tăng/giảm → Dùng nhập số lượng sản phẩm
4. type="tel" → Ô nhập số điện thoại (bàn phím mobile tối ưu) → Dùng nhập SĐT khách hàng
5. type="date" → Hiển thị date picker → Dùng chọn ngày sinh / ngày giao hàng
6. type="checkbox" → Ô tick nhiều lựa chọn → Dùng chọn đồng ý điều khoản
7. type="radio" → Chọn 1 trong nhiều option → Dùng chọn giới tính / thanh toán
8. type="file" → Nút upload file → Dùng upload ảnh đại diện / hóa đơn
9. type="range" → Thanh kéo (slider) → Dùng chọn số ngày giao hàng
10. type="search" → Ô tìm kiếm (có nút clear) → Dùng tìm sản phẩm

---

## Câu A2

**Trường hợp 1:**  
→ Không submit được  
→ Vì có thuộc tính `required` nhưng value rỗng

**Trường hợp 2:**  
→ Không submit được  
→ Vì `"abc"` không đúng format email (thiếu `@domain`)

**Trường hợp 3:**  
→ Không submit được  
→ Vì `15 > max=10` (vi phạm khoảng giá trị)

**Trường hợp 4:**  
→ Không submit được  
→ Vì `"abc123"` không khớp `pattern [0-9]{10}` (phải đủ 10 chữ số)

**Trường hợp 5:**  
→ Không submit được  
→ Vì độ dài `< minlength=8`

---

## Câu A3

1. <label for="email">` giúp người dùng biết ô input cần nhập gì, đặc biệt quan trọng với screen reader vì nó sẽ đọc label trước khi đọc input. Ngoài ra, khi click vào label thì con trỏ sẽ focus vào input tương ứng → cải thiện trải nghiệm người dùng.

2. <fieldset>` + `<legend>` dùng khi có nhiều input liên quan cùng một nhóm.

3. aria-label` dùng cho các phần tử không có label hiển thị, ví dụ như icon button.

Không nên dùng đồng thời `<label>` và `aria-label` vì sẽ gây trùng lặp thông tin cho screen reader, làm giảm accessibility.

---

## Câu A4

1. loading="lazy"` giúp hình ảnh chỉ được tải khi người dùng cuộn đến gần vị trí của ảnh. Điều này giúp giảm thời gian tải trang ban đầu và cải thiện hiệu năng.

**Không nên dùng `loading="lazy"` với:**

- Ảnh chính (hero image)
- Banner đầu trang
- Icon quan trọng hiển thị ngay khi load

2. Nên dùng nhiều `<source>` trong `<video>` vì mỗi trình duyệt hỗ trợ codec khác nhau. Việc cung cấp nhiều định dạng giúp video chạy được trên nhiều trình duyệt.

**3 định dạng video phổ biến:**

- MP4 (H.264)
- WebM
- Ogg

3. Thuộc tính `alt` dùng để:

- Mô tả nội dung ảnh cho screen reader
- Hiển thị khi ảnh không load được

### Viết alt chuẩn:

- iPhone 16:  
  `"iPhone 16 Pro Max 256GB màu Titan"`

- Ảnh trang trí:  
  `""` (alt rỗng, không mô tả)

- Biểu đồ:  
  `"Biểu đồ doanh thu quý 1 năm 2026 tăng trưởng 20%"`

---

## Câu A5

### `<figure>` vs `<img>`

Dùng `<img>` khi chỉ cần hiển thị ảnh, ảnh không cần chú thích và không mang ý nghĩa nội dung độc lập.

Dùng `<figure>` khi ảnh là một phần nội dung quan trọng và cần mô tả thêm bằng `<figcaption>` → giúp semantic rõ ràng hơn.

### Ví dụ thực tế

**Dùng `<img>`:**

- Ảnh avatar người dùng
- Icon nhỏ trong giao diện

**Dùng `<figure>`:**

- Trang chi tiết sản phẩm (ảnh + giá + mô tả)
- Ảnh minh họa trong bài blog hoặc bài báo
