const brandsData = [
  {
    title: "beauty-casa-more-01",
    priority: 100,
    url: '/category/krasota-i-zdorove?f=brands%3ACasa%26More',
    media: 'beauty-casa-more-01',
    categories: true
  }, 
  {
    title: "beauty-dior-01",
    priority: 102,
    url: '/category/krasota-i-zdorove?f=brands:Dior',
    media: 'beauty-dior-01',
    categories: true
  },
  {
    title: "beauty-dr-ceuracle-01",
    priority: 103,
    url: '/category/krasota-i-zdorove?f=brands:Dr.Ceuracle',
    media: 'beauty-dr-ceuracle-01',
    categories: true
  },
  {
    title: "beauty-dyson-01",
    priority: 104,
    url: '/category/krasota-i-zdorove?f=brands%3ADyson',
    media: 'beauty-dyson-01',
    categories: true
  },
  {
    title: "beauty-estel-01",
    priority: 105,
    url: '/category/krasota-i-zdorove?f=brands:Estel',
    media: 'beauty-estel-01',
    categories: true
  },
  {
    title: "beauty-kiko-01",
    priority: 106,
    url: '/category/krasota-i-zdorove?f=brands%3AKiko%3Abrands%3AKiko%20Milano',
    media: 'beauty-kiko-01',
    categories: true
  },
  {
    title: "beauty-loreal-01",
    priority: 107,
    url: '/category/krasota-i-zdorove?f=brands%3ALoreal%20Paris%3Abrands%3ALoreal%20Professionnel',
    media: 'beauty-loreal-01',
    categories: true
  },
  {
    title: "beauty-ordinary-01",
    priority: 108,
    url: '/category/krasota-i-zdorove?f=brands%3AThe%20Ordinary',
    media: 'beauty-ordinary-01',
    categories: true
  },
  {
    title: "beauty-tigi-01",
    priority: 109,
    url: '/category/krasota-i-zdorove?f=brands:tigi',
    media: 'beauty-tigi-01',
    categories: true
  },
  {
    title: "beauty-tom-ford-01",
    priority: 110,
    url: '/search?r46_search_query=tom%20ford&sort=popular-desc&f=brands%3ATom%20Ford&page=1',
    media: 'beauty-tom-ford-01',
    categories: true
  },
  {
    title: "furniture-abbott-01",
    priority: 111,
    url: '/category/mebel?sort=popular-desc&f=brands%3AAbbott',
    media: 'furniture-abbott-01',
    categories: true
  },
  {
    title: "furniture-ashley-01",
    priority: 112,
    url: '/category/mebel?sort=popular-desc&f=brands%3AAshley%20Furniture%20Homestore%3Abrands%3AAshley%20Furniture%20Inc.%3Abrands%3AAshley%20HomeStore',
    media: 'furniture-ashley-01',
    categories: true
  },
  {
    title: "furniture-roca-01",
    priority: 113,
    url: '/category/mebel?sort=popular-desc&f=brands%3ARoca',
    media: 'furniture-roca-01',
    categories: true
  },
  {
    title: "furniture-zeta-01",
    priority: 114,
    url: '/category/mebel?sort=popular-desc&f=brands%3AZeta',
    media: 'furniture-zeta-01',
    categories: true
  },
  {
    title: "house-bona-forte-01",
    priority: 115,
    url: '/category/tovari-dlya-doma?sort=popular-desc&f=brands%3ABona%20Forte',
    media: 'house-bona-forte-01',
    categories: true
  },
  {
    title: "house-huter-01",
    priority: 116,
    url: '/category/tovari-dlya-doma?sort=popular-desc&f=brands%3AHuter',
    media: 'house-huter-01',
    categories: true
  },
  {
    title: "house-intex-01",
    priority: 117,
    url: '/category/tovari-dlya-doma?sort=popular-desc&f=brands%3AIntex',
    media: 'house-intex-01',
    categories: true
  },
  {
    title: "house-philips-01",
    priority: 118,
    url: '/category/tovari-dlya-doma?sort=popular-desc&f=brands%3Aphilips',
    media: 'house-philips-01',
    categories: true
  },
  {
    title: "house-tac-01",
    priority: 119,
    url: '/category/tovari-dlya-doma?sort=popular-desc&f=brands%3ATac',
    media: 'house-tac-01',
    categories: true
  },
  {
    title: "house-the-idea-01",
    priority: 120,
    url: '/category/tovari-dlya-doma?sort=popular-desc&f=brands%3AIdea',
    media: 'house-the-idea-01',
    categories: true
  },
  {
    title: "house-total-01",
    priority: 121,
    url: '/category/tovari-dlya-doma?sort=popular-desc&f=brands%3ATotal',
    media: 'house-total-01',
    categories: true
  },
  {
    title: "house-zepter-01",
    priority: 122,
    url: '/category/tovari-dlya-doma?sort=popular-desc&f=brands%3Azepter',
    media: 'house-zepter-01',
    categories: true
  },
  {
    title: "repair-alteco",
    priority: 123,
    url: '/category/stroitelstvo-i-remont-?sort=popular-desc&f=brands%3AAlteco',
    media: 'repair-alteco',
    categories: true
  },
  {
    title: "repair-bosch",
    priority: 124,
    url: '/category/stroitelstvo-i-remont-?sort=popular-desc&f=brands%3Abosch',
    media: 'repair-bosch',
    categories: true
  },
  {
    title: "repair-crown",
    priority: 125,
    url: '/category/stroitelstvo-i-remont-?sort=popular-desc&f=brands%3Acrown',
    media: 'repair-crown',
    categories: true
  },
  {
    title: "repair-grohe",
    priority: 126,
    url: '/category/stroitelstvo-i-remont-?sort=popular-desc&f=brands%3Agrohe',
    media: 'repair-grohe',
    categories: true
  },
  {
    title: "repair-karcher",
    priority: 127,
    url: '/category/stroitelstvo-i-remont-?sort=popular-desc&f=brands%3Akarcher',
    media: 'repair-karcher',
    categories: true
  },
  {
    title: "repair-knauf",
    priority: 128,
    url: '/category/stroitelstvo-i-remont-?sort=popular-desc&f=brands%3AKnauf',
    media: 'repair-knauf',
    categories: true
  },
  {
    title: "repair-tikkurila",
    priority: 129,
    url: '/category/stroitelstvo-i-remont-?sort=popular-desc&f=brands%3Atikkurila',
    media: 'repair-tikkurila',
    categories: true
  },
  {
    title: "repair-vihr",
    priority: 130,
    url: '/category/stroitelstvo-i-remont-?sort=popular-desc&f=brands%3AВихрь',
    media: 'repair-vihr',
    categories: true
  }
];

module.exports = brandsData;