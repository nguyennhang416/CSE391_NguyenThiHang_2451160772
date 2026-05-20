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


