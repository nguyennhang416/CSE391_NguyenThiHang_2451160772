// form_validator app.js
const form = document.querySelector('#registerForm');
const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const passwordInput = document.querySelector('#passwordInput');
const confirmInput = document.querySelector('#confirmInput');
const phoneInput = document.querySelector('#phoneInput');
const submitBtn = document.querySelector('#submitBtn');
const successModal = document.querySelector('#successModal');
const closeSuccess = document.querySelector('#closeSuccess');

const feedback = {
  name: document.querySelector('#nameFeedback'),
  email: document.querySelector('#emailFeedback'),
  password: document.querySelector('#passwordFeedback'),
  confirm: document.querySelector('#confirmFeedback'),
  phone: document.querySelector('#phoneFeedback')
};
const strengthBar = document.querySelector('.strength-bar');

const state = {
  name: false,
  email: false,
  password: false,
  confirm: false,
  phone: false
};

function validateName() {
  const value = nameInput.value.trim();
  const valid = value.length >= 2 && value.length <= 50;
  state.name = valid;
  feedback.name.textContent = valid ? 'OK' : 'Tên phải từ 2 đến 50 ký tự';
}

function validateEmail() {
  const value = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valid = regex.test(value);
  state.email = valid;
  feedback.email.textContent = valid ? 'OK' : 'Email không hợp lệ';
}

function updatePasswordStrength() {
  const value = passwordInput.value;
  let score = 0;
  if (value.length >= 8) score += 1;
  if (/[A-Z]/.test(value)) score += 1;
  if (/[a-z]/.test(value)) score += 1;
  if (/[0-9]/.test(value)) score += 1;
  if (/[^A-Za-z0-9]/.test(value)) score += 1;
  let width = (score / 5) * 100;
  strengthBar.style.setProperty('--strength', `${width}%`);
  strengthBar.querySelector('::after');
  strengthBar.style.background = score >= 4 ? '#22c55e' : score >= 3 ? '#f97316' : '#ef4444';
  const valid = score >= 3;
  state.password = valid;
  feedback.password.textContent = valid ? 'Mật khẩu mạnh' : 'Mật khẩu yếu';
}

function validateConfirm() {
  const valid = confirmInput.value === passwordInput.value && passwordInput.value.length > 0;
  state.confirm = valid;
  feedback.confirm.textContent = valid ? 'OK' : 'Mật khẩu không khớp';
}

function validatePhone() {
  let value = phoneInput.value.replace(/[^0-9]/g, '');
  if (value.length > 3 && value.length <= 6) {
    value = `${value.slice(0,3)}-${value.slice(3)}`;
  } else if (value.length > 6) {
    value = `${value.slice(0,3)}-${value.slice(3,6)}-${value.slice(6,10)}`;
  }
  phoneInput.value = value;
  const valid = /^\d{3}-\d{3}-\d{4}$/.test(value);
  state.phone = valid;
  feedback.phone.textContent = valid ? 'OK' : 'Số điện thoại phải đủ 10 chữ số';
}

function updateSubmitState() {
  submitBtn.disabled = !Object.values(state).every(Boolean);
}

nameInput.addEventListener('input', () => { validateName(); updateSubmitState(); });
emailInput.addEventListener('input', () => { validateEmail(); updateSubmitState(); });
passwordInput.addEventListener('input', () => { updatePasswordStrength(); validateConfirm(); updateSubmitState(); });
confirmInput.addEventListener('input', () => { validateConfirm(); updateSubmitState(); });
phoneInput.addEventListener('input', () => { validatePhone(); updateSubmitState(); });

form.addEventListener('submit', (e) => {
  e.preventDefault();
  successModal.classList.remove('hidden');
});

closeSuccess.addEventListener('click', () => {
  successModal.classList.add('hidden');
});
