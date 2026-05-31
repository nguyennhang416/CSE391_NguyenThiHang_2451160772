// product_catalog app.js
const products = [
  { id: 1, name: 'iPhone 16', price: 25990000, category: 'phone', image: 'https://placehold.co/300x200', rating: 4.5, inStock: true },
  { id: 2, name: 'MacBook Pro', price: 45990000, category: 'laptop', image: 'https://placehold.co/300x200', rating: 4.8, inStock: true },
  { id: 3, name: 'AirPods Pro', price: 6990000, category: 'accessory', image: 'https://placehold.co/300x200', rating: 4.3, inStock: true },
  { id: 4, name: 'iPad Air', price: 16990000, category: 'tablet', image: 'https://placehold.co/300x200', rating: 4.6, inStock: false },
  { id: 5, name: 'Samsung S24', price: 22990000, category: 'phone', image: 'https://placehold.co/300x200', rating: 4.4, inStock: true },
  { id: 6, name: 'Dell XPS 15', price: 35990000, category: 'laptop', image: 'https://placehold.co/300x200', rating: 4.7, inStock: true },
  { id: 7, name: 'Galaxy Buds', price: 3490000, category: 'accessory', image: 'https://placehold.co/300x200', rating: 4.1, inStock: true },
  { id: 8, name: 'Xiaomi Pad 6', price: 7990000, category: 'tablet', image: 'https://placehold.co/300x200', rating: 4.2, inStock: true },
  { id: 9, name: 'Pixel 9', price: 19990000, category: 'phone', image: 'https://placehold.co/300x200', rating: 4.6, inStock: true },
  { id: 10, name: 'ThinkPad X1', price: 32990000, category: 'laptop', image: 'https://placehold.co/300x200', rating: 4.5, inStock: true },
  { id: 11, name: 'Logitech Mouse', price: 1490000, category: 'accessory', image: 'https://placehold.co/300x200', rating: 4.4, inStock: true },
  { id: 12, name: 'Samsung Tab S9', price: 12990000, category: 'tablet', image: 'https://placehold.co/300x200', rating: 4.3, inStock: true }
];

const searchInput = document.querySelector('#searchInput');
const sortSelect = document.querySelector('#sortSelect');
const productGrid = document.querySelector('#productGrid');
const categoryButtons = document.querySelector('#categoryButtons');
const cartCount = document.querySelector('#cartCount');
const darkModeBtn = document.querySelector('#darkModeBtn');
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('#closeModal');
const modalBody = document.querySelector('#modalBody');

let activeCategory = 'all';
let cart = [];

const categoryNames = {
  all: 'Tất cả',
  phone: 'Điện thoại',
  laptop: 'Laptop',
  accessory: 'Phụ kiện',
  tablet: 'Máy tính bảng'
};

function renderCategories() {
  const categories = ['all', ...new Set(products.map(p => p.category))];
  categoryButtons.innerHTML = '';
  categories.forEach(category => {
    const btn = document.createElement('button');
    btn.textContent = categoryNames[category] || category;
    btn.dataset.category = category;
    if (category === activeCategory) btn.classList.add('active');
    btn.addEventListener('click', () => {
      activeCategory = category;
      renderProducts();
      renderCategories();
    });
    categoryButtons.appendChild(btn);
  });
}

function renderProducts() {
  productGrid.innerHTML = '';
  const filtered = products.filter(p => {
    if (activeCategory !== 'all' && p.category !== activeCategory) return false;
    return p.name.toLowerCase().includes(searchInput.value.toLowerCase());
  });
  const sorted = sortProducts(filtered, sortSelect.value);
  sorted.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.addEventListener('click', () => openModal(product));
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    const content = document.createElement('div');
    content.className = 'content';
    content.innerHTML = `
      <h3>${product.name}</h3>
      <p>${categoryNames[product.category] || product.category}</p>
      <p>${product.price.toLocaleString('vi-VN')}đ</p>
      <p>Đánh giá: ${product.rating}</p>
    `;
    const btn = document.createElement('button');
    btn.textContent = 'Thêm vào giỏ';
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(product.id);
    });
    card.appendChild(img);
    card.appendChild(content);
    card.appendChild(btn);
    productGrid.appendChild(card);
  });
}

function sortProducts(list, order) {
  return [...list].sort((a, b) => {
    if (order === 'price-asc') return a.price - b.price;
    if (order === 'price-desc') return b.price - a.price;
    if (order === 'name-asc') return a.name.localeCompare(b.name);
    if (order === 'rating-desc') return b.rating - a.rating;
    return 0;
  });
}

function openModal(product) {
  modalBody.innerHTML = `
    <h2>${product.name}</h2>
    <p>Danh mục: ${categoryNames[product.category] || product.category}</p>
    <p>Giá: ${product.price.toLocaleString('vi-VN')}đ</p>
    <p>Đánh giá: ${product.rating}</p>
    <p>${product.inStock ? 'Còn hàng' : 'Hết hàng'}</p>
  `;
  modal.classList.remove('hidden');
}

function addToCart(productId) {
  cart.push(productId);
  cartCount.textContent = cart.length;
}

searchInput.addEventListener('input', renderProducts);
sortSelect.addEventListener('change', renderProducts);
closeModal.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.add('hidden');
});
darkModeBtn.addEventListener('click', () => document.body.classList.toggle('dark-mode'));

renderCategories();
renderProducts();
