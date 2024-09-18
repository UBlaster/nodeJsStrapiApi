const mainСategories = [
  {
    title: "Дом и дача",
    priority: 1,
    rees_category_id: 11,
    image: "house",
    locale: "ru"
  },
  {
    title: "Үй және саяжай",
    priority: 2,
    rees_category_id: 11,
    image: "house",
    locale: "kk"
  },
  {
    title: "Строительство и ремонт",
    priority: 3,
    rees_category_id: 31068,
    image: "repair",
    locale: "ru"
  },
  {
    title: "Құрылыс және жөндеу",
    priority: 4,
    rees_category_id: 31068,
    image: "repair",
    locale: "kk"
  },
  {
    title: "Мебель",
    priority: 5,
    rees_category_id: 32626,
    image: "furniture",
    locale: "ru"
  },
  {
    title: "Жиһаз",
    priority: 6,
    rees_category_id: 32626,
    image: "furniture",
    locale: "kk"
  },
  {
    title: "Красота и здоровье",
    priority: 7,
    rees_category_id: 8,
    image: "beauty",
    locale: "ru"
  },
  {
    title: "Сұлулық және денсаулық",
    priority: 8,
    rees_category_id: 8,
    image: "beauty",
    locale: "kk"
  },
  {
    title: "Специальные предложения",
    priority: 9,
    rees_category_id: 34319,
    image: "special-offer",
    locale: "ru"
  },
  {
    title: "Арнайы ұсыныстар",
    priority: 10,
    rees_category_id: 34319,
    image: "special-offer",
    locale: "kk"
  },
  {
    title: "Телефоны и гаджеты",
    priority: 11,
    rees_category_id: 1,
    image: "phones-gadgets",   
    locale: "ru"
  },
  {
    title: "Телефондар мен гаджеттер",
    priority: 12,
    rees_category_id: 1,
    image: "phones-gadgets",
    locale: "kk"
  },
  {
    title: "Ноутбуки и компьютеры",
    priority: 13,
    rees_category_id: 2,
    image: "laptops-computers",
    locale: "ru"
  },
  {
    title: "Ноутбуктер мен компьютерлер",
    priority: 14,
    rees_category_id: 2,
    image: "laptops-computers",
    locale: "kk"
  },
  {
    title: "Телевизоры и аудиотехника",
    priority: 15,
    rees_category_id: 6,
    image: "televisions-sound-equipment",
    locale: "ru"
  },
  {
    title: "Теледидарлар мен аудио жабдықтар",
    priority: 16,
    rees_category_id: 6,
    image: "televisions-sound-equipment",
    locale: "kk"
  },
  {
    title: "Кухонная техника",
    priority: 17,
    rees_category_id: 3,
    image: "kitchen-appliances",
    locale: "ru"
  },
  {
    title: "Ас үй техникасы",
    priority: 18,
    rees_category_id: 3,
    image: "kitchen-appliances",
    locale: "kk"
  },
  {
    title: "Техника для дома",
    priority: 19,
    rees_category_id: 4,
    image: "home-appliances",
    locale: "ru"
  },
  {
    title: "Үйге арналған техника",
    priority: 20,
    rees_category_id: 4,
    image: "home-appliances",
    locale: "kk"
  },
  {
    title: "Автотовары",
    priority: 21,
    rees_category_id: 7,
    image: "car-goods",
    locale: "ru"
  },
  {
    title: "Автотауарлар",
    priority: 22,
    rees_category_id: 7,
    image: "car-goods",
    locale: "kk"
  },
  {
    title: "Аптека",
    priority: 23,
    rees_category_id: 33819,
    image: "pharmacy",
    locale: "ru"
  },
  {
    title: "Дәріхана",
    priority: 24,
    rees_category_id: 33819,
    image: "pharmacy",
    locale: "kk"
  },
  {
    title: "Украшения",
    priority: 25,
    rees_category_id: 32569,
    image: "jewelry",
    locale: "ru"
  },
  {
    title: "Әшекейлер",
    priority: 26,
    rees_category_id: 32569,
    image: "jewelry",
    locale: "kk"
  },
  {
    title: "Halyk Shop",
    priority: 27,
    rees_category_id: 35891,
    image: "halyk-shop",
    locale: "ru"
  },
  {
    title: "Halyk Shop",
    priority: 28,
    rees_category_id: 35891,
    image: "halyk-shop",
    locale: "kk"
  },
  {
    title: "Аксессуары",
    priority: 29,
    rees_category_id: 10,
    image: "accessories",
    locale: "ru"
  },
  {
    title: "Аксессуарлар",
    priority: 30,
    rees_category_id: 10,
    image: "accessories",
    locale: "kk"
  },
  {
    title: "Детские товары",
    priority: 31,
    rees_category_id: 9,
    image: "baby-products",
    locale: "ru"
  },
  {
    title: "Балаларға арналған өнімдер",
    priority: 32,
    rees_category_id: 9,
    image: "baby-products",
    locale: "kk"
  },
  {
    title: "Досуг и творчество",
    priority: 33,
    rees_category_id: 33119,
    image: "hobbies-creativity",
    locale: "ru"
  },
  {
    title: "Бос уақыт және шығармашылық",
    priority: 34,
    rees_category_id: 33119,
    image: "hobbies-creativity",
    locale: "kk"
  },
  {
    title: "Канцелярские товары",
    priority: 35,
    rees_category_id: 38133,
    image: "stationery",
    locale: "ru"
  },
  {
    title: "Кеңсе тауарлары",
    priority: 36,
    rees_category_id: 38133,
    image: "stationery",
    locale: "kk"
  },
  {
    title: "Обувь",
    priority: 37,
    rees_category_id: 37072,
    image: "shoes",
    locale: "ru"
  },
  {
    title: "Аяқ киім",
    priority: 38,
    rees_category_id: 37072,
    image: "shoes",
    locale: "kk"
  },
  {
    title: "Одежда",
    priority: 39,
    rees_category_id: 34672,
    image: "garment",
    locale: "ru"
  },
  {
    title: "Киім",
    priority: 40,
    rees_category_id: 34672,
    image: "garment",
    locale: "kk"
  },
  {
    title: "Подарки, товары для праздников",
    priority: 41,
    rees_category_id: 34729,
    image: "gifts-goods",
    locale: "ru"
  },
  {
    title: "Сыйлықтар, мерекелерге арналған тауарлар",
    priority: 42,
    rees_category_id: 34729,
    image: "gifts-goods",
    locale: "kk"
  },
  {
    title: "Спорт, туризм",
    priority: 43,
    rees_category_id: 12,
    image: "sports-tourism",
    locale: "ru"
  },
  {
    title: "Спорт, туризм",
    priority: 44,
    rees_category_id: 12,
    image: "sports-tourism",
    locale: "kk"
  },
  {
    title: "Товары для животных",
    priority: 45,
    rees_category_id: 14,
    image: "dog-products",
    locale: "ru"
  },
  {
    title: "Жануарларға арналған тауарлар",
    priority: 46,
    rees_category_id: 14,
    image: "dog-products",
    locale: "kk"
  },
  {
    title: "Фото, видео",
    priority: 47,
    rees_category_id: 5,
    image: "photo-video",
    locale: "ru"
  },
  {
    title: "Фото, видео",
    priority: 48,
    rees_category_id: 5,
    image: "photo-video",
    locale: "kk"
  },
  {
    title: "Цифровые товары",
    priority: 49,
    rees_category_id: 39922,
    image: "digital-goods",
    locale: "ru"
  },
  {
    title: "Сандық тауарлар",
    priority: 50,
    rees_category_id: 39922,
    image: "digital-goods",
    locale: "kk"
  }
];

module.exports = mainСategories;