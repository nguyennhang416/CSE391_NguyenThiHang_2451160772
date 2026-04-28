Câu A1:
5 bước xảy ra khi gõ https://shopee.vn
Bước 1: yêu cầu sẽ xuất phát từ lap top -> đi qua router Wifi của bạn
Bước 2: Qua nhà mạng VNPT qua cáp mạng kết nối chạy xuyên cáp dưới đáy THái Bình Dương đến data center của Shoppe tại Sea Group tại Singapore
Bước 3: Sever xử lý :"Bạn muốn xem Product Feed"
Bước 4: Response chạy ngược lại : cáp quang->VNPT->router->laptop
Bước 5: Chorme nhận HTML,CSS,JS->render giao diện -> Bạn thấy Product Feed

Câu A2:

- Do Google sẽ khó hiểu nội dung div giống như một chiếc hộp và nếu ta gõ <div = header> thì google sẽ phải đoán xem đây có phải là header không

<div class="header"> //Lỗi 1 : không dùng header
    <div class="logo">ShopTLU</div> 
    <div class="menu"> //Lỗi 2 : Sử dụng menu thay vì <nav>
        <div><a href="/">Trang chủ</a></div>  //nên bỏ div vì sẽ làm ch code rồi thêm
        <div><a href="/products">Sản phẩm</a></div>
    </div>
</div>
<div class="main"> Lỗi 3 Không sử dụng <main>
    <div class="product"> //Có thể sử dụng<article chứa nội dung độc lập >
        <div class="title">iPhone 16 Pro</div> // nên sử dụng h2 để làm tiêu đề phụ cho main 
        <div class="price">25.990.000đ</div> // sử dụng <p> để chứa trên 1 đoạn văn
        <div class="image"><img src="iphone.jpg"></div>
        // nên dùng <imagie> để chứa ảnh 
    </div>
</div>
<div class="footer">© 2026 ShopTLU</div> Lỗi 4 : Sử dụng footer

-Sửa:

<header>
    <div class="logo">ShopTLU</div>

    <nav>
        <a href="/">Trang chủ</a>
        <a href="/products">Sản phẩm</a>
    </nav>

</header>

<main>
    <article class="product">
        <h2>iPhone 16 Pro</h2>
        <p class="price">25.990.000đ</p>
        <img src="iphone.jpg" alt="iPhone 16 Pro">
    </article>
</main>

<footer>
    <p>&copy; 2026 ShopTLU</p>
</footer>

Câu A3
Text art
Hộp 1
Text A Text B
Hộp 2
Text C Text D
Hộp 3
Do thẻ <div> sẽ chiếm cả dòng do div sẽ chứa cả nội dung còn <span> theo em hiểu đơn giản chỉ là nội dung của một dòng đó thôi nghĩa là ta chỉ viết vào một phần nội dung và sau đó ta có thể viết tiếp vào hoặc xuống dòng viết nội dung mới

Câu A4:

<thead> là phần đầu của bảng theo em hiểu đơn giản là hàng đầu tiên của bảng có thể chứa các tiêu đề hay thậm chí là tên của các cột trong bảng
<tbody> là phần thân của bảng tức là các hàng dưới <thead> sẽ là phần chứa các hàng khác gồm các nội dung tương ứng
<tfoot> là phần chân của bảng hay chính là hàng cuối cùng của bảng ta có thể để ghi chú về cột hoặc tính tổng tiền của cột,....

Bài B3:
Lỗi 1: Dòng 1 — Sai DOCTYPE (<!DOCTYPE>) — Sửa thành <!DOCTYPE html>

Lỗi 2: Dòng 2 — Thiếu thuộc tính lang trong <html> — Thêm lang="vi"

Lỗi 3: Dòng 4 — Thẻ <title> không đóng — Thêm </title>

Lỗi 4: Dòng 5 — Sai charset (utf8) — Sửa thành UTF-8

Lỗi 5: Dòng 8 — Thẻ <h1> không đóng đúng — Sửa thành </h1>

Lỗi 6: Dòng 12 — Thẻ <a> không đóng — Thêm </a>

Lỗi 7: Dòng 12–13 — Link không phải nội bộ (home, products) — Sửa thành #home, #products

Lỗi 8: Dòng 18 — <img> thiếu dấu " và thiếu alt — Sửa thành <img src="iphone.jpg" alt="iPhone 16 Pro">

Lỗi 9: Dòng 20 — Sai thứ tự đóng thẻ <b> — Sửa thành <strong>25.990.000đ</strong>

Lỗi 10: Dòng 31–39 — Dùng 2 thẻ <main> — Thay <main> thứ 2 bằng <aside>

Bài B4:

1. Semantic HTML5 được sử dụng

- <header> : phần trên cùng của trang (logo Shopee, thanh tìm kiếm, menu) - Chức năng: chứa phần đầu trang

- <nav> : thanh menu (Kênh người bán, Tải ứng dụng, Thông báo...) - điều hướng giữa các trang
- <form>  ô tìm kiếm trên đầu trang -  nhập dữ liệu tìm kiếm

Thẻ KHÔNG dùng đúng semantic (nếu có)

- dùng <div> thay cho <section> hoặc <article>
- dùng <span> cho nội dung quan trọng
  📍 Một số text (giá, tiêu đề) dùng <span>

2. Phân tích <table>

- Shoppe không dùng table

Câu C1:

<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <title>Chi tiết sản phẩm</title>
</head>
<body>

    <!-- HEADER: chứa logo, thanh tìm kiếm, menu chính -->
    <header>
        <h1>Logo / Tên website</h1> <!-- h1 đại diện tiêu đề chính của trang -->

        <!-- NAV: dùng cho điều hướng chính -->
        <nav>
            <ul> <!-- ul vì menu không có thứ tự -->
                <li><a href="#">Trang chủ</a></li>
                <li><a href="#">Danh mục</a></li>
                <li><a href="#">Giỏ hàng</a></li>
            </ul>
        </nav>
    </header>

    <!-- MAIN: chứa nội dung chính của trang -->
    <main>

        <!-- BREADCRUMB -->
        <nav aria-label="breadcrumb"> <!-- nav vì đây là điều hướng -->
            <ol> <!-- ol vì breadcrumb có thứ tự -->
                <li><a href="#">Trang chủ</a></li>
                <li><a href="#">Điện thoại</a></li>
                <li>iPhone 16</li>
            </ol>
        </nav>

        <!-- SECTION: khu vực chính sản phẩm -->
        <section>

            <!-- ARTICLE: 1 sản phẩm độc lập -->
            <article>

                <!-- KHU VỰC ẢNH -->
                <section>
                    <h2>Hình ảnh sản phẩm</h2> <!-- heading cho section -->

                    <!-- figure dùng để chứa media -->
                    <figure>
                        <img src="#" alt="Ảnh 1">
                        <figcaption>Ảnh sản phẩm 1</figcaption>
                    </figure>

                    <figure>
                        <img src="#" alt="Ảnh 2">
                    </figure>

                    <figure>
                        <img src="#" alt="Ảnh 3">
                    </figure>

                    <figure>
                        <img src="#" alt="Ảnh 4">
                    </figure>

                    <figure>
                        <img src="#" alt="Ảnh 5">
                    </figure>
                </section>

                <!-- THÔNG TIN SẢN PHẨM -->
                <section>
                    <h2>Tên sản phẩm</h2> <!-- h2 vì là tiêu đề chính trong article -->

                    <p>Giá: ...</p> <!-- p cho text -->
                    <p>Đánh giá: ⭐⭐⭐⭐⭐</p>
                    <p>Mô tả sản phẩm...</p>
                </section>

                <!-- BẢNG THÔNG SỐ -->
                <section>
                    <h2>Thông số kỹ thuật</h2>

                    <!-- table vì dữ liệu dạng bảng -->
                    <table>
                        <thead> <!-- phần tiêu đề bảng -->
                            <tr>
                                <th>Thông số</th>
                                <th>Giá trị</th>
                            </tr>
                        </thead>
                        <tbody> <!-- phần nội dung -->
                            <tr>
                                <td>Màn hình</td>
                                <td>6.7 inch</td>
                            </tr>
                            <tr>
                                <td>Pin</td>
                                <td>4000mAh</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <!-- ĐÁNH GIÁ / BÌNH LUẬN -->
                <section>
                    <h2>Đánh giá</h2>

                    <!-- mỗi comment là 1 article -->
                    <article>
                        <h3>Người dùng A</h3>
                        <p>Sản phẩm rất tốt!</p>
                    </article>

                    <article>
                        <h3>Người dùng B</h3>
                        <p>Đáng mua</p>
                    </article>
                </section>

            </article>
        </section>

        <!-- SIDEBAR -->
        <aside>
            <h2>Sản phẩm tương tự</h2>

            <!-- mỗi sản phẩm là 1 article -->
            <article>
                <h3>SP 1</h3>
                <p>Giá...</p>
            </article>

            <article>
                <h3>SP 2</h3>
                <p>Giá...</p>
            </article>
        </aside>

    </main>

    <!-- FOOTER -->
    <footer>
        <p>Bản quyền © 2026</p> <!-- footer chứa thông tin cuối trang -->
    </footer>

</body>
</html>

Câu C2:
Quan điểm cho rằng “chỉ cần dùng <div> kèm class là đủ” nghe thì có vẻ đơn giản và nhanh chóng, nhưng về mặt kỹ thuật lâu dài lại không phải là lựa chọn tối ưu.
Thứ nhất là SEO.
Các công cụ tìm kiếm như Google không chỉ đọc nội dung văn bản mà còn phân tích cấu trúc HTML để hiểu rõ bố cục và ý nghĩa của trang. Việc sử dụng các thẻ semantic như <header>, <main>, <article>, <section>, <nav>… giúp bot crawlers hiểu chính xác vai trò của từng phần, từ đó index hiệu quả hơn và cải thiện thứ hạng tìm kiếm. Ngược lại, nếu toàn bộ trang chỉ toàn <div>, bạn đang buộc công cụ tìm kiếm phải “đoán” ý nghĩa, điều này không đáng tin cậy và dễ làm giảm hiệu suất SEO.
Thứ hai là Accessibility (khả năng tiếp cận).
Người khuyết tật sử dụng screen reader (như NVDA, VoiceOver, JAWS…) rất phụ thuộc vào semantic HTML để di chuyển nhanh giữa các khu vực trên trang. Khi chỉ dùng <div>, họ sẽ rất khó phân biệt đâu là menu chính, đâu là nội dung chính hay chân trang, dẫn đến trải nghiệm sử dụng kém và khó tiếp cận.
Ví dụ thực tế:
Với breadcrumb, nếu dùng đúng <nav aria-label="breadcrumb"> kết hợp danh sách, screen reader sẽ thông báo rõ ràng “Breadcrumb navigation” và giúp người dùng biết ngay vị trí hiện tại của mình. Nếu thay bằng <div class="breadcrumb">, thông tin ngữ nghĩa này hoàn toàn bị mất.
Tuy nhiên, <div> vẫn rất quan trọng.
Nó phù hợp để tạo layout phức tạp (grid, flexbox), wrapper styling, hoặc nhóm các phần tử chỉ phục vụ mục đích trình bày mà không mang ý nghĩa ngữ nghĩa cụ thể.
Tóm lại, semantic HTML không phải để thay thế <div>, mà là để chúng ta sử dụng đúng thẻ cho đúng mục đích, giúp code chuyên nghiệp, bền vững và thân thiện hơn với cả người dùng lẫn máy móc.
