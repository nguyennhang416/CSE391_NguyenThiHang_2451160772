# Phần A — Kiểm tra đọc hiểu
## Câu A1 — 3 cách nhúng CSS
### 1. Inline CSS (CSS nội dòng)
- Viết trực tiếp CSS vào thuộc tính `style` của thẻ HTML  
**Ví dụ:**
```html
<h1 style="color: blue; font-size: 20px;">Chào mừng bạn!</h1>
````
**Ưu điểm:**
* Nhanh, tiện khi test hoặc chỉnh sửa 1 phần tử
**Nhược điểm:**
* Code rối, khó bảo trì
* Không tái sử dụng được
**Khi dùng:**
* Sửa nhanh một element
* Email (ưu tiên inline CSS)

---
### 2. Internal CSS (CSS nội bộ)
* Viết trong thẻ `<style>` (trong `<head>`)

```html
<head>
  <style>
    p {
      color: red;
      line-height: 1.5;
    }
  </style>
</head>
```
**Ưu điểm:**
* Quản lý style của một trang tại một nơi
**Nhược điểm:**
* Không tái sử dụng được
**Khi dùng:**
* Trang đơn (landing page)
---
### 3. External CSS (CSS bên ngoài)

* Tách ra file `.css`

```css
body {
  background-color: #f0f0f0;
}
```
```html
<link rel="stylesheet" href="style.css">
```
**Ưu điểm:**
* Code sạch, dễ bảo trì
* Tái sử dụng
**Nhược điểm:**
* Phải tải thêm file
---
### 4. Thứ tự ưu tiên
```
Inline > Internal ≈ External
```
* Inline cao nhất
* Nếu trùng → rule viết sau thắng
---
## Câu A2 — CSS Selectors
1. `h1` → ShopTLU
2. `.price` → 25.990.000đ, 45.990.000đ
3. `#app header` → toàn bộ `<header>`
4. `nav a:first-child` → Home
5. `.product.featured h2` → MacBook Pro
6. `article > p` → giá + mô tả
7. `a[href="/"]` → Home
8. `.top-bar.dark h1` → ShopTLU
---
## Câu A3 — Box Model
### Trường hợp 1: content-box
```css
.box-1 {
  width: 400px;
  padding: 20px;
  border: 5px;
  margin: 10px;
}
```
* Width = 400 + 40 + 10 = **450px**
* Tổng = 450 + 20 = **470px**

---
### Trường hợp 2: border-box
```css
.box-2 {
  box-sizing: border-box;
  width: 400px;
  padding: 20px;
  border: 5px;
  margin: 10px;
}
```
* Width = **400px**
* Content = **350px**
* Tổng = **420px**

---
### Trường hợp 3: Margin collapse
```css
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
```
* Khoảng cách = **40px**
## Câu A4 — Specificity
* `p` → 0-0-1
* `.price` → 0-1-0
* `#main-price` → 1-0-0
* `p.price` → 0-1-1
👉 Kết quả: **Đỏ**
* Có inline:
```html
<p style="color: orange;">
```
→ **Cam**

---
## PBT_03 — Selectors đã dùng trong `profile.html`
- Element selector: `body`, `header`, `main`, `table`, `footer`, `img`
- Class selector: `.active`, `.about`, `.skills`, `.contact-info`
- ID selector: `#main-header`, `#about`, `#skills`, `#contact`, `#skills-table`
- Descendant selector: `header nav ul`, `header nav ul li a`, `#skills-table tbody tr:nth-child(even)`
- Pseudo-class selector: `a:hover`, `header nav ul li a.active`, `#skills-table tbody tr:hover`, `#skills-table tbody tr:nth-child(even)`

---
## Box Model Lab — boxmodel_lab.html

### Phần 1 — content-box vs border-box

**Cách thực hiện:**
1. Mở file `boxmodel_lab.html` trong trình duyệt
2. Nhấn F12 để mở DevTools
3. Chọn Inspector (mũi tên) → Click vào Hộp 1 (content-box)
4. Xem tab "Computed" → Cuộn tìm "box-sizing: content-box"
5. Xem "Box Model diagram" để đo chiều rộng thực tế (border-to-border)
6. Ghi lại chiều rộng
7. Lặp lại cho Hộp 2 (border-box)

**Kết quả đo đạc:**
- Hộp 1 (content-box): chiều rộng thực tế = **350px**
  - Tính toán: 300px (content) + 20px*2 (padding) + 5px*2 (border) = 350px
- Hộp 2 (border-box): chiều rộng thực tế = **300px**
  - Tính toán: 300px (toàn bộ, đã bao gồm padding + border)

**Giải thích sự khác biệt:**
- `content-box` (mặc định): width chỉ tính phần content. Padding và border được thêm ngoài, làm tổng kích thước lớn hơn width được khai báo.
- `border-box`: width bao gồm cả content, padding, và border. Kích thước thực tế bằng đúng width được khai báo.

**Ứng dụng thực tế:**
- `border-box` dễ tính toán layout, được khuyến khích dùng cho responsive design.
- CSS reset thường chứa `* { box-sizing: border-box; }` để đơn giản hóa.

---
### Phần 2 — Layout 3 cột

**Tình huống 1: KHÔNG dùng border-box (Lỗi)**
```
Cột trái: 250px + 15px*2 padding = 280px
Cột giữa: 500px + 20px*2 padding = 540px
Cột phải: 250px + 15px*2 padding = 280px
---
Tổng: 280 + 540 + 280 = 1100px > 1000px container
❌ Cột phải bị xuống hàng
```

**Tình huống 2: Dùng border-box (Đúng)**
```
Cột trái: 250px (padding đã bao gồm)
Cột giữa: 500px (padding đã bao gồm)
Cột phải: 250px (padding đã bao gồm)
---
Tổng: 250 + 500 + 250 = 1000px = container
✓ Layout hoàn hảo
```

**Kết luận:**
- `box-sizing: border-box` là tuyệt vời cho layout, đặc biệt khi có padding/border
- Nên áp dụng `* { box-sizing: border-box; }` ở đầu CSS để tránh các vấn đề layout


* Có `!important`
  → Rule đó thắng