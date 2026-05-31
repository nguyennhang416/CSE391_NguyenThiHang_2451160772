# Component Tree

```text
App
├── Navbar
│   ├── logo
│   └── links[]
│
├── Hero
│   ├── title
│   ├── subtitle
│   └── buttonText
│
├── ProductGrid
│   ├── title
│   └── products[]
│
│   └── ProductCard
│       ├── image
│       ├── name
│       └── price
│
└── Footer
    └── text
```

## Props của từng component

### Navbar

```jsx
{
  logo: string,
  links: [
    {
      label: string,
      href: string
    }
  ]
}
```

### Hero

```jsx
{
  title: string,
  subtitle: string,
  buttonText: string
}
```

### ProductGrid

```jsx
{
  title: string,
  products: [
    {
      id: number,
      name: string,
      price: string,
      image: string
    }
  ]
}
```

### ProductCard

```jsx
{
  image: string,
  name: string,
  price: string
}
```

### Footer

```jsx
{
  text: string
}
```

## Lý do tách component

### Navbar

* Dùng chung cho nhiều trang.
* Dễ thay đổi menu.

### Hero

* Chỉ cần thay đổi nội dung bằng props.
* Tái sử dụng cho nhiều trang khác nhau.

### ProductCard

* Giao diện sản phẩm lặp lại nhiều lần.
* Dùng `.map()` để render danh sách.

### ProductGrid

* Quản lý bố cục grid.
* Tách phần layout khỏi ProductCard.

### Footer

* Dùng chung toàn website.
* Dễ bảo trì và cập nhật.

```
```
