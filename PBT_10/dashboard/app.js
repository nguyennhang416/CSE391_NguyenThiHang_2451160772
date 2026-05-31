const userWidget =
    document.getElementById("userWidget");

const weatherWidget =
    document.getElementById("weatherWidget");

const countryWidget =
    document.getElementById("countryWidget");

const globalLoading =
    document.getElementById("globalLoading");

const loadTime =
    document.getElementById("loadTime");

const refreshBtn =
    document.getElementById("refreshBtn");

function showWidgetLoading() {

    userWidget.innerHTML =
        '<p class="loading">Loading...</p>';

    weatherWidget.innerHTML =
        '<p class="loading">Loading...</p>';

    countryWidget.innerHTML =
        '<p class="loading">Loading...</p>';
}

function renderWidget(index, data) {

    switch(index){

        case 0:
            userWidget.innerHTML = `
                <div class="success">
                    <h3>${data.name}</h3>
                    <p>Email: ${data.email}</p>
                    <p>Phone: ${data.phone}</p>
                </div>
            `;
            break;

        case 1:
            weatherWidget.innerHTML = `
                <div class="success">
                    <h3>Hà Nội</h3>
                    <p>Nhiệt độ:
                        ${data.current.temperature_2m}°C
                    </p>
                    <p>Gió:
                        ${data.current.wind_speed_10m} km/h
                    </p>
                </div>
            `;
            break;

        case 2:
            countryWidget.innerHTML = `
                <div class="success">
                    <h3>${data.name.common}</h3>
                    <p>Thủ đô:
                        ${data.capital?.[0]}
                    </p>
                    <p>Dân số:
                        ${data.population.toLocaleString()}
                    </p>
                </div>
            `;
            break;
    }
}

function renderWidgetError(index, message){

    const html = `
        <div class="error">
            Error: ${message}
        </div>
    `;

    switch(index){

        case 0:
            userWidget.innerHTML = html;
            break;

        case 1:
            weatherWidget.innerHTML = html;
            break;

        case 2:
            countryWidget.innerHTML = html;
            break;
    }
}

// Promise.allSettled — xử lý khi 1 API lỗi
async function loadDashboard() {

    showWidgetLoading();

    globalLoading.style.display = "block";

    const startTime = Date.now();

    const results =
        await Promise.allSettled([

            fetch(
                "https://jsonplaceholder.typicode.com/users/1"
            ).then(r => r.json()),

            fetch(
                "https://api.open-meteo.com/v1/forecast?latitude=21.03&longitude=105.85&current=temperature_2m,wind_speed_10m"
            ).then(r => r.json()),

            fetch(
                "https://restcountries.com/v3.1/name/vietnam?fullText=true"
            )
            .then(r => r.json())
            .then(data => data[0])

        ]);

    results.forEach((result,index)=>{

        if(result.status === "fulfilled"){

            renderWidget(
                index,
                result.value
            );

        }else{

            renderWidgetError(
                index,
                result.reason.message
            );
        }
    });

    const time =
        Date.now() - startTime;

    loadTime.textContent =
        `Data loaded in ${time} ms`;

    globalLoading.style.display = "none";

    console.log(
        `Loaded in ${time}ms`
    );
}

refreshBtn.addEventListener(
    "click",
    loadDashboard
);

loadDashboard();