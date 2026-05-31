const searchInput = document.getElementById('search-input');
const newUserButton = document.getElementById('new-user-button');
const messageBox = document.getElementById('message');
const loadingEl = document.getElementById('loading');
const userListEl = document.getElementById('user-list');
const formPanel = document.getElementById('user-form-panel');
const formTitle = document.getElementById('form-title');
const userForm = document.getElementById('user-form');
const cancelButton = document.getElementById('cancel-button');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const websiteInput = document.getElementById('website');

let users = [];
let editingUserId = null;

init();

function init() {
  bindEvents();
  loadUsers();
}

function bindEvents() {
  newUserButton.addEventListener('click', () => openForm());
  searchInput.addEventListener('input', () => renderUsers());
  cancelButton.addEventListener('click', closeForm);
  userForm.addEventListener('submit', handleSubmit);
  userListEl.addEventListener('click', async event => {
    const button = event.target.closest('button');
    if (!button) return;
    const action = button.dataset.action;
    const id = Number(button.dataset.id);
    if (action === 'edit') {
      openForm(id);
    } else if (action === 'delete') {
      await handleDelete(id);
    }
  });
}

async function loadUsers() {
  showLoading(true);
  try {
    users = await api.getUsers();
    renderUsers();
  } catch (error) {
    showError(error.message);
  } finally {
    showLoading(false);
  }
}

function renderUsers() {
  const query = searchInput.value.trim().toLowerCase();
  const filtered = users.filter(user => {
    return (
      user.name.toLowerCase().includes(query) ||
      user.email.toLowerCase().includes(query)
    );
  });

  if (!filtered.length) {
    userListEl.innerHTML = '<div class="user-card"><p>Không có user phù hợp.</p></div>';
    return;
  }

  userListEl.innerHTML = filtered
    .map(user => `
      <div class="user-card">
        <div>
          <h3>${escapeHtml(user.name)}</h3>
          <p><strong>Email:</strong> ${escapeHtml(user.email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(user.phone || 'Chưa có')}</p>
          <p><strong>Website:</strong> ${escapeHtml(user.website || 'Chưa có')}</p>
        </div>
        <div class="card-actions">
          <button type="button" class="edit" data-action="edit" data-id="${user.id}">Edit</button>
          <button type="button" class="delete" data-action="delete" data-id="${user.id}">Delete</button>
        </div>
      </div>
    `)
    .join('');
}

function showLoading(show) {
  loadingEl.classList.toggle('hidden', !show);
}

function showError(message) {
  messageBox.textContent = message;
  messageBox.className = 'message error';
  messageBox.classList.remove('hidden');
  setTimeout(() => {
    messageBox.classList.add('hidden');
  }, 4000);
}

function showSuccess(message) {
  messageBox.textContent = message;
  messageBox.className = 'message success';
  messageBox.classList.remove('hidden');
  setTimeout(() => {
    messageBox.classList.add('hidden');
  }, 4000);
}

function openForm(userId = null) {
  editingUserId = userId;
  formPanel.classList.remove('hidden');
  if (userId) {
    const user = users.find(item => item.id === userId);
    if (!user) return;
    formTitle.textContent = 'Chỉnh sửa người dùng';
    nameInput.value = user.name;
    emailInput.value = user.email;
    phoneInput.value = user.phone || '';
    websiteInput.value = user.website || '';
  } else {
    formTitle.textContent = 'Thêm người dùng mới';
    userForm.reset();
  }
  window.scrollTo({ top: formPanel.offsetTop - 20, behavior: 'smooth' });
}

function closeForm() {
  editingUserId = null;
  formPanel.classList.add('hidden');
  userForm.reset();
}

async function handleSubmit(event) {
  event.preventDefault();
  const payload = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    phone: phoneInput.value.trim(),
    website: websiteInput.value.trim(),
  };

  if (!payload.name || !payload.email) {
    showError('Vui lòng điền cả tên và email.');
    return;
  }

  try {
    if (editingUserId) {
      const updatedUser = await api.updateUser(editingUserId, payload);
      users = users.map(user => (user.id === editingUserId ? { ...user, ...updatedUser } : user));
      showSuccess('Cập nhật user thành công.');
    } else {
      const createdUser = await api.createUser(payload);
      users.unshift(createdUser);
      showSuccess('Tạo user mới thành công.');
    }
    renderUsers();
    closeForm();
  } catch (error) {
    showError(error.message);
  }
}

async function handleDelete(id) {
  const confirmDelete = confirm('Bạn có chắc chắn muốn xóa user này?');
  if (!confirmDelete) return;

  try {
    await api.deleteUser(id);
    users = users.filter(user => user.id !== id);
    renderUsers();
    showSuccess('Xóa user thành công.');
  } catch (error) {
    showError(error.message);
  }
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
