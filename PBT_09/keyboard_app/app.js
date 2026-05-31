const imageDisplay = document.querySelector('#imageDisplay');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');
const openPalette = document.querySelector('#openPalette');
const paletteOverlay = document.querySelector('#paletteOverlay');
const commandInput = document.querySelector('#commandInput');
const commandList = document.querySelector('#commandList');

const images = [
  'Image 1', 'Image 2', 'Image 3', 'Image 4', 'Image 5', 'Image 6', 'Image 7', 'Image 8', 'Image 9'
];
const commands = [
  'Đi tới gallery',
  'Mở cài đặt',
  'Hiển thị trợ giúp',
  'Chuyển chủ đề'
];
let currentIndex = 0;
let paletteOpen = false;

function updateDisplay() {
  imageDisplay.textContent = images[currentIndex];
}

function showPalette() {
  paletteOpen = true;
  paletteOverlay.classList.remove('hidden');
  commandInput.value = '';
  commandInput.focus();
  renderCommands('');
}

function hidePalette() {
  paletteOpen = false;
  paletteOverlay.classList.add('hidden');
}

function renderCommands(filter = '') {
  const normalized = filter.trim().toLowerCase();
  commandList.innerHTML = '';
  commands
    .filter(cmd => cmd.toLowerCase().includes(normalized))
    .forEach(cmd => {
      const li = document.createElement('li');
      li.textContent = cmd;
      commandList.appendChild(li);
    });
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateDisplay();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateDisplay();
}

prevBtn.addEventListener('click', prevImage);
nextBtn.addEventListener('click', nextImage);
openPalette.addEventListener('click', showPalette);

commandInput.addEventListener('input', (e) => {
  renderCommands(e.target.value);
});

commandInput.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    hidePalette();
    return;
  }
  if (e.key === 'Enter') {
    e.preventDefault();
    hidePalette();
  }
});

document.addEventListener('keydown', (e) => {
  if (paletteOpen) return;

  if (e.ctrlKey && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    showPalette();
    return;
  }

  if (e.key === 'ArrowRight') {
    nextImage();
    return;
  }

  if (e.key === 'ArrowLeft') {
    prevImage();
    return;
  }

  if (/^[1-9]$/.test(e.key)) {
    currentIndex = Number(e.key) - 1;
    updateDisplay();
    return;
  }
});

updateDisplay();
renderCommands();
