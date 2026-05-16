# Bài 1.1 — Header + Hero Section

## Mục tiêu
Xây dựng:
- Header navigation
- Hero section
- CTA button
- Responsive hamburger menu bằng CSS-only

---

# Cấu trúc project

```text
portfolio/
│── index.html
│── style.css
```

---

# File `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Portfolio</title>

    <!-- CSS -->
    <link rel="stylesheet" href="style.css" />
</head>
<body>

    <!-- HEADER -->
    <header class="header">
        <div class="container">

            <!-- Logo -->
            <div class="logo">
                MyPortfolio
            </div>

            <!-- Checkbox -->
            <input type="checkbox" id="menu-toggle">

            <!-- Hamburger -->
            <label for="menu-toggle" class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </label>

            <!-- Navigation -->
            <nav class="navbar">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Contact</a>
            </nav>

        </div>
    </header>

    <!-- HERO -->
    <main class="hero">

        <div class="hero-content">

            <h1>
                Hello, I'm Hằng
            </h1>

            <p>
                Frontend Developer & UI Designer
            </p>

            <a href="#" class="cta-btn">
                View My Work
            </a>

        </div>

    </main>

</body>
</html>
```

---

# File `style.css`

```css
/* =========================
   RESET CSS
========================= */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* =========================
   CSS VARIABLES
========================= */
:root {

    --primary-color: #2563eb;
    --dark-color: #111827;
    --light-color: #ffffff;
    --gray-color: #6b7280;

    --transition: 0.3s ease;
}

/* =========================
   GLOBAL
========================= */
body {

    font-family: Arial, Helvetica, sans-serif;

    background-color: #f9fafb;

    color: var(--dark-color);
}

a {
    text-decoration: none;
}

/* =========================
   CONTAINER
========================= */
.container {

    width: 90%;
    max-width: 1200px;

    margin: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* =========================
   HEADER
========================= */
.header {

    position: sticky;
    top: 0;

    background-color: white;

    border-bottom: 1px solid #e5e7eb;

    padding: 20px 0;

    z-index: 1000;
}

/* =========================
   LOGO
========================= */
.logo {

    font-size: 1.5rem;
    font-weight: bold;

    color: var(--primary-color);
}

/* =========================
   NAVBAR
========================= */
.navbar {

    display: flex;
    gap: 30px;
}

.navbar a {

    color: var(--dark-color);

    font-weight: 500;

    transition: var(--transition);
}

.navbar a:hover {

    color: var(--primary-color);
}

/* =========================
   HERO SECTION
========================= */
.hero {

    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    padding: 20px;
}

.hero-content h1 {

    font-size: 3rem;

    margin-bottom: 20px;
}

.hero-content p {

    font-size: 1.2rem;

    color: var(--gray-color);

    margin-bottom: 30px;
}

/* =========================
   CTA BUTTON
========================= */
.cta-btn {

    display: inline-block;

    background-color: var(--primary-color);

    color: white;

    padding: 14px 28px;

    border-radius: 8px;

    font-weight: bold;

    transition: var(--transition);
}

.cta-btn:hover {

    background-color: #1d4ed8;

    transform: translateY(-3px);
}

/* =========================
   HAMBURGER MENU
========================= */
#menu-toggle {
    display: none;
}

.hamburger {

    display: none;

    flex-direction: column;

    gap: 5px;

    cursor: pointer;
}

.hamburger span {

    width: 25px;
    height: 3px;

    background-color: var(--dark-color);

    border-radius: 5px;
}

/* =========================
   RESPONSIVE
========================= */
@media (max-width: 768px) {

    .hamburger {
        display: flex;
    }

    .navbar {

        position: absolute;

        top: 80px;
        left: 0;

        width: 100%;

        background-color: white;

        flex-direction: column;

        align-items: center;

        padding: 20px 0;

        display: none;
    }

    #menu-toggle:checked ~ .navbar {
        display: flex;
    }

    .hero-content h1 {
        font-size: 2.2rem;
    }

    .hero-content p {
        font-size: 1rem;
    }
}
```

---

# Giải thích

## 1. Semantic HTML

Sử dụng:
- `<header>`
- `<nav>`
- `<main>`

Giúp:
- SEO tốt hơn
- Code dễ đọc
- Accessibility tốt hơn

---

## 2. Sticky Header

```css
position: sticky;
top: 0;
```

Header sẽ dính trên cùng khi scroll.

---

## 3. Hero Full Screen

```css
height: 100vh;
```

Hero section chiếm toàn bộ chiều cao màn hình.

---

## 4. Flexbox Centering

```css
display: flex;
justify-content: center;
align-items: center;
```

Căn giữa nội dung theo:
- chiều ngang
- chiều dọc

---

## 5. CTA Hover Effect

```css
transform: translateY(-3px);
```

Button nổi lên khi hover.

---

## 6. CSS-only Hamburger Menu

```css
#menu-toggle:checked ~ .navbar
```

Khi checkbox được checked:
- menu hiện ra
- không cần JavaScript

---


```