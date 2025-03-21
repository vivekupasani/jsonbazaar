const products = [
  {
    id: 1,
    name: "Crystal Mug",
    price: 12.99,
    description: "A shiny mug for your coffee.",
    image:
      "https://imgs.search.brave.com/jX-S2Tu3DTT9pPZQsL_kF1m22eOjAdOKYvinRJpwonE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/OTFBK3hzUmJDS0wu/anBn",
  },
  {
    id: 2,
    name: "Leather Wallet",
    price: 24.5,
    description: "Sleek and durable wallet.",
    image:
      "https://imgs.search.brave.com/Jl1aPwxAFWnb69HSutWUfC4o0tZYHhrqnMInVCHTIfk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzExOTE0NDQ1L3Iv/aWwvM2YxMWY0LzQy/NjkzNTk5NjkvaWxf/NjAweDYwMC40MjY5/MzU5OTY5X2JmMmsu/anBn",
  },
  {
    id: 3,
    name: "Wooden Chair",
    price: 89.0,
    description: "Rustic chair for any room.",
    image:
      "https://imgs.search.brave.com/R3278KQZqn77IzgkzGkzYvqSMWlL9CQq0yUs3j4CX1Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU1/NDI5NzU5L3Bob3Rv/L3dvb2Rlbi1zdW5i/ZWFkLW9uLXdoaXRl/LWJhY2tncm91bmQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWctZVRwb1k2dEQ0/WGhjMWFZUWRPS3BS/MzhqSS1kaGMyUm5s/cDFybE1KWDQ9",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 45.75,
    description: "Portable sound solution.",
    image:
      "https://imgs.search.brave.com/e3DMW-8eWdPiBXc7en155SlCW9zUJvR0wcZ0wpacZS8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuZWxlY3Ryb25p/Y2V4cHJlc3MuY29t/L3Byb2R1Y3Quci54/bC9qYmwteHRyZW1l/LTMtcG9ydGFibGUt/Ymx1ZXRvb3RoLXNw/ZWFrZXItYmxhY2st/eHRyZW1lM2Jsay1h/bmdsZWQtdmlldy5q/cGc",
  },
  {
    id: 5,
    name: "Silk Scarf",
    price: 19.95,
    description: "Elegant accessory for all seasons.",
    image:
      "https://imgs.search.brave.com/7Tu30iZvXezxPXh2WtOqYn1VKo6KMOwHDVauNU0Iju4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lY2hv/bmV3eW9yay5jb20v/Y2RuL3Nob3AvZmls/ZXMvS1MtRUNITy1T/cHJpbmcyNV8wMjg3/OS5qcGc_dj0xNzQw/MTY3OTQwJndpZHRo/PTUzMw",
  },
  {
    id: 6,
    name: "Steel Watch",
    price: 120.0,
    description: "Timeless wristpiece.",
    image:
      "https://imgs.search.brave.com/xXGfNZ4dKwOSzE6iL8bLCe5wgQRSIYMOhv-7NXuoDT0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hYm91/dHZpbnRhZ2UuY29t/L2Nkbi9zaG9wL2Zp/bGVzL1dCaUplSjRS/U2UxbDlCZWp2RzFO/XzE4MTVfU3RlZWxf/V2hpdGVfZmxpcF8x/NTAweDE1MDBfZTZh/ZjAzMTAtNWJmMy00/MzIyLTg0MTAtZjBk/NzkxZjI1MDQxLnBu/Zz9mb3JtYXQ9anBn/JnY9MTcxOTgzODU3/OCZ3aWR0aD0xNTAw",
  },
  {
    id: 7,
    name: "Canvas Backpack",
    price: 34.99,
    description: "Perfect for travel.",
    image:
      "https://imgs.search.brave.com/0mZeVs2c3MB-P5LjSgU3vSQSkBm7Q2xAKOWGkWBjEks/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wYWNh/bnZhLmNvbS9jZG4v/c2hvcC9wcm9kdWN0/cy9JTUdfMTQyNi5q/cGc_dj0xNjY0NTUx/NzY0JndpZHRoPTUz/Mw",
  },
  {
    id: 8,
    name: "Glass Lamp",
    price: 67.25,
    description: "Warm ambient lighting.",
    image:
      "https://imgs.search.brave.com/_GbMg4I124P69eARaWBLTs06d1g_vXvdgWH-Ifu5d2Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaW1v/bnBlYXJjZS5jb20v/Y2RuL3Nob3AvZmls/ZXMvNDE1MS13YXJy/ZW4tcy1sYW1wMTA5/NTUuanBnP3Y9MTcz/MDMxNTAyOCZ3aWR0/aD0yMDQ4",
  },
  {
    id: 9,
    name: "Ceramic Vase",
    price: 28.0,
    description: "Decorative floral holder.",
    image:
      "https://imgs.search.brave.com/y21uNs7UfjM73uDKutZ2u3eHPTHi1goZs6iW5lf9MU4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzYz/YWQyOTMwMGZkZjY4/MjRhNGIzYmM2ZS8x/NzM3OTQ4MzExNzE2/LUhKUU9OT1pUQlA4/TTZaMFo4UTk0LzM5/N0Y0RDlGLUI1RTMt/NEJGNS1CRjdFLTNC/QzUyMUJDRUJCRC5q/cGVn",
  },
  {
    id: 10,
    name: "Running Shoes",
    price: 79.99,
    description: "Light and fast footwear.",
    image:
      "https://imgs.search.brave.com/VVCLKI5sk0HqH3h4UYwEDpGNUAqVZQFbNJ98kfv3Drg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDU4/OTU3ODU5L3Bob3Rv/L25pa2UtcnVubmlu/Zy1zaG9lLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1DOGRH/RDZiN3RtS012YXVS/aHB4bWwtMzhMVkZs/TnFpaE9qWUYyZEsx/VkdvPQ",
  },
  {
    id: 11,
    name: "Cotton T-Shirt",
    price: 15.0,
    description: "Casual everyday wear.",
    image:
      "https://imgs.search.brave.com/9rDmt_ef7Bc7dmRj1SGNWL1Y_u5cktpZC4fwXGvj-B4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93ZXN0/ZXJucmlzZS5jb20v/Y2RuL3Nob3AvZmls/ZXMvNDAyQTIzOTUu/anBnP3Y9MTczNzUz/ODAwOCZ3aWR0aD0x/MDAw",
  },
  {
    id: 12,
    name: "Marble Clock",
    price: 52.5,
    description: "Modern desk accessory.",
    image:
      "https://imgs.search.brave.com/_vljtjlwugzFtFrKozZRRktfJpc2HkR5srzRr3Tqw50/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5jbXNtYXguY29t/L3RpY3lkbTRraDNl/emVqaGx2djF3aS9w/YWdldG4wMzc0Mi5q/cGc",
  },
  {
    id: 13,
    name: "Velvet Cushion",
    price: 22.75,
    description: "Soft and cozy pillow.",
    image:
      "https://imgs.search.brave.com/w8QJSDVTPZgwIRLyMAHUY9zNGT9lRMCsYPui5D9Dn2o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zYWFy/ZGUuY29tL2Nkbi9z/aG9wL2ZpbGVzL1ZM/Q0FOQVRPTElBXzEu/anBnP3Y9MTY4MzY5/NjQ5MiZ3aWR0aD0x/MTAw",
  },
  {
    id: 14,
    name: "Bamboo Mat",
    price: 18.9,
    description: "Eco-friendly floor cover.",
    image:
      "https://imgs.search.brave.com/54VaxRgvm9TUA7nFa10QZdKch2PJ4SFlLm7EEUKmPIw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hbmpp/bW91bnRhaW4uY29t/L2Nkbi9zaG9wL2Zp/bGVzL0FNQjI0MDU1/LS0tZW52aXJvbm1l/bnRhbC5qcGc_dj0x/NzE3NjAzNDgzJndp/ZHRoPTE0NDU",
  },
  {
    id: 15,
    name: "Copper Pan",
    price: 39.95,
    description: "Non-stick cooking essential.",
    image:
      "https://imgs.search.brave.com/nJNkQey2cYcHYvsomhQz2j8pY6XNkn-3EVkfv4cICUQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Z290aGFtc3RlZWwu/Y29tL2Nkbi9zaG9w/L2ZpbGVzLzI2OTct/Mi5qcGc_dj0xNzM5/MzkwNTkxJndpZHRo/PTE1MDA",
  },
  {
    id: 16,
    name: "Linen Curtains",
    price: 45.0,
    description: "Light-filtering drapes.",
    image:
      "https://imgs.search.brave.com/6upMEWieOPMrwWQQs85YERDL7MTptPTDSyRBsE2Gb8Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90d29w/YWdlc2N1cnRhaW5z/LmNvbS9jZG4vc2hv/cC9maWxlcy9saW5l/bi1jdXJ0YWluLTEu/d2VicD92PTE3MjEy/OTI5NjQmd2lkdGg9/MTUwMA",
  },
  {
    id: 17,
    name: "Iron Kettle",
    price: 33.25,
    description: "Classic tea brewer.",
    image:
      "https://imgs.search.brave.com/7TQm6ksrG-pTmd6QxzFcIaV7dyuWBP0WkG5UY-5n5c4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9nb29k/LWxpdmVyLmNvbS9j/ZG4vc2hvcC9maWxl/cy8wMV9kNmZlYzE0/MS05ZGY2LTRhZjIt/OGZhZC1jMDVlY2U3/MmViZmZfMTIwMHgu/anBnP3Y9MTczMTEw/NzE2Mw",
  },
  {
    id: 18,
    name: "Wool Blanket",
    price: 59.99,
    description: "Warm and snug cover.",
    image:
      "https://imgs.search.brave.com/geQoaRqKkKWnqzU5Rr1sADZ509e5D_aSvobLWsPomCM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZW50Lndvb2xvdmVy/cy5jb20vaW1nLzUw/MHg1NzIvNDMxMDlf/cDM1NF9ncmV5Y29t/Ym9fd181LmpwZw",
  },
  {
    id: 19,
    name: "Oak Table",
    price: 199.0,
    description: "Sturdy dining surface.",
    image:
      "https://imgs.search.brave.com/tnBWkomTJY1UhfrI2VmOGFUdMpWYZdWjqWf5ViGjwcQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA2/MTMvNzQ1Ni8yNDc3/L2ZpbGVzL1RyYWRp/dGlvbmFsX1JvdW5k/X1NvbGlkX09ha19E/aW5pbmdfVGFibGVf/U2V0LmpwZz92PTE3/MzA5ODAxNjI",
  },
  {
    id: 20,
    name: "Gold Necklace",
    price: 89.5,
    description: "Dazzling jewelry piece.",
    image:
      "https://imgs.search.brave.com/um4AnXcbsSQdondMfLiuHaxZPmys_1KCIhPyiymb9Wk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hbGx1/cmVqZXdlbGxlcnku/Y28vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMDYvd2ViLXJl/cy1hbGx1cmUtNDYt/MTAyNHgxMDI0Lmpw/Zw",
  },
  {
    id: 21,
    name: "Porcelain Plate",
    price: 14.75,
    description: "Elegant dinnerware.",
    image:
      "https://imgs.search.brave.com/uk5qGeNZ5jzEf_V6w8oruLWfqBQUyVyWGOigikVpMl0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vQmV0/dGVyLUhvbWVzLUdh/cmRlbnMtNS1TcXVh/cmUtQXBwZXRpemVy/LVBsYXRlLVdoaXRl/LVBvcmNlbGFpbi1T/ZXQtb2YtOF9hNTBh/YzU3NS05Y2Q5LTQx/MWItODM2Zi0zMmMx/OGNjODkwNWVfMi5j/NzY3MDkzOTlhYTcz/YjZjNWU5ODcyMTk3/ZDBlNzY1YS5qcGVn/P29kbkhlaWdodD01/ODAmb2RuV2lkdGg9/NTgwJm9kbkJnPUZG/RkZGRg",
  },
  {
    id: 22,
    name: "Suede Jacket",
    price: 110.0,
    description: "Stylish outerwear.",
    image:
      "https://imgs.search.brave.com/dlnvPRm3CJkRi1kH-Czi2_smFQb59BtiWtJc76Ap_Zs/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cmFscGhsYXVyZW4u/Y29tL29uL2RlbWFu/ZHdhcmUuc3RhdGlj/Ly0vTGlicmFyeS1T/aXRlcy1SYWxwaExh/dXJlbl9OQV9MaWJy/YXJ5L2VuX1VTL3Yx/NzI3NjkwOTI1ODIy/L2ltZy8yMDI0MDkv/MjAyNDA5MTctd29t/ZW4tamFja2V0cy1j/b2F0cy12ZXN0cy1x/dWljay1maWx0ZXIv/MDkxN193X291dGVy/d2Vhcl9maWx0ZXJf/YzAxZV9pbWcuanBn/PyRzdGF0aWNsaW5r/JA",
  },
  {
    id: 23,
    name: "Clay Pot",
    price: 25.99,
    description: "Rustic plant holder.",
    image:
      "https://imgs.search.brave.com/ZLGgMG0DAIdYsdOJZHXf2jH-wkVadgxoNdYogmiKp7c/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzFaVlJrT25XV0wu/anBn",
  },
  {
    id: 24,
    name: "USB Charger",
    price: 9.95,
    description: "Fast-charging adapter.",
    image:
      "https://imgs.search.brave.com/W0sycJLd3EZ6-o75_-vrwzyCrwNyF7FR0ijTWZul7Ms/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9zZW8vQmVs/a2luLTI0Vy1EdWFs/LVBvcnQtVVNCLUEt/V2FsbC1DaGFyZ2Vy/LTVmdC1MaWdodG5p/bmctdG8tVVNCLUEt/Q2FibGUtU2lsdmVy/X2RjNGE3ZTc2LWNj/OTAtNGY2ZS1hOGU0/LTUzYzk1ZThmZWI1/Zi45MWJiM2EyYTVm/YzM4Yzk5YzkyMjg5/N2Q2NjkwZjg2My5q/cGVnP29kbkhlaWdo/dD01ODAmb2RuV2lk/dGg9NTgwJm9kbkJn/PUZGRkZGRg",
  },
  {
    id: 25,
    name: "Pine Shelf",
    price: 47.5,
    description: "Simple storage solution.",
    image:
      "https://imgs.search.brave.com/OcWoReXMSz-56I4TrUuOQoKPsIEPDtMdcDWWvw9tmDU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9uYXRo/YW5qYW1lcy5jb20v/Y2RuL3Nob3AvZmls/ZXMvNjY4MDEtSGVy/by1fMS5qcGc_dj0x/NzA5NTgxMTk4Jndp/ZHRoPTIwMDA",
  },
  {
    id: 26,
    name: "Felt Hat",
    price: 29.0,
    description: "Trendy headwear.",
    image:
      "https://imgs.search.brave.com/NptQ9M8cQ-e_otcsiJMNxCSOkU7x4fnqN72YkbUTLGQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/b3V0YmFja3RyYWRp/bmcuY29tL2Nkbi9z/aG9wL2ZpbGVzL291/dGJhY2stdHJhZGlu/Zy1jb21wYW55LXdv/b2wtZmVsdC1oYXRz/LXNhbnRhLWZlLXdv/b2wtaGF0LTMzMjcw/Njc0Nzg0MzkwLmpw/Zz92PTE3MTgwMzg2/NDMmd2lkdGg9NDYw",
  },
  {
    id: 27,
    name: "Brass Frame",
    price: 36.25,
    description: "Photo display piece.",
    image:
      "https://imgs.search.brave.com/OiBp48P3IdpAgHEZsqUJhCLo2jvS0Qlo9ZXNKTZWFQU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jYi5z/Y2VuZTcuY29tL2lz/L2ltYWdlL0NyYXRl/L0JydXNoZWRCcmFz/c0ZyYW1lR2FsbGVy/eVM1U0hGMTgvJHdl/Yl9wZHBfY2Fyb3Vz/ZWxfbWVkJC8yNDAy/MDExNzEyMTcvYnJ1/c2hlZC1icmFzcy1w/aWN0dXJlLWZyYW1l/LWdhbGxlcnktc2V0/LW9mLTUuanBn",
  },
  {
    id: 28,
    name: "Denim Jeans",
    price: 55.0,
    description: "Classic pants.",
    image:
      "https://imgs.search.brave.com/lTT1sCfP5kKOpOTNlJphx8kqIwgMqSxFvcqBpXg9LKA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kZWFy/Ym9ybmRlbmltLnVz/L2Nkbi9zaG9wL2Nv/bGxlY3Rpb25zL21l/bnMtamVhbnMtY290/dG9uLmpwZz92PTE2/NDQyMjYwNTc",
  },
  {
    id: 29,
    name: "Paper Notebook",
    price: 7.99,
    description: "For all your notes.",
    image:
      "https://imgs.search.brave.com/2dvtJ_Ye9l-IdafUBxQMQznIZBU_BkmNagbbRioZh-I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzkzLzMxLzc1/LzM2MF9GXzQ5MzMx/NzUyNl9hVHJWQ0R6/endua3pOM1FXQTJJ/dUNmWmZPNU5NS2Z3/cC5qcGc",
  },
  {
    id: 30,
    name: "Titanium Ring",
    price: 65.75,
    description: "Sleek finger accessory.",
    image:
      "https://imgs.search.brave.com/UPaYstHDdiNbN4GzH0M7bUGkLBUFOL-OclVs7ghJo0Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dGl0YW5pdW1yaW5n/cy5jb20vY2RuL3No/b3AvcHJvZHVjdHMv/VElUQU4zXzIyMHgu/anBnP3Y9MTUzMzMx/OTQxMA",
  },
  {
    id: 31,
    name: "Plastic Bin",
    price: 12.5,
    description: "Handy organizer.",
    image:
      "https://imgs.search.brave.com/E7nW3TSoVqVu9g3tiY5VjHv18TALb38bmp14IS7TmW4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjE0NENKREVjWUwu/anBn",
  },
  {
    id: 32,
    name: "Silicone Case",
    price: 8.95,
    description: "Phone protection.",
    image:
      "https://imgs.search.brave.com/WRZoDTcbUSQfh1xeshENAR_mgWfkrE2R8nBzv-cqmcE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb3Zl/cml0dXAuY29tL2Nk/bi9zaG9wL2ZpbGVz/L01vY2stdXAyLnBu/Zz92PTE3Mzg5MDUy/MjQmd2lkdGg9ODAw",
  },
  {
    id: 33,
    name: "Flannel Shirt",
    price: 32.0,
    description: "Cozy layered top.",
    image:
      "https://imgs.search.brave.com/lGOlX-bVjD3T1Jffvq94t1zU-fD0hvNXFXh3U4MGJ-U/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/dW50dWNraXQuY29t/L2Nkbi9zaG9wL2Zp/bGVzL1JBWS1VTlRV/Q0tJVC00MTkzM0dy/ZS1GTEFOLVBMQUlE/LUdSRUVOLTFfNTQw/eC5qcGc_dj0xNzI4/NDg5NTM0",
  },
  {
    id: 34,
    name: "Aluminum Bottle",
    price: 16.99,
    description: "Reusable water container.",
    image:
      "https://imgs.search.brave.com/Z8z3qX728b8lid-IjQfay9557h_3oaeFZD_vwP-Zz4w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGxpZ2h0c3Bl/ZWQuY29tL3Nob3Bz/LzYzODEyMy9maWxl/cy8zNjYyMjQ1OC84/MDB4ODAweDEvMi1v/ei1hbHVtaW51bS1w/dW1wLWJvdHRsZS5q/cGc",
  },
  {
    id: 35,
    name: "Rattan Basket",
    price: 27.5,
    description: "Woven storage option.",
    image:
      "https://imgs.search.brave.com/Zrh_8G_mPqvN37ddo1_AauWGH8TXFiZcwkvM7_crZsA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF0YmxCOEpndEwu/anBn",
  },
];

exports.getAllProducts = (req, res) => {
  res.json(products);
};

exports.getProductById = (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
};

exports.createProduct = (req, res) => {
  const { id, name, price, description, image } = req.body;
  if (!id || !name || !price || !description || !image) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const product = {
    id: id,
    name: name,
    price: price,
    description: description,
  };
  res
    .status(201)
    .json({ message: "Product created successfully", product: product });
};

exports.updateProduct = (req, res) => {
  const { id, name, price, description, image } = req.body;
  if (!id || !name || !price || !description || !image) {
    return res.status(400).json({ message: "Missing required fields" });
  }
  const product = {
    id: id,
    name: name,
    price: price,
    description: description,
  };
  res
    .status(201)
    .json({ message: "Product updated successfully", product: product });
};

exports.deleteProduct = (req, res) => {
  res.json({ message: "Product deleted successfully" });
};
