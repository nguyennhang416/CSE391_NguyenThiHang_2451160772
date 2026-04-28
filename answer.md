Phần A: Câu A1: file: introduction_html_universe.md 1 1.Người dùng nhập https://shopee.vn vào trình duyệt và nhấn enter 2.Trình duyệt(client) gửi yêu cầu DNS lookup để tìm địa chỉ IP của shopee.vn 3.DNS server(Máy chủ) nhận yêu cầu -> xử lý -> trả kết quả địa chỉ IP tương ứng 4.Render nhận HTML từ DNS server +HTML tạo DOM +CSS tạo CSSOM +HTML và CSS tạo Render 5.Trình duyệt render và hiển thị trang web cho người dùng 2 2.1Tab Network hiển thị: 2.2Danh sách tất cả các request (HTML, CSS, JS, ảnh…) 2.3Status Code (200, 404, 500…) 2.4Thời gian load của từng request 2.5Kích thước dữ liệu 2.6Loại tài nguyên (document, stylesheet, script, image…

Câu A2 file: visible_part_html.md 1.Không dùng

cho đầu trang 2.Không dùng cho phần menu 3.Không dùng cho nội dung chính 4.Không dùng cho sản phầm
ShopTLU
Trang chủ Sản phẩm
iPhone 16 Pro
25.990.000đ

iPhone 16 Pro

© 2026 ShopTLU
Câu A3 file: visible_part_html.md

Hộp 1
-> chiếm dòng 1 Text A Text B -> xuống dòng 2 và Text A Text B nằm cạnh nhau
Hộp 2
-> chiếm dòng 3 Text C Text D -> chiếm dòng 4 và Text C Text D nằm cạnh nhau
Hộp 3
-> chiếm dòng 5
Câu A4 file: tables_hyperlinks.md

header: Tiêu đề cột body: Dữ liệu chính Footer: Tổng kết Không nên dùng table làm layout vì: 1.Code khó đọc 2.Không đúng senmantic HTML 3.Code khó sửa và bảo trì
Phần B Câu B3: Lỗi 1: <!DOCTYPE> sai → sửa thành Lỗi 2: Thiếu lang trong → thêm lang="vi" Lỗi 3: <title> không đóng → thêm </title> Lỗi 4: sai → sửa thành UTF-8 Lỗi 5:

không đóng đúng →
Lỗi 6: Thẻ không đóng → thêm Lỗi 7:

thiếu dấu ngoặc kép → src="iphone.jpg" Lỗi 8:

thiếu thuộc tính alt Lỗi 9: Thẻ đóng sai vị trí → phải nằm trong
Lỗi 10: Dùng cho tiêu đề bảng → đổi thành Lỗi 11: Có 2 thẻ

→ sai semantic → đổi cái thứ 2 thành Lỗi 12: thiếu đóng thẻ
Câu B4: 1. 3 thẻ semantic:

dùng cho thành điều hướng dùng cho nội dung chính dùng cho chân trang 2 thẻ k dùng semantic:
: thẻ không mang ngữ nghĩa, dùng để chia bố cục trang web : thẻ không mang ngữ nghĩa, dùng để định dạng một phần nhỏ trong văn bản 2. Không tìm thấy thẻ không dùng và 3. không hiển thị rõ và không hiển thị thẻ chỉ hiện thị //
