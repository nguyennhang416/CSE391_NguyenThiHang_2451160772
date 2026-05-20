# Câu A1 — 5 loại positioning

| Position | Chiếm chỗ trong flow | Tham chiếu vị trí | Cuộn theo trang | Use case |
|---|---|---|---|---|
| static | Có | Theo flow mặc định | Có | Layout bình thường |
| relative | Có | Vị trí gốc của chính nó | Có | Làm mốc cho absolute |
| absolute | Không | Parent gần nhất có position | Có | Badge, popup |
| fixed | Không | Viewport | Không | Header fixed |
| sticky | Có | Viewport + container | Sticky khi scroll | Sidebar sticky |

## nearest positioned ancestor

Là phần tử cha gần nhất có position khác static.
# Câu A2 — Flexbox vs Grid

## Trường hợp 1

4 items nằm trên 1 hàng và chia đều chiều rộng.

## Trường hợp 2

6 items:
- 2 cột
- 3 hàng

## Trường hợp 3

3 items nằm ngang.
Item đầu sát trái.
Item cuối sát phải.

## Trường hợp 4

Layout:
- Sidebar 200px
- Content co giãn
- Ads 200px

## Trường hợp 5

7 items:
- 3 cột
- 3 hàng
- Item cuối nằm hàng 3 cột 1
# Câu C1

Navbar → Flexbox
Instagram grid → Grid
Blog layout → Grid
Footer 4 cột → Grid
Product card → Flexbox

# Câu C2

Lỗi 1:
Cards cao thấp khác nhau.
Sửa bằng:
display: flex;
flex-direction: column;
margin-top: auto;

Lỗi 2:
Thiếu justify-content và align-items.

Lỗi 3:
Sidebar bị shrink.
Sửa:
flex-shrink: 0;