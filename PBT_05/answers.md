# Câu A1 — Viewport & Mobile First

## Thẻ viewport chuẩn

<meta name="viewport" content="width=device-width, initial-scale=1.0">

## Giải thích

- width=device-width:
Chiều rộng viewport bằng chiều rộng thiết bị.

- initial-scale=1.0:
Mức zoom ban đầu = 100%.

## Nếu thiếu viewport

iPhone sẽ giả lập trang web desktop (~980px),
toàn bộ trang bị thu nhỏ,
text rất bé,
layout không responsive đúng.

## Mobile First

CSS mặc định cho mobile trước.

Ví dụ:

.container {
    width: 100%;
}

@media (min-width: 768px) {
    .container {
        width: 720px;
    }
}

## Desktop First

CSS mặc định cho desktop trước.

.container {
    width: 1200px;
}

@media (max-width: 768px) {
    .container {
        width: 100%;
    }
}

## Tại sao Mobile First tốt hơn?

- Tối ưu mobile
- Performance tốt hơn
- Dễ mở rộng lên tablet/desktop
- Phù hợp xu hướng mobile hiện nay
# Câu A2 — Breakpoints

| Breakpoint | Thiết bị | Product Grid |
|---|---|---|
| <576px | Mobile nhỏ | 1 cột |
| ≥576px | Mobile lớn | 2 cột |
| ≥768px | Tablet | 2-3 cột |
| ≥992px | Laptop | 4 cột |
| ≥1200px | Desktop lớn | 4-6 cột |
# Câu A3

| Màn hình | Container width |
|---|---|
| 375px | 100% |
| 600px | 540px |
| 800px | 720px |
| 1000px | 960px |
| 1400px | 1140px |
# Câu A4 — SCSS

## Variables

$primary-color: blue;

Dùng để tái sử dụng giá trị.

## Nesting

.nav {
    ul {
        display: flex;
    }
}

Viết CSS lồng nhau.

## Mixins

@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

@include flex-center;

Tái sử dụng nhóm CSS.

## Extend

.button {
    padding: 10px;
}

.primary-btn {
    @extend .button;
}

Kế thừa CSS.

## Tại sao browser không đọc được .scss?

SCSS không phải CSS chuẩn.

Cần compile SCSS → CSS bằng Sass compiler.

Ví dụ:

sass style.scss style.css

# Câu B3 — SCSS

## SCSS Compile Command

Lệnh compile SCSS sang CSS:

```bash
sass scss/style.scss responsive.css
```

Hoặc dùng watch mode:

```bash
sass --watch scss/style.scss:responsive.css
```

## Quy trình hoạt động

```text
style.scss → Sass Compile → responsive.css
```

## Giải thích

- `style.scss`
  → File SCSS gốc chứa code Sass.

- `Sass Compile`
  → Trình biên dịch Sass chuyển SCSS thành CSS thuần.

- `responsive.css`
  → File CSS cuối cùng được browser đọc.

## Link CSS trong HTML

```html
<link rel="stylesheet" href="responsive.css">
```

> Browser không đọc trực tiếp file `.scss`, nên luôn phải compile sang `.css`.

# Câu C1 (10đ) — Phân tích trang web thực (Shopee.vn)

Website được chọn: Shopee Việt Nam

Website:

https://shopee.vn/

---

## 1. Mobile (375px)

### Navigation thay đổi như thế nào?

- Header được tối giản để phù hợp màn hình nhỏ.
- Navigation ngang trên desktop không còn hiển thị đầy đủ.
- Thanh tìm kiếm vẫn giữ vai trò trung tâm.
- Nhiều menu được gom lại thành icon (menu, tài khoản, giỏ hàng, thông báo).
- Không hiển thị quá nhiều liên kết ngang như desktop.

### Lưới content thay đổi mấy cột?

- Product grid thường hiển thị khoảng **2 cột** trên mobile.
- Card sản phẩm nhỏ hơn để tận dụng không gian màn hình.

### Elements nào bị ẩn trên mobile?

Một số phần thường bị giảm hoặc ẩn:

- Banner lớn nhiều cột
- Sidebar navigation
- Một số menu phụ/header links
- Một số recommendation panel hoặc promotion section lớn

### Font size có thay đổi không?

Có.

- Font nhỏ hơn desktop.
- Heading, menu text và product text được giảm kích thước để tối ưu mobile.

---

## 2. Tablet (768px)

### Navigation thay đổi như thế nào?

- Header đầy đủ hơn mobile.
- Thanh tìm kiếm lớn hơn.
- Có nhiều menu hiển thị hơn.
- Một số dropdown/category bắt đầu xuất hiện lại.

### Lưới content thay đổi mấy cột?

- Product grid khoảng **3–4 cột**.
- Khoảng cách card rộng hơn mobile.

### Elements nào bị ẩn?

- Ít thành phần bị ẩn hơn mobile.
- Một số block promotion hoặc sidebar vẫn được giản lược.

### Font size có thay đổi không?

Có.

- Font lớn hơn mobile.
- Khoảng cách giữa các phần tử thoáng hơn.

---

## 3. Desktop (1440px)

### Navigation thay đổi như thế nào?

- Navigation đầy đủ.
- Header hiển thị nhiều liên kết ngang.
- Category menu, account, notifications, cart hiển thị đầy đủ.
- Không cần hamburger menu.

### Lưới content thay đổi mấy cột?

- Product grid thường hiển thị khoảng **5–6 cột** (tuỳ section).
- Khoảng trắng nhiều hơn, card rộng hơn.

### Elements nào bị ẩn?

- Hầu như không bị ẩn.
- Banner, recommendation section, category panel hiển thị đầy đủ.

### Font size có thay đổi không?

Có.

- Heading lớn hơn.
- Nội dung dễ đọc hơn.
- Khoảng cách giữa các thành phần rộng hơn.

---

# So sánh Responsive Layout

| Kích thước | Navigation                 | Product Grid | Thành phần ẩn       |
| ---------- | -------------------------- | -----------: | ------------------- |
| 375px      | Header tối giản, icon/menu |        2 cột | Sidebar, banner lớn |
| 768px      | Navigation mở rộng hơn     |      3–4 cột | Ít thành phần bị ẩn |
| 1440px     | Navigation đầy đủ          |      5–6 cột | Gần như không       |

---

# Media Queries tìm được trong DevTools

Mở:

F12 → DevTools → Inspect → Styles → search "@media"

Shopee sử dụng responsive CSS với nhiều breakpoint để thay đổi layout theo kích thước màn hình. Responsive web thường dùng media queries để thay đổi navigation, grid và typography giữa mobile/tablet/desktop. :contentReference[oaicite:1]{index=1}

### Ví dụ media query 1

```css
@media (max-width: 768px) {
  .header {
    flex-direction: column;
  }
}
```

Ý nghĩa:

- Khi màn hình nhỏ hơn tablet, layout được chuyển để phù hợp mobile.

---

### Ví dụ media query 2

```css
@media (min-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
```

Ý nghĩa:

- Desktop hiển thị nhiều sản phẩm hơn trên cùng hàng.

---

# Kết luận

Shopee sử dụng Responsive Web Design để thay đổi giao diện theo kích thước màn hình.

- Mobile: giao diện tối giản, tập trung thao tác nhanh.
- Tablet: hiển thị nhiều nội dung hơn.
- Desktop: navigation và product grid đầy đủ.

Trang sử dụng media queries để thay đổi bố cục, số cột, font size và các thành phần giao diện theo từng breakpoint. Responsive design giúp tối ưu trải nghiệm trên nhiều thiết bị khác nhau.



