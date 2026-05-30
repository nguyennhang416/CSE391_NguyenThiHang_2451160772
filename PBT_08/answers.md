# ANSWERS — PBT_08

## PHẦN A — KIỂM TRA ĐỌC HIỂU

### Câu A1 — Function Declaration vs Expression vs Arrow

1. Function Declaration:
```javascript
function tinhThueBaoHiem(luong) {
  const thuong = luong > 11000000 ? luong * 0.1 : 0;
  return { thuong, thuc_nhan: luong - thuong };
}
```

2. Function Expression:
```javascript
const tinhThueBaoHiemExpression = function(luong) {
  const thuong = luong > 11000000 ? luong * 0.1 : 0;
  return { thuong, thuc_nhan: luong - thuong };
};
```

3. Arrow Function:
```javascript
const tinhThueBaoHiemArrow = (luong) => {
  const thuong = luong > 11000000 ? luong * 0.1 : 0;
  return { thuong, thuc_nhan: luong - thuong };
};
```

**Hoisting:**
- Function Declaration được hoisted, nên gọi trước khi định nghĩa vẫn chạy.
- Function Expression và Arrow Function được gán cho biến, không hoisted đầy đủ; nếu gọi trước khi gán sẽ gây `ReferenceError` với `const`/`let` hoặc `undefined` với `var`.

Ví dụ:
```javascript
console.log(tinhThueBaoHiem(12000000)); // OK
console.log(tinhThueBaoHiemExpression(12000000)); // Lỗi nếu gọi trước định nghĩa
```

### Câu A2 — Scope & Closure

Đoạn 1:
- `c.increment()` => 1
- `c.increment()` => 2
- `c.increment()` => 3
- `c.decrement()` => 2
- `c.getCount()` => 2

Đoạn 2:
- `var:` in ra `3` ba lần
- `let:` in ra `0`, `1`, `2`

Giải thích:
- `var i` có function scope, nên tất cả callback dùng chung biến `i` cuối cùng là 3.
- `let j` có block scope mỗi vòng lặp, vì vậy mỗi callback giữ một giá trị `j` riêng.

### Câu A3 — Array Methods

Với `const nums = [1,2,3,4,5,6,7,8,9,10];`

1. `const evens = nums.filter(n => n % 2 === 0);`
2. `const times3 = nums.map(n => n * 3);`
3. `const sum = nums.reduce((acc,n) => acc + n, 0);`
4. `const firstAbove7 = nums.find(n => n > 7);`
5. `const hasAbove10 = nums.some(n => n > 10);`
6. `const allAbove0 = nums.every(n => n > 0);`
7. `const descriptions = nums.map(n => `Số ${n} là ${n % 2 === 0 ? 'chẵn' : 'lẻ'}`);`
8. `const reversed = [...nums].reverse();`

### Câu A4 — Object Destructuring & Spread

Kết quả dự đoán:
- `console.log(name, price, ram, color);` => `iPhone 16 25990000 8 Titan`
- `console.log(specs);` => `ReferenceError: specs is not defined` (vì `specs` bị đổi tên khi destructuring lồng nhau)
- `console.log(updated.price);` => `23990000`
- `console.log(updated.sale);` => `true`
- `console.log(product.price);` => `25990000` (gốc không đổi)
- `console.log(product.specs.ram);` => `16` (spread sao chép nông, `specs` vẫn tham chiếu cùng object)

Giải thích: `...product` sao chép top-level properties, nhưng `specs` là object con nên vẫn là reference chung.

## PHẦN C — SUY LUẬN

### Câu C1 — Refactor Code

Refactor đề xuất:
```javascript
const processOrders = (orders) =>
  orders
    .filter(({ status, total }) => status === 'completed' && total > 100000)
    .map(({ id, customer, total }) => ({
      id,
      customer,
      total,
      discount: total * 0.1,
      finalTotal: total * 0.9
    }))
    .sort((a, b) => b.finalTotal - a.finalTotal);
```

### Câu C2 — miniArray

- `miniArray.map` trả về mảng mới với kết quả của hàm `fn`.
- `miniArray.filter` trả về mảng các phần tử thỏa điều kiện.
- `miniArray.reduce` tổng hợp giá trị từ phần tử đầu đến cuối.

---

