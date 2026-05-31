const form = document.getElementById('weather-form');
const cityInput = document.getElementById('city-input');
const statusEl = document.getElementById('status');
const weatherCard = document.getElementById('weather-card');
const cityNameEl = document.getElementById('city-name');
const descriptionEl = document.getElementById('description');
const temperatureEl = document.getElementById('temperature');
const humidityEl = document.getElementById('humidity');
const windEl = document.getElementById('wind');
const weatherIconEl = document.getElementById('weather-icon');
const historyList = document.getElementById('history-list');

const STORAGE_KEY = 'weatherAppSearchHistory';
let history = [];

init();

function init() {
  history = loadHistory();
  renderHistory();
}

form.addEventListener('submit', async event => {
  event.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return;
  await searchCity(city);
});

historyList.addEventListener('click', async event => {
  const button = event.target.closest('button');
  if (!button) return;
  const city = button.dataset.city;
  if (city) {
    cityInput.value = city;
    await searchCity(city);
  }
});

async function searchCity(city) {
  showStatus('Đang tải...', 'loading');
  weatherCard.classList.add('hidden');

  try {
    const proxyUrl = 'https://api.allorigins.win/raw?url=';
    const endpoint = `https://wttr.in/${encodeURIComponent(city)}?format=j1`;
    const response = await fetch(proxyUrl + encodeURIComponent(endpoint));
    if (!response.ok) {
      throw new Error('Không thể kết nối tới dịch vụ thời tiết');
    }

    const data = await response.json();
    const current = data.current_condition?.[0];
    if (!current) {
      throw new Error('Không tìm thấy dữ liệu thời tiết');
    }

    renderWeather(city, current);
    saveHistory(city);
    showStatus('Tải dữ liệu thành công', 'success');
  } catch (error) {
    showStatus(error.message || 'Lỗi khi tải dữ liệu', 'error');
  }
}

function renderWeather(city, condition) {
  cityNameEl.textContent = city;
  descriptionEl.textContent = condition.weatherDesc?.[0]?.value || 'Không xác định';
  temperatureEl.textContent = `${condition.temp_C} °C`;
  humidityEl.textContent = `${condition.humidity}%`;
  windEl.textContent = `${condition.windspeedKmph} km/h`;

  const iconUrl = condition.weatherIconUrl?.[0]?.value;
  weatherIconEl.innerHTML = iconUrl ? `<img src="${iconUrl}" alt="${condition.weatherDesc?.[0]?.value || 'Weather icon'}">` : '';
  weatherCard.classList.remove('hidden');
}

function saveHistory(city) {
  const normalized = city.trim();
  history = history.filter(item => item.toLowerCase() !== normalized.toLowerCase());
  history.unshift(normalized);
  history = history.slice(0, 5);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
  renderHistory();
}

function loadHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function renderHistory() {
  if (!history.length) {
    historyList.innerHTML = '<li class="empty">Chưa có lịch sử tìm kiếm.</li>';
    return;
  }

  historyList.innerHTML = history
    .map(city => `<li><button type="button" data-city="${city}">${city}</button></li>`)
    .join('');
}

function showStatus(message, type) {
  statusEl.textContent = message;
  statusEl.className = `status ${type}`;
}
