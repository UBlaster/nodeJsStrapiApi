const mainSubcategories = [
  {
    title: "Укладка и стрижка",
    priority: 1,
    rees_category_id: 31969,
    image: "sub-beauty-10",
    locale: "ru"
  },
  {
    title: "Сәндеу және кесу",
    priority: 2,
    rees_category_id: 31969,
    image: "sub-beauty-10",
    locale: "kk"
  },
  {
    title: "Для лица",
    priority: 3,
    rees_category_id: 32992,
    image: "sub-beauty-11",
    locale: "ru"
  },
  {
    title: "Бетке арналған",
    priority: 4,
    rees_category_id: 32992,
    image: "sub-beauty-11",
    locale: "kk"
  },
  {
    title: "Массажеры",
    priority: 5,
    rees_category_id: 10043,
    image: "sub-beauty-12",
    locale: "ru"
  },
  {
    title: "Массажерлер",
    priority: 6,
    rees_category_id: 10043,
    image: "sub-beauty-12",
    locale: "kk"
  },
  {
    title: "Косметика и парфюм",
    priority: 7,
    rees_category_id: 10048,
    image: "sub-beauty-13",
    locale: "ru"
  },
  {
    title: "Косметика және парфюмерия",
    priority: 8,
    rees_category_id: 10048,
    image: "sub-beauty-13",
    locale: "kk"
  },
  {
    title: "Для волос",
    priority: 9,
    rees_category_id: 33023,
    image: "sub-beauty-14",
    locale: "ru"
  },
  {
    title: "Шашқа арналған",
    priority: 10,
    rees_category_id: 33023,
    image: "sub-beauty-14",
    locale: "kk"
  },
  {
    title: "Макияж",
    priority: 11,
    rees_category_id: 32989,
    image: "sub-beauty-15",
    locale: "ru"
  },
  {
    title: "Макияж",
    priority: 12,
    rees_category_id: 32989,
    image: "sub-beauty-15",
    locale: "kk"
  },
  {
    title: "Для тела",
    priority: 13,
    rees_category_id: 10058,
    image: "sub-beauty-16",
    locale: "ru"
  },
  {
    title: "Дене үшін",
    priority: 14,
    rees_category_id: 10058,
    image: "sub-beauty-16",
    locale: "kk"
  },
  {
    title: "Для загара",
    priority: 15,
    rees_category_id: 37521,
    image: "sub-beauty-17",
    locale: "ru"
  },
  {
    title: "Тотығу үшін",
    priority: 16,
    rees_category_id: 37521,
    image: "sub-beauty-17",
    locale: "kk"
  },
  {
    title: "Для полости рта",
    priority: 17,
    rees_category_id: 34227,
    image: "sub-beauty-18",
    locale: "ru"
  },
  {
    title: "Ауыз қуысы үшін",
    priority: 18,
    rees_category_id: 34227,
    image: "sub-beauty-18",
    locale: "kk"
  },
  {
    title: "Маникюр и педикюр",
    priority: 19,
    rees_category_id: 35721,
    image: "sub-beauty-19",
    locale: "ru"
  },
  {
    title: "Маникюр және педикюр",
    priority: 20,
    rees_category_id: 35721,
    image: "sub-beauty-19",
    locale: "kk"
  },
  {
    title: "Техника для красоты",
    priority: 21,
    rees_category_id: 57353,
    image: "sub-beauty-20",
    locale: "ru"
  },
  {
    title: "Сұлулық техникасы",
    priority: 22,
    rees_category_id: 57353,
    image: "sub-beauty-20",
    locale: "kk"
  },
  {
    title: "Инструменты и аксессуары",
    priority: 23,
    rees_category_id: 38748,
    image: "sub-beauty-21",
    locale: "ru"
  },
  {
    title: "Құралдар мен аксессуарлар",
    priority: 24,
    rees_category_id: 38748,
    image: "sub-beauty-21",
    locale: "kk"
  },
  {
    title: "Гигиена",
    priority: 25,
    rees_category_id: 33036,
    image: "sub-beauty-22",
    locale: "ru"
  },
  {
    title: "Гигиена",
    priority: 26,
    rees_category_id: 33036,
    image: "sub-beauty-22",
    locale: "kk"
  },
  {
    title: "Мебель и оборудование",
    priority: 27,
    rees_category_id: 41480,
    image: "sub-beauty-23",
    locale: "ru"
  },
  {
    title: "Жиһаз және жабдық",
    priority: 28,
    rees_category_id: 41480,
    image: "sub-beauty-23",
    locale: "kk"
  },
  {
    title: "Для обуви",
    priority: 29,
    rees_category_id: 10069,
    image: "sub-beauty-24",
    locale: "ru"
  },
  {
    title: "Аяқ киімге арналған",
    priority: 30,
    rees_category_id: 10069,
    image: "sub-beauty-24",
    locale: "kk"
  },
  {
    title: "Для бровей и ресниц",
    priority: 31,
    rees_category_id: 85158,
    image: "sub-beauty-25",
    locale: "ru"
  },
  {
    title: "Қастар мен кірпіктерге арналған",
    priority: 32,
    rees_category_id: 85158,
    image: "sub-beauty-25",
    locale: "kk"
  },
  {
    title: "Спальня",
    priority: 33,
    rees_category_id: 33524,
    image: "sub-furniture-12",
    locale: "ru"
  },
  {
    title: "Жатын бөлме",
    priority: 34,
    rees_category_id: 33524,
    image: "sub-furniture-12",
    locale: "kk"
  },
  {
    title: "Гостиная",
    priority: 35,
    rees_category_id: 32629,
    image: "sub-furniture-13",
    locale: "ru"
  },
  {
    title: "Қонақ бөлмесі",
    priority: 36,
    rees_category_id: 32629,
    image: "sub-furniture-13",
    locale: "kk"
  },
  {
    title: "Столы и стулья",
    priority: 37,
    rees_category_id: 33428,
    image: "sub-furniture-14",
    locale: "ru"
  },
  {
    title: "Үстелдер мен орындықтар",
    priority: 38,
    rees_category_id: 33428,
    image: "sub-furniture-14",
    locale: "kk"
  },
  {
    title: "Офис и кабинет",
    priority: 39,
    rees_category_id: 35369,
    image: "sub-furniture-15",
    locale: "ru"
  },
  {
    title: "Кеңсе және кеңсе",
    priority: 40,
    rees_category_id: 35369,
    image: "sub-furniture-15",
    locale: "kk"
  },
  {
    title: "Кухня",
    priority: 41,
    rees_category_id: 33519,
    image: "sub-furniture-16",
    locale: "ru"
  },
  {
    title: "Ас үй",
    priority: 42,
    rees_category_id: 33519,
    image: "sub-furniture-16",
    locale: "kk"
  },
  {
    title: "Прихожая",
    priority: 43,
    rees_category_id: 36471,
    image: "sub-furniture-17",
    locale: "ru"
  },
  {
    title: "Дәліз",
    priority: 44,
    rees_category_id: 36471,
    image: "sub-furniture-17",
    locale: "kk"
  },
  {
    title: "Ванная комната",
    priority: 45,
    rees_category_id: 37819,
    image: "sub-furniture-18",
    locale: "ru"
  },
  {
    title: "Жуынатын бөлме",
    priority: 46,
    rees_category_id: 37819,
    image: "sub-furniture-18",
    locale: "kk"
  },
  {
    title: "Стеллажи и полки",
    priority: 47,
    rees_category_id: 35478,
    image: "sub-furniture-19",
    locale: "ru"
  },
  {
    title: "Сөрелер мен сөрелер",
    priority: 48,
    rees_category_id: 35478,
    image: "sub-furniture-19",
    locale: "kk"
  },
  {
    title: "Торговое оборудование",
    priority: 49,
    rees_category_id: 43522,
    image: "sub-furniture-20",
    locale: "ru"
  },
  {
    title: "Сауда жабдықтары",
    priority: 50,
    rees_category_id: 43522,
    image: "sub-furniture-20",
    locale: "kk"
  },
  {
    title: "Фурнитура",
    priority: 51,
    rees_category_id: 35269,
    image: "sub-furniture-21",
    locale: "ru"
  },
  {
    title: "Фурнитура",
    priority: 52,
    rees_category_id: 35269,
    image: "sub-furniture-21",
    locale: "kk"
  },
  {
    title: "Хозтовары",
    priority: 53,
    rees_category_id: 10033,
    image: "sub-house-1",
    locale: "ru"
  },
  {
    title: "Шаруашылық тауарлар",
    priority: 54,
    rees_category_id: 10033,
    image: "sub-house-1",
    locale: "kk"
  },
  {
    title: "Посуда и аксессуары",
    priority: 55,
    rees_category_id: 10014,
    image: "sub-house-2",
    locale: "ru"
  },
  {
    title: "Ыдыс-аяқ пен аксессуарлар",
    priority: 56,
    rees_category_id: 10014,
    image: "sub-house-2",
    locale: "kk"
  },
  {
    title: "Садовая техника",
    priority: 57,
    rees_category_id: 32969,
    image: "sub-house-3",
    locale: "ru"
  },
  {
    title: "Бақша техникасы",
    priority: 58,
    rees_category_id: 32969,
    image: "sub-house-3",
    locale: "kk"
  },
  {
    title: "Домашний текстиль",
    priority: 59,
    rees_category_id: 10046,
    image: "sub-house-4",
    locale: "ru"
  },
  {
    title: "Үй тоқыма бұйымдары",
    priority: 60,
    rees_category_id: 10046,
    image: "sub-house-4",
    locale: "kk"
  },
  {
    title: "Интерьер",
    priority: 61,
    rees_category_id: 33955,
    image: "sub-house-5",
    locale: "ru"
  },
  {
    title: "Интерьер",
    priority: 62,
    rees_category_id: 33955,
    image: "sub-house-5",
    locale: "kk"
  },
  {
    title: "Бассейны и аксессуары",
    priority: 63,
    rees_category_id: 38737,
    image: "sub-house-6",
    locale: "ru"
  },
  {
    title: "Бассейндер мен аксессуарлар",
    priority: 64,
    rees_category_id: 38737,
    image: "sub-house-6",
    locale: "kk"
  },
  {
    title: "Освещение",
    priority: 65,
    rees_category_id: 33992,
    image: "sub-house-7",
    locale: "ru"
  },
  {
    title: "Жарықтандыру",
    priority: 66,
    rees_category_id: 33992,
    image: "sub-house-7",
    locale: "kk"
  },
  {
    title: "Пикник, барбекю, гриль",
    priority: 67,
    rees_category_id: 34221,
    image: "sub-house-8",
    locale: "ru"
  },
  {
    title: "Пикник, барбекю, гриль",
    priority: 68,
    rees_category_id: 34221,
    image: "sub-house-8",
    locale: "kk"
  },
  {
    title: "Садовые инструменты",
    priority: 69,
    rees_category_id: 37969,
    image: "sub-house-10",
    locale: "ru"
  },
  {
    title: "Бақша құралдары",
    priority: 70,
    rees_category_id: 37969,
    image: "sub-house-10",
    locale: "kk"
  },
  {
    title: "Садовая мебель",
    priority: 71,
    rees_category_id: 35969,
    image: "sub-house-11",
    locale: "ru"
  },
  {
    title: "Бақша жиһазы",
    priority: 72,
    rees_category_id: 35969,
    image: "sub-house-11",
    locale: "kk"
  },
  {
    title: "Для кухни",
    priority: 73,
    rees_category_id: 45049,
    image: "sub-house-12",
    locale: "ru"
  },
  {
    title: "Ас үйге арналған",
    priority: 74,
    rees_category_id: 45049,
    image: "sub-house-12",
    locale: "kk"
  },
  {
    title: "Семена и удобрения",
    priority: 75,
    rees_category_id: 40569,
    image: "sub-house-13",
    locale: "ru"
  },
  {
    title: "Тұқымдар мен тыңайтқыштар",
    priority: 76,
    rees_category_id: 40569,
    image: "sub-house-13",
    locale: "kk"
  },
  {
    title: "Аксессуары для сада",
    priority: 77,
    rees_category_id: 35569,
    image: "sub-house-14",
    locale: "ru"
  },
  {
    title: "Бақша аксессуарлары",
    priority: 78,
    rees_category_id: 35569,
    image: "sub-house-14",
    locale: "kk"
  },
  {
    title: "Аксессуары для полива",
    priority: 79,
    rees_category_id: 44504,
    image: "sub-house-15",
    locale: "ru"
  },
  {
    title: "Суару керек-жарақтары",
    priority: 80,
    rees_category_id: 44504,
    image: "sub-house-15",
    locale: "kk"
  },
  {
    title: "Садовый декор",
    priority: 81,
    rees_category_id: 37725,
    image: "sub-house-16",
    locale: "ru"
  },
  {
    title: "Бақша декоры",
    priority: 82,
    rees_category_id: 37725,
    image: "sub-house-16",
    locale: "kk"
  },
  {
    title: "Новогодние товары",
    priority: 83,
    rees_category_id: 10056,
    image: "sub-house-17",
    locale: "ru"
  },
  {
    title: "Жаңа жылдық тауарлар",
    priority: 84,
    rees_category_id: 10056,
    image: "sub-house-17",
    locale: "kk"
  },
  {
    title: "Баня, сауна",
    priority: 85,
    rees_category_id: 38751,
    image: "sub-house-18",
    locale: "ru"
  },
  {
    title: "Монша, сауна",
    priority: 86,
    rees_category_id: 38751,
    image: "sub-house-18",
    locale: "kk"
  },
  {
    title: "Теплицы и аксессуары",
    priority: 87,
    rees_category_id: 57300,
    image: "sub-house-19",
    locale: "ru"
  },
  {
    title: "Жылыжайлар мен аксессуарлар",
    priority: 88,
    rees_category_id: 57300,
    image: "sub-house-19",
    locale: "kk"
  },
  {
    title: "Твердое топливо",
    priority: 89,
    rees_category_id: 39723,
    image: "sub-house-20",
    locale: "ru"
  },
  {
    title: "Қатты отын",
    priority: 90,
    rees_category_id: 39723,
    image: "sub-house-20",
    locale: "kk"
  },
  {
    title: "Сантехника",
    priority: 91,
    rees_category_id: 31109,
    image: "sub-construction-1",
    locale: "ru"
  },
  {
    title: "Сантехника",
    priority: 92,
    rees_category_id: 31109,
    image: "sub-construction-1",
    locale: "kk"
  },
  {
    title: "Электроинструменты",
    priority: 93,
    rees_category_id: 31069,
    image: "sub-construction-2",
    locale: "ru"
  },
  {
    title: "Электр құралдары",
    priority: 94,
    rees_category_id: 31069,
    image: "sub-construction-2",
    locale: "kk"
  },
  {
    title: "Ручные инструменты",
    priority: 95,
    rees_category_id: 33342,
    image: "sub-construction-3",
    locale: "ru"
  },
  {
    title: "Қол құралдары",
    priority: 96,
    rees_category_id: 33342,
    image: "sub-construction-3",
    locale: "kk"
  },
  {
    title: "Сварочное оборудование",
    priority: 97,
    rees_category_id: 33171,
    image: "sub-construction-4",
    locale: "ru"
  },
  {
    title: "Дәнекерлеу жабдықтар",
    priority: 98,
    rees_category_id: 33171,
    image: "sub-construction-4",
    locale: "kk"
  },
  {
    title: "Строительное оборудование",
    priority: 99,
    rees_category_id: 33384,
    image: "sub-construction-5",
    locale: "ru"
  },
  {
    title: "Құрылыс жабдықтары",
    priority: 100,
    rees_category_id: 33384,
    image: "sub-construction-5",
    locale: "kk"
  },
  {
    title: "Пневмоинструменты",
    priority: 101,
    rees_category_id: 33168,
    image: "sub-construction-6",
    locale: "ru"
  },
  {
    title: "Пневматикалық құралдар",
    priority: 102,
    rees_category_id: 33168,
    image: "sub-construction-6",
    locale: "kk"
  },
  {
    title: "Измерительные инструменты",
    priority: 103,
    rees_category_id: 33219,
    image: "sub-construction-7",
    locale: "ru"
  },
  {
    title: "Өлшеу құралдары",
    priority: 104,
    rees_category_id: 33219,
    image: "sub-construction-7",
    locale: "kk"
  },
  {
    title: "Отделочные материалы",
    priority: 105,
    rees_category_id: 36574,
    image: "sub-construction-8",
    locale: "ru"
  },
  {
    title: "Әрлеу материалдары",
    priority: 106,
    rees_category_id: 36574,
    image: "sub-construction-8",
    locale: "kk"
  },
  {
    title: "Двери и окна",
    priority: 107,
    rees_category_id: 35823,
    image: "sub-construction-10",
    locale: "ru"
  },
  {
    title: "Есіктер мен терезелер",
    priority: 108,
    rees_category_id: 35823,
    image: "sub-construction-10",
    locale: "kk"
  },
  {
    title: "Видеонаблюдение",
    priority: 109,
    rees_category_id: 43722,
    image: "sub-construction-11",
    locale: "ru"
  },
  {
    title: "Бейнебақылау",
    priority: 110,
    rees_category_id: 43722,
    image: "sub-construction-11",
    locale: "kk"
  },
  {
    title: "Строительные материалы",
    priority: 111,
    rees_category_id: 35669,
    image: "sub-construction-12",
    locale: "ru"
  },
  {
    title: "Құрылыс материалдары",
    priority: 112,
    rees_category_id: 35669,
    image: "sub-construction-12",
    locale: "kk"
  },
  {
    title: "Системы безопасности",
    priority: 113,
    rees_category_id: 38069,
    image: "sub-construction-13",
    locale: "ru"
  },
  {
    title: "Қауіпсіздік жүйелері",
    priority: 114,
    rees_category_id: 38069,
    image: "sub-construction-13",
    locale: "kk"
  },
  {
    title: "Отопление и вентиляция",
    priority: 115,
    rees_category_id: 36244,
    image: "sub-construction-14",
    locale: "ru"
  },
  {
    title: "Жылыту және желдету",
    priority: 116,
    rees_category_id: 36244,
    image: "sub-construction-14",
    locale: "kk"
  },
  {
    title: "Электрика",
    priority: 117,
    rees_category_id: 35471,
    image: "sub-construction-15",
    locale: "ru"
  },
  {
    title: "Электрик",
    priority: 118,
    rees_category_id: 35471,
    image: "sub-construction-15",
    locale: "kk"
  },
  {
    title: "Водоснабжение",
    priority: 119,
    rees_category_id: 32447,
    image: "sub-construction-16",
    locale: "ru"
  },
  {
    title: "Сумен жабдықтау",
    priority: 120,
    rees_category_id: 32447,
    image: "sub-construction-16",
    locale: "kk"
  },
  {
    title: "Электрооборудование",
    priority: 121,
    rees_category_id: 33176,
    image: "sub-construction-17",
    locale: "ru"
  },
  {
    title: "Электр жабдықтары",
    priority: 122,
    rees_category_id: 33176,
    image: "sub-construction-17",
    locale: "kk"
  },
  {
    title: "Индивидуальная защита",
    priority: 123,
    rees_category_id: 45019,
    image: "sub-construction-18",
    locale: "ru"
  },
  {
    title: "Жеке қорғаныс",
    priority: 124,
    rees_category_id: 45019,
    image: "sub-construction-18",
    locale: "kk"
  },
  {
    title: "Оснастка и расходные материалы",
    priority: 125,
    rees_category_id: 39273,
    image: "sub-construction-19",
    locale: "ru"
  },
  {
    title: "Жабдықтар мен шығын материалдары",
    priority: 126,
    rees_category_id: 39273,
    image: "sub-construction-19",
    locale: "kk"
  },
  {
    title: "Для малярных работ",
    priority: 127,
    rees_category_id: 37528,
    image: "sub-construction-20",
    locale: "ru"
  },
  {
    title: "Бояу жұмыстары үшін",
    priority: 128,
    rees_category_id: 37528,
    image: "sub-construction-20",
    locale: "kk"
  },
  {
    title: "Электромонтаж",
    priority: 129,
    rees_category_id: 45413,
    image: "sub-construction-21",
    locale: "ru"
  },
  {
    title: "Электр Монтаждау",
    priority: 130,
    rees_category_id: 45413,
    image: "sub-construction-21",
    locale: "kk"
  },
  {
    title: "Строительный крепеж",
    priority: 131,
    rees_category_id: 45426,
    image: "sub-construction-22",
    locale: "ru"
  },
  {
    title: "Құрылыс бекіткіштері",
    priority: 132,
    rees_category_id: 45426,
    image: "sub-construction-22",
    locale: "kk"
  },
  {
    title: "Кровля, фасад, ворота",
    priority: 133,
    rees_category_id: 40044,
    image: "sub-construction-23",
    locale: "ru"
  },
  {
    title: "Шатыр, қасбет, қақпа",
    priority: 134,
    rees_category_id: 40044,
    image: "sub-construction-23",
    locale: "kk"
  }
]

module.exports = mainSubcategories;