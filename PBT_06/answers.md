# PHẦN A — ĐỌC HIỂU (20 điểm)

## Câu A1 (10đ)

## 1. Phân tích Grid System

Bootstrap grid có tổng cộng **12 cột**.
Ý nghĩa các class:

```html
col-12
```

→ chiếm toàn bộ 12/12 cột (100%)

```html
col-md-6
```

→ từ breakpoint `md` (≥768px) trở lên chiếm 6/12 cột (50%)

```html
col-lg-3
```

→ từ breakpoint `lg` (≥992px) trở lên chiếm 3/12 cột (25%)

## Bootstrap hoạt động theo nguyên tắc **Mobile-First**, breakpoint lớn hơn sẽ ghi đè breakpoint nhỏ hơn.

## 2. Layout ở từng kích thước

| Kích thước      | `<768px` | `768px - 991px` | `≥992px` |
| --------------- | -------: | --------------: | -------: |
| Số cột hiển thị |    1 cột |           2 cột |    4 cột |
| Width mỗi box   |     100% |             50% |      25% |

---

### A. Mobile (`<768px`)

Áp dụng:

```html
col-12
```

Mỗi box chiếm toàn bộ chiều ngang.

### Layout

```text
┌──────────────┐
│   Box 1      │
├──────────────┤
│   Box 2      │
├──────────────┤
│   Box 3      │
├──────────────┤
│   Box 4      │
└──────────────┘
```

## **Số cột:** 1

### B. Tablet (`768px - 991px`)

Áp dụng:

```html
col-md-6
```

Mỗi box chiếm:

```text
6/12 = 50%
```

→ 2 box trên mỗi hàng.

### Layout

```text
┌───────────┬───────────┐
│  Box 1    │  Box 2    │
├───────────┼───────────┤
│  Box 3    │  Box 4    │
└───────────┴───────────┘
```

## **Số cột:** 2

### C. Desktop (`≥992px`)

Áp dụng:

```html
col-lg-3
```

Mỗi box chiếm:

```text
3/12 = 25%
```

→ 4 box trên một hàng.

### Layout

```text
┌──────┬──────┬──────┬──────┐
│Box 1 │Box 2 │Box 3 │Box 4 │
└──────┴──────┴──────┴──────┘
```

## **Số cột:** 4

## 3. Bảng kết quả

| Kích thước | `<768px` | `768px - 991px` | `≥992px`   |
| ---------- | -------- | --------------- | ---------- |
| Số cột     | 1        | 2               | 4          |
| Box layout | Xếp dọc  | 2 box/hàng      | 4 box/hàng |

---

## 4. Câu hỏi thêm

### `col-md-6` nghĩa là gì?

`col-md-6` nghĩa là:

- Từ breakpoint `md` (**≥768px**) trở lên
- Element sẽ chiếm:

```text
6 / 12 cột
```

hay:

```text
50% chiều rộng
```

Ví dụ:

```html
<div class="col-md-6"></div>
```

## → trên tablet và desktop, phần tử rộng bằng nửa hàng.

### Tại sao không cần viết `col-sm-12`?

Không cần viết:

```html
col-sm-12
```

vì đã có:

```html
col-12
```

`col-12` là áp dụng cho **mọi kích thước từ nhỏ nhất trở lên**.
Bootstrap theo cơ chế **Mobile-First**, nên:

```html
col-12
```

đã mặc định:

```text
mobile = 12/12 = 100%
```

Do đó viết thêm:

```html
col-sm-12
```

sẽ bị dư thừa.
Ví dụ:

```html
<div class="col-12 col-md-6"></div>
```

có nghĩa:

```text
<768px  → 100%
≥768px  → 50%
```

không cần thêm:

```html
col-sm-12
```

vì mobile đã được xử lý sẵn.

# Câu A2 (10đ) — Utilities & Components

## 1. Giải thích class `d-none d-md-block`

### Ý nghĩa từng class

```html
d-none
```

- `d` = display
- `none` = `display: none`

→ phần tử bị **ẩn hoàn toàn**

---

```html
d-md-block
```

Có nghĩa:

- từ breakpoint `md` (**≥768px**) trở lên
- element sẽ:

```css
display: block;
```

---

### Element hiển thị khi nào, ẩn khi nào?

Ví dụ:

```html
<div class="d-none d-md-block">Sidebar</div>
```

#### Mobile (`<768px`)

Áp dụng:

```html
d-none
```

Kết quả:

```css
display: none;
```

→ **Bị ẩn**

---

#### Tablet + Desktop (`≥768px`)

Áp dụng:

```html
d-md-block
```

Kết quả:

```css
display: block;
```

→ **Hiển thị**

---

### Responsive behavior

| Kích thước màn hình | Hiển thị?   |
| ------------------- | ----------- |
| `<768px`            | ❌ Ẩn       |
| `≥768px`            | ✅ Hiển thị |

---

### Ví dụ layout thực tế

Thường dùng cho:

- Sidebar
- Advertisement panel
- Navigation phụ

Ví dụ:

```html
<aside class="d-none d-md-block">Sidebar Filter</aside>
```

→ mobile ẩn sidebar, desktop hiện sidebar.

---

# 2. 5 Spacing Utilities (Margin/Padding)

Bootstrap có cú pháp:

```text
{property}{side}-{size}
```

Ví dụ:

```text
mt-3
```

Trong đó:

- `m` = margin
- `p` = padding

Side:

| Ký hiệu | Ý nghĩa      |
| ------- | ------------ |
| `t`     | top          |
| `b`     | bottom       |
| `s`     | start (left) |
| `e`     | end (right)  |
| `x`     | left + right |
| `y`     | top + bottom |

---

## 1. `mt-3`

```html
<div class="mt-3"></div>
```

Ý nghĩa:

```css
margin-top
```

→ thêm khoảng cách phía trên.

Ví dụ dùng:

- đẩy card xuống dưới
- tạo khoảng cách giữa section

---

## 2. `mb-4`

```html
<div class="mb-4"></div>
```

Ý nghĩa:

```css
margin-bottom
```

→ thêm khoảng cách phía dưới.

Ví dụ:

- khoảng cách giữa các button
- spacing giữa paragraph

---

## 3. `px-4`

```html
<div class="px-4"></div>
```

Ý nghĩa:

```css
padding-left
padding-right
```

→ padding ngang.

Ví dụ:

- tạo khoảng đệm trong card
- navbar spacing

---

## 4. `py-2`

```html
<div class="py-2"></div>
```

Ý nghĩa:

```css
padding-top
padding-bottom
```

→ padding theo chiều dọc.

Ví dụ:

- button
- menu item

---

## 5. `mb-auto`

```html
<div class="mb-auto"></div>
```

Ý nghĩa:

```css
margin-bottom: auto;
```

→ margin tự động.

Thường dùng với:

```css
flexbox
```

để đẩy element xuống cuối container.

Ví dụ:

```html
<div class="d-flex flex-column">
  <h3>Title</h3>
  <p class="mb-auto">Description</p>
  <button>Buy</button>
</div>
```

→ button luôn nằm cuối card.

---

# 3. Khác nhau giữa `.container`, `.container-fluid`, `.container-md`

## A. `.container`

```html
<div class="container"></div>
```

### Đặc điểm

- Có chiều rộng tối đa (max-width).
- Responsive theo breakpoint Bootstrap.
- Tự căn giữa.

Ví dụ:

```text
Mobile   → gần full width
Tablet   → fixed width
Desktop  → fixed width
```

Phù hợp:

- website thông thường
- blog
- ecommerce layout

---

## B. `.container-fluid`

```html
<div class="container-fluid"></div>
```

### Đặc điểm

Luôn:

```text
100% chiều rộng màn hình
```

Không có giới hạn max-width.

Ví dụ:

```text
Desktop → full width
Mobile → full width
```

Phù hợp:

- dashboard
- banner toàn màn hình
- admin panel

---

## C. `.container-md`

```html
<div class="container-md"></div>
```

### Đặc điểm

- Full width ở màn hình nhỏ.
- Từ breakpoint `md` (**≥768px**) trở lên mới có max-width giống `.container`.

Ví dụ:

```text
<768px   → full width
≥768px   → fixed width
```

Phù hợp:

- website ưu tiên mobile
- tablet/desktop cần layout gọn hơn

---

## So sánh nhanh

| Class              | Mobile           | Tablet/Desktop    |
| ------------------ | ---------------- | ----------------- |
| `.container`       | responsive width | fixed max-width   |
| `.container-fluid` | full width       | full width        |
| `.container-md`    | full width       | fixed width từ md |

---

## Kết luận

- `.container` → container responsive tiêu chuẩn.
- `.container-fluid` → luôn full width.
- `.container-md` → full width trên mobile, fixed width từ tablet trở lên.
# Câu C1 (10đ) — So sánh TailwindCSS và CSS thuần

Trong phần này em sử dụng ví dụ **product card** đã làm ở bài trước để so sánh giữa CSS thuần và TailwindCSS.

## 1. CSS thuần

Ví dụ khi dùng CSS thuần:

### HTML

```html
<div class="card">
    <img class="card-image" src="product.jpg">

    <div class="card-body">
        <h3 class="card-title">
            Product Name
        </h3>

        <p>$120</p>

        <button class="buy-btn">
            Buy Now
        </button>
    </div>
</div>
```

### CSS

```css
.card{
    width:300px;
    background:white;
    border-radius:12px;
}

.buy-btn{
    background:blue;
    color:white;
}
```

Theo em, CSS thuần khá dễ đọc vì phần HTML ngắn gọn, nhìn vào có thể nhận ra ngay đâu là card, button hay image. Khi muốn chỉnh giao diện thì chỉ cần mở file CSS để sửa.

Ví dụ muốn đổi màu nút:

```css
.buy-btn{
    background:red;
}
```

---

## 2. TailwindCSS

Ví dụ cùng component nhưng viết bằng TailwindCSS:

```html
<div class="w-[300px] bg-white rounded-xl shadow-lg">

    <img src="product.jpg" class="w-full">

    <div class="p-5">
        <h3 class="text-lg font-bold">
            Product Name
        </h3>

        <p>$120</p>

        <button class="bg-blue-500 text-white px-4 py-2 rounded">
            Buy Now
        </button>
    </div>
</div>
```

Lúc mới nhìn, em thấy phần `class=""` khá dài và hơi khó đọc. Tuy nhiên sau khi tìm hiểu, em hiểu rằng Tailwind cho phép viết style trực tiếp trong HTML nên không cần tạo quá nhiều class CSS riêng.

---

## 3. So sánh cấu trúc HTML

### CSS thuần

Theo em thấy:

### Ưu điểm

- HTML ngắn gọn hơn
- Dễ đọc và dễ nhìn hơn với người mới học

Ví dụ:

```html
<div class="card">
```

nhìn khá đơn giản và rõ ràng.

### Nhược điểm

- Khi chỉnh giao diện phải chuyển qua file CSS.
- Với project lớn, CSS đôi khi dễ bị trùng hoặc ghi đè class.

---

### TailwindCSS

### Ưu điểm

- Thiết kế giao diện nhanh.
- Không cần tạo quá nhiều class CSS.

Ví dụ muốn thêm bo góc và padding chỉ cần:

```html
rounded p-4
```

### Nhược điểm

- HTML dài hơn.
- Người mới học có thể thấy khó đọc do có nhiều utility classes.

Ví dụ:

```html
class="bg-blue-500 text-white px-4 py-2 rounded"
```

sẽ nhìn khá nhiều chữ trong một dòng.

---

## 4. Maintainability (Khả năng bảo trì và chỉnh sửa)

Theo cảm nhận của em:

Nếu project nhỏ thì CSS thuần dễ đọc và dễ quản lý hơn vì HTML ngắn gọn.

Tuy nhiên, với project có nhiều component thì Tailwind thuận tiện hơn vì có thể chỉnh trực tiếp ngay trong HTML mà không cần chuyển qua lại giữa HTML và CSS.

Ví dụ muốn đổi màu:

### CSS thuần

```css
.buy-btn{
    background:red;
}
```

### TailwindCSS

```html
bg-red-500
```

chỉ cần sửa trực tiếp class là xong.

---

## 5. Reusability (Khả năng tái sử dụng)

### CSS thuần

CSS thuần tái sử dụng thông qua class.

Ví dụ:

```html
<div class="card"></div>
<div class="card"></div>
<div class="card"></div>
```

chỉ cần định nghĩa `.card` một lần trong CSS.

---

### TailwindCSS

Tailwind thường sử dụng lại các utility classes.

Ví dụ:

```html
class="bg-white rounded-xl shadow-lg p-4"
```

Ngoài ra, Tailwind còn hỗ trợ `@apply` để gom nhiều utility classes thành một class riêng:

```css
.product-card{
    @apply bg-white rounded-xl shadow-lg p-4;
}
```

Sau đó có thể sử dụng:

```html
<div class="product-card"></div>
```

Cách này giúp code gọn hơn và dễ tái sử dụng hơn.

---

## Kết luận C1

Theo em:

- CSS thuần dễ tiếp cận và dễ đọc hơn với người mới học.
- TailwindCSS lúc đầu có thể hơi rối nhưng giúp xây dựng giao diện nhanh hơn.
- Với project nhỏ, CSS thuần vẫn là lựa chọn phù hợp.
- Với project có nhiều UI component, TailwindCSS sẽ thuận tiện và tối ưu hơn.

---

# Câu C2 (10đ) — Performance

## 1. Vì sao TailwindCSS thường nhẹ hơn Bootstrap?

Ban đầu em nghĩ rằng Tailwind sẽ nặng hơn vì phần HTML chứa rất nhiều class. Tuy nhiên sau khi tìm hiểu, em hiểu rằng Bootstrap và Tailwind hoạt động theo hai cách khác nhau.

Bootstrap cung cấp sẵn rất nhiều component như:

- button
- navbar
- modal
- table
- accordion
- grid
- alert

Dù project không sử dụng hết thì toàn bộ CSS của framework vẫn được tải.

Ví dụ nếu chỉ dùng button và card thì Bootstrap vẫn phải load thêm nhiều phần khác không sử dụng đến.

Trong khi đó, TailwindCSS chỉ build những utility classes thực sự được dùng trong project.

Ví dụ project chỉ sử dụng:

```html
flex
bg-red-500
p-4
rounded
```

thì Tailwind chỉ generate CSS cho các class đó.

Vì vậy file CSS cuối cùng thường nhỏ và tối ưu hơn Bootstrap.

---

## 2. PurgeCSS / Tailwind JIT là gì?

Theo em hiểu đơn giản:

Tailwind sẽ quét toàn bộ project để kiểm tra class nào đang được sử dụng.

Ví dụ nếu project dùng:

```html
bg-red-500
p-4
flex
```

thì các class này sẽ được giữ lại.

Ngược lại, những class không sử dụng như:

```html
bg-green-500
shadow-2xl
m-20
```

sẽ bị loại bỏ để giảm dung lượng CSS.

Ngoài ra, Tailwind còn có cơ chế JIT (Just In Time).

Cơ chế này hoạt động theo kiểu viết tới đâu thì generate CSS tới đó.

Ví dụ khi dùng:

```html
w-72
```

thì Tailwind chỉ tạo CSS cho đúng class `w-72`.

Điều này giúp quá trình build nhanh hơn và file CSS cũng gọn hơn.

---

## 3. Khi nào không nên dùng TailwindCSS?

### Trường hợp 1: Website nhỏ

Ví dụ:

- landing page đơn giản
- website cá nhân cơ bản

Theo em, trong các trường hợp này CSS thuần có thể phù hợp hơn vì giao diện không quá phức tạp và không cần quá nhiều utility classes.

---

### Trường hợp 2: Team chưa quen TailwindCSS

Người mới học khi nhìn vào:

```html
class="flex justify-center items-center p-6 bg-red-500"
```

có thể cảm thấy hơi khó đọc.

Trong khi đó:

```html
class="product-card"
```

sẽ trực quan và dễ hiểu hơn.

---

## Kết luận C2

Theo em, TailwindCSS có ưu điểm lớn về tốc độ xây dựng UI và khả năng tối ưu CSS.

Tuy nhiên, không phải project nào cũng cần sử dụng TailwindCSS. Với các website nhỏ hoặc người mới học frontend, CSS thuần hoặc Bootstrap đôi khi sẽ dễ tiếp cận và dễ sử dụng hơn.