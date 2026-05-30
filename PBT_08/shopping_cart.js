// shopping_cart.js — Bài B2
function createCart() {
  let items = [];
  let discount = 0;
  const discountCodes = {
    SALE10: 0.1,
    SALE20: 0.2,
    FREESHIP: 30000
  };

  function findIndex(productId) {
    return items.findIndex(item => item.product.id === productId);
  }

  function addItem(product, quantity = 1) {
    const index = findIndex(product.id);
    if (index >= 0) {
      items[index].quantity += quantity;
    } else {
      items.push({ product, quantity });
    }
  }

  function removeItem(productId) {
    items = items.filter(item => item.product.id !== productId);
  }

  function updateQuantity(productId, newQuantity) {
    const index = findIndex(productId);
    if (index >= 0) {
      if (newQuantity <= 0) removeItem(productId);
      else items[index].quantity = newQuantity;
    }
  }

  function getTotal() {
    const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    if (discount < 0) return subtotal;
    if (typeof discount === 'number') return subtotal - discount;
    return subtotal * (1 - discount);
  }

  function applyDiscount(code) {
    if (code === 'SALE10' || code === 'SALE20') {
      discount = discountCodes[code];
    } else if (code === 'FREESHIP') {
      discount = discountCodes[code];
    } else {
      console.warn('Mã giảm giá không hợp lệ');
    }
  }

  function printCart() {
    console.log('┌───────────────────────────────────────────────────────────┐');
    console.log('│ # │ Sản phẩm         │ SL │ Đơn giá       │ Tổng          │');
    console.log('├───────────────────────────────────────────────────────────┤');
    items.forEach((item, index) => {
      const total = item.product.price * item.quantity;
      console.log(`│ ${String(index + 1).padEnd(2)}│ ${item.product.name.padEnd(15)}│ ${String(item.quantity).padEnd(3)}│ ${item.product.price.toLocaleString('vi-VN').padEnd(13)}│ ${total.toLocaleString('vi-VN').padEnd(13)}│`);
    });
    console.log('├───────────────────────────────────────────────────────────┤');
    console.log(`│ Tổng cộng: ${getTotal().toLocaleString('vi-VN')}đ`.padEnd(58) + '│');
    console.log('└───────────────────────────────────────────────────────────┘');
  }

  function getItemCount() {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }

  function clearCart() {
    items = [];
    discount = 0;
  }

  return {
    addItem,
    removeItem,
    updateQuantity,
    getTotal,
    applyDiscount,
    printCart,
    getItemCount,
    clearCart
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { createCart };
}
// ================= TEST =================

const cart = createCart();

cart.addItem(
    {
        id: 1,
        name: "iPhone 16",
        price: 25990000
    },
    1
);

cart.addItem(
    {
        id: 3,
        name: "AirPods Pro",
        price: 6990000
    },
    2
);

// tăng quantity lên 2
cart.addItem(
    {
        id: 1,
        name: "iPhone 16",
        price: 25990000
    },
    1
);

cart.printCart();

cart.applyDiscount("SALE10");

cart.printCart();

console.log(
    "Số SP:",
    cart.getItemCount()
);

cart.removeItem(3);

console.log(
    "Sau xóa:",
    cart.getItemCount()
);