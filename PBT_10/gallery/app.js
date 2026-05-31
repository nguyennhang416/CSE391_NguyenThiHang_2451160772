const gallery = document.getElementById("gallery");
const loading = document.getElementById("loading");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close-btn");

let page = 1;
let isLoading = false;

// Load ảnh
async function loadMorePhotos() {
    if (isLoading) return;

    isLoading = true;
    loading.style.display = "block";

    try {
        const response = await fetch(
            `https://picsum.photos/v2/list?page=${page}&limit=20`
        );

        const photos = await response.json();

        photos.forEach(photo => {
            const card = document.createElement("div");
            card.className = "photo-card";

            const img = document.createElement("img");

            // lazy loading
            img.dataset.src = photo.download_url;

            card.appendChild(img);
            gallery.appendChild(card);

            // mở lightbox
            card.addEventListener("click", () => {
                lightbox.style.display = "flex";
                lightboxImg.src = photo.download_url;
            });

            imageObserver.observe(img);
        });

        page++;

    } catch (error) {
        console.error(error);
    }

    loading.style.display = "none";
    isLoading = false;
}

// Lazy Loading Images
const imageObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                const img = entry.target;

                img.src = img.dataset.src;

                observer.unobserve(img);
            }

        });
    },
    {
        rootMargin: "100px"
    }
);

// Infinite Scroll
const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        loadMorePhotos();
    }
});

observer.observe(document.querySelector("#load-trigger"));

// Đóng lightbox
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// Load lần đầu
loadMorePhotos();