const cards = [
  {
    "id": "0",
    "category": "Snikers",
    "brand": "Jordan",
    "model": "LUKA 1",
    "description": "",
    "price": "250",
    "stock": "5",
    "img1": "https://www.basketshop.ru/files/catalog/43208/184A5720.JPG",
    "img2": "https://www.basketshop.ru/files/catalog/43208/184A5668.JPG"
  },
  {
    "id": "1",
    "category": "Snikers",
    "brand": "Nike",
    "model": "AIR MAX 1 PRM",
    "description": "",
    "price": "300",
    "stock": "2",
    "img1": "https://www.basketshop.ru/files/catalog/43210/FD5088-200(7).JPG",
    "img2": "https://www.basketshop.ru/files/catalog/43210/FD5088-200(8).JPG"
  },
  {
    "id": "2",
    "category": "Snikers",
    "brand": "Nike",
    "model": "AIR FORCE 1 '07 LV8",
    "description": "",
    "price": "175",
    "stock": "15",
    "img1": "https://www.basketshop.ru/files/catalog/43167/DH7440-001(5).JPG",
    "img2": "https://www.basketshop.ru/files/catalog/43167/DH7440-001(3).JPG"
  },
  {
    "id": "3",
    "category": "Snikers",
    "brand": "Jordan",
    "model": "RETRO 1 ZOOM AIR",
    "description": "",
    "price": "280",
    "stock": "5",
    "img1": "https://www.basketshop.ru/files/catalog/43161/DQ0659-700-(7).jpg",
    "img2": "https://www.basketshop.ru/files/catalog/43161/DQ0659-700%20(5).JPG"
  },
  {
    "id": "4",
    "category": "Snikers",
    "brand": "Adidas",
    "model": "STAN SMITH (FX5501)",
    "description": "",
    "price": "120",
    "stock": "20",
    "img1": "https://www.basketshop.ru/files/catalog/42455/FX5501(4).JPG",
    "img2": "https://www.basketshop.ru/files/catalog/42455/FX5501(2).JPG"
  },
  {
    "id": "5",
    "category": "Snikers",
    "brand": "Vans",
    "model": "ACER MESH NI SP",
    "description": "",
    "price": "120",
    "stock": "30",
    "img1": "https://www.basketshop.ru/files/catalog/40648/VA5DXZ9FGM(8).jpg",
    "img2": "https://www.basketshop.ru/files/catalog/40648/VA5DXZ9FGM(3).JPG"
  },
  {
    "id": "6",
    "category": "Snikers",
    "brand": "Vans",
    "model": "CLASSIC SLIP-ON",
    "description": "",
    "price": "100",
    "stock": "25",
    "img1": "https://www.basketshop.ru/files/catalog/40960/VA33TB9HTM(6).JPG",
    "img2": "https://www.basketshop.ru/files/catalog/40960/VA33TB9HTM(3).JPG"
  },
  {
    "id": "7",
    "category": "Snikers",
    "brand": "Puma",
    "model": "SUEDE CLASSIC XXI",
    "description": "",
    "price": "115",
    "stock": "12",
    "img1": "https://www.basketshop.ru/files/catalog/42689/37491542(3).JPG",
    "img2": "https://www.basketshop.ru/files/catalog/42689/37491542(5).JPG"
  },
  {
    "id": "8",
    "category": "Snikers",
    "brand": "Puma",
    "model": "CA PRO GO FOR",
    "description": "",
    "price": "125",
    "stock": "7",
    "img1": "https://www.basketshop.ru/files/catalog/42284/184A1100.JPG",
    "img2": "https://www.basketshop.ru/files/catalog/42284/184A1097.JPG"
  },
  {
    "id": "9",
    "category": "T-shirts",
    "brand": "Jordan",
    "model": "UMPMAN T-SHIRT",
    "description": "",
    "price": "43",
    "stock": "50",
    "img1": "https://www.basketshop.ru/files/catalog/41473/184A98251-(48).jpg",
    "img2": "https://www.basketshop.ru/files/catalog/41473/184A98251-(50).jpg"
  },
  {
    "id": "10",
    "category": "T-shirts",
    "brand": "Jordan",
    "model": "WORDMARK TEE",
    "description": "",
    "price": "100",
    "stock": "22",
    "img1": "https://www.basketshop.ru/files/catalog/43222/DO6098-010.JPG",
    "img2": "https://www.basketshop.ru/files/catalog/43222/DO6098-010%20(2).JPG"
  },
  {
    "id": "11",
    "category": "T-shirts",
    "brand": "Puma",
    "model": "X BG GRAPHIC TEE",
    "description": "",
    "price": "72",
    "stock": "35",
    "img1": "https://www.basketshop.ru/files/catalog/42472/53405864.JPG",
    "img2": "https://www.basketshop.ru/files/catalog/42472/53405864%20(2).JPG"
  },
  {
    "id": "12",
    "category": "T-shirts",
    "brand": "Puma",
    "model": "NOT FROM HERE",
    "description": "",
    "price": "74",
    "stock": "13",
    "img1": "https://www.basketshop.ru/files/catalog/42459/184A4901.JPG",
    "img2": "https://www.basketshop.ru/files/catalog/42459/184A4904.JPG"
  },
  {
    "id": "13",
    "category": "T-shirts",
    "brand": "Puma",
    "model": "X AMI GRAPHIC TEE",
    "description": "",
    "price": "115",
    "stock": "19",
    "img1": "https://www.basketshop.ru/files/catalog/42337/53407096.JPG",
    "img2": "https://www.basketshop.ru/files/catalog/42337/53407096%20(2).JPG"
  },
  {
    "id": "14",
    "category": "T-shirts",
    "brand": "Nike",
    "model": "NRG OG CONT",
    "description": "",
    "price": "37",
    "stock": "8",
    "img1": "https://www.basketshop.ru/files/catalog/41467/DM2353-100.JPG",
    "img2": "https://www.basketshop.ru/files/catalog/41467/184A9993.jpg"
  },
  {
    "id": "15",
    "category": "T-shirts",
    "brand": "Nike",
    "model": "NBA CHICAGO BULLS",
    "description": "",
    "price": "28",
    "stock": "12",
    "img1": "https://www.basketshop.ru/files/catalog/41026/DA5916-657.JPG",
    "img2": "https://www.basketshop.ru/files/catalog/41026/DA5916-657%20(3).JPG"
  },
  {
    "id": "16",
    "category": "Hoodies",
    "brand": "Adidas",
    "model": "YOT GFX HOODIE",
    "description": "",
    "price": "120",
    "stock": "21",
    "img1": "https://www.basketshop.ru/files/catalog/42329/HB5471%20(3).JPG",
    "img2": "https://www.basketshop.ru/files/catalog/42329/HB5471%20(5).JPG"
  },
  {
    "id": "17",
    "category": "Hoodies",
    "brand": "Adidas",
    "model": "X REIGNING HOODIE",
    "description": "",
    "price": "3",
    "stock": "110",
    "img1": "https://www.basketshop.ru/files/catalog/29254/BQ1695%20(2).JPG",
    "img2": "https://www.basketshop.ru/files/catalog/29254/BQ1695%20(3).JPG"
  },
  {
    "id": "18",
    "category": "Hoodies",
    "brand": "Jordan",
    "model": "AIR HOODIE",
    "description": "",
    "price": "87",
    "stock": "21",
    "img1": "https://www.basketshop.ru/files/catalog/43125/DD1796-100.JPG",
    "img2": "https://www.basketshop.ru/files/catalog/43125/DD1796-100%20(3).JPG"
  },
  {
    "id": "19",
    "category": "Hoodies",
    "brand": "Jordan",
    "model": "HOODIE",
    "description": "",
    "price": "75",
    "stock": "23",
    "img1": "https://www.basketshop.ru/files/catalog/43124/DH0583-011.JPG",
    "img2": "https://www.basketshop.ru/files/catalog/43124/DH0583-011%20(1).JPG"
  },
  {
    "id": "20",
    "category": "Hoodies",
    "brand": "Puma",
    "model": "X AMI HOODIE",
    "description": "",
    "price": "210",
    "stock": "4",
    "img1": "https://www.basketshop.ru/files/catalog/42424/53406901%20(3).JPG",
    "img2": "https://www.basketshop.ru/files/catalog/42424/53406901%20(4).JPG"
  },
  {
    "id": "21",
    "category": "Hoodies",
    "brand": "Puma",
    "model": "X BG HOODIE",
    "description": "",
    "price": "135",
    "stock": "12",
    "img1": "https://www.basketshop.ru/files/catalog/42474/53405704.JPG",
    "img2": "https://www.basketshop.ru/files/catalog/42474/53405704%20(2).JPG"
  },
  {
    "id": "22",
    "category": "Hoodies",
    "brand": "Nike",
    "model": "BASKETBALL HOODIE",
    "description": "",
    "price": "130",
    "stock": "9",
    "img1": "https://www.basketshop.ru/files/catalog/41724/DA5989-010.JPG",
    "img2": "https://www.basketshop.ru/files/catalog/41724/DA5989-010%20(3).JPG"
  },
  {
    "id": "23",
    "category": "Hoodies",
    "brand": "Nike",
    "model": "SPORTSWEAR CLUB",
    "description": "",
    "price": "90",
    "stock": "17",
    "img1": "https://www.basketshop.ru/files/catalog/42539/BV2654-010.JPG",
    "img2": "https://www.basketshop.ru/files/catalog/42539/BV2654-010%20(3).JPG"
  },
  {
    "id": "24",
    "category": "Shorts",
    "brand": "Nike",
    "model": "SWOOSH",
    "description": "",
    "price": "23",
    "stock": "31",
    "img1": "https://www.basketshop.ru/files/catalog/42932/184A8364.jpg",
    "img2": "https://www.basketshop.ru/files/catalog/42932/184A8365.jpg"
  },
  {
    "id": "25",
    "category": "Shorts",
    "brand": "Adidas",
    "model": "DM SHORT",
    "description": "",
    "price": "65",
    "stock": "7",
    "img1": "https://www.basketshop.ru/files/catalog/42372/HB5424%20(1).JPG",
    "img2": "https://www.basketshop.ru/files/catalog/42372/HB5424%20(5).JPG"
  },
  {
    "id": "26",
    "category": "Shorts",
    "brand": "Adidas",
    "model": "DAME 8 INN",
    "description": "",
    "price": "73",
    "stock": "15",
    "img1": "https://www.basketshop.ru/files/catalog/42327/HE5463%20(3).JPG",
    "img2": "https://www.basketshop.ru/files/catalog/42327/HE5463%20(4).JPG"
  },
  {
    "id": "27",
    "category": "Shorts",
    "brand": "Jordan",
    "model": "SPORT DNA MESH",
    "description": "",
    "price": "120",
    "stock": "10",
    "img1": "https://www.basketshop.ru/files/catalog/43221/DM1414-010.JPG",
    "img2": "https://www.basketshop.ru/files/catalog/43221/DM1414-010%20(3).JPG"
  },
  {
    "id": "28",
    "category": "Shorts",
    "brand": "Jordan",
    "model": "SHORTS",
    "description": "",
    "price": "65",
    "stock": "32",
    "img1": "https://www.basketshop.ru/files/catalog/43119/DQ5917-010.JPG",
    "img2": "https://www.basketshop.ru/files/catalog/43119/DQ5917-010%20(3).JPG"
  },
  {
    "id": "29",
    "category": "Shorts",
    "brand": "Puma",
    "model": "FLARE SHORT",
    "description": "",
    "price": "55",
    "stock": "25",
    "img1": "https://www.basketshop.ru/files/catalog/43220/53049101.JPG",
    "img2": "https://www.basketshop.ru/files/catalog/43220/184A5932.JPG"
  },
  {
    "id": "30",
    "category": "Shorts",
    "brand": "Puma",
    "model": "SWISH-MAKER AOP",
    "description": "",
    "price": "100",
    "stock": "11",
    "img1": "https://www.basketshop.ru/files/catalog/42297/5343480111.JPG",
    "img2": "https://www.basketshop.ru/files/catalog/42297/53434801%20(1).JPG"
  },
  {
    "id": "31",
    "category": "Socks",
    "brand": "Jordan",
    "model": "ESSENTIALS CREW",
    "description": "",
    "price": "21",
    "stock": "50",
    "img1": "https://www.basketshop.ru/files/catalog/41850/DA5718-011(2).jpg",
    "img2": "https://www.basketshop.ru/files/catalog/41850/DA5718-011(3).jpg"
  },
  {
    "id": "32",
    "category": "Socks",
    "brand": "Nike",
    "model": "PLUS CUSHIONED",
    "description": "",
    "price": "20",
    "stock": "33",
    "img1": "https://www.basketshop.ru/files/catalog/41787/DJ5857-325(2).jpg",
    "img2": "https://www.basketshop.ru/files/catalog/41787/184A2136.JPG"
  },
  {
    "id": "33",
    "category": "Socks",
    "brand": "Adidas",
    "model": "CREW",
    "description": "",
    "price": "30",
    "stock": "38",
    "img1": "https://www.basketshop.ru/files/catalog/42359/184A3409w.jpg",
    "img2": "https://www.basketshop.ru/files/catalog/42359/184A3410w.jpg"
  },
  {
    "id": "34",
    "category": "Socks",
    "brand": "Nike",
    "model": "EVERYDAY",
    "description": "",
    "price": "20",
    "stock": "19",
    "img1": "https://www.basketshop.ru/files/catalog/39240/DA2123-010(1).jpg",
    "img2": "https://www.basketshop.ru/files/catalog/39240/DA2123-010(2).jpg"
  },
  // {
  //   "id": "34",
  //   "category": "Socks",
  //   "brand": "NIKE",
  //   "model": "EVERYDAY",
  //   "description": "",
  //   "price": "20",
  //   "stock": "19",
  //   "img1": "https://www.basketshop.ru/files/catalog/39240/DA2123-010(1).jpg",
  //   "img2": "https://www.basketshop.ru/files/catalog/39240/DA2123-010(2).jpg"
  // }

]

export default cards