
const menu_data = [

  {
    id: 2,
    sub_menu: true,
    title: 'Men',
    link: '/men',
    sub_menus: [
      { title: 'T-Shirts & Polos', link: '/men/t-shirts-polos' },
      { title: 'Jeans', link: '/men/jeans' },
      { title: 'Blazers', link: '/men/blazers' },
      { title: 'Accessories', link: '/men/accessories' },
      { title: 'Shirts', link: '/men/shirts' },
      { title: 'Pants', link: '/men/pants' },
      { title: 'Suits', link: '/men/suits' },
      { title: 'Headwear', link: '/men/headwear' },
      { title: 'Sweaters', link: '/men/sweaters' },
      { title: 'Coats & Jackets', link: '/men/coats-jackets' },
      { title: 'Belts', link: '/men/belts' },
      { title: 'Underwear & Socks', link: '/men/underwear-socks' },
      { title: 'Cardigans', link: '/men/cardigans' },
      { title: 'Shoes', link: '/men/shoes' },
      { title: 'Bags', link: '/men/bags' },
      { title: 'Swimwear', link: '/men/swimwear' },
      { title: 'Gadgets', link: '/men/gadgets' },
    ],
  },
  {
    id: 3,
    sub_menu: true,
    title: 'Women',
    link: '/women',
    sub_menus: [
      { title: 'Shirts & Tops', link: '/women/shirts-tops' },
      { title: 'Jeans', link: '/women/jeans' },
      { title: 'Coats & Jackets', link: '/women/coats-jackets' },
      { title: 'Underwear & Socks', link: '/women/underwear-socks' },
      { title: 'Blouses', link: '/women/blouses' },
      { title: 'Pants', link: '/women/pants' },
      { title: 'Headwear', link: '/women/headwear' },
      { title: 'Swimwear', link: '/women/swimwear' },
      { title: 'Sweaters', link: '/women/sweaters' },
      { title: 'Skirts', link: '/women/skirts' },
      { title: 'Bags', link: '/women/bags' },
      { title: 'Accessories', link: '/women/accessories' },
      { title: 'Cardigans', link: '/women/cardigans' },
      { title: 'Dresses', link: '/women/dresses' },
      { title: 'Belts', link: '/women/belts' },
      { title: 'Home Accessories', link: '/women/home-accessories' },
      { title: 'Blazers', link: '/women/blazers' },
      { title: 'Jumpsuits', link: '/women/jumpsuits' },
      { title: 'Shoes', link: '/women/shoes' },
    ],
  },
  {
    id: 4,
    sub_menu: true,
    title: 'Kids',
    link: '/kids',
    sub_menus: [
      { title: 'T-Shirts', link: '/kids/t-shirts' },
      { title: 'Shirts', link: '/kids/shirts' },
      { title: 'Jeans', link: '/kids/jeans' },
      { title: 'Pants', link: '/kids/pants' },
      { title: 'Shorts', link: '/kids/shorts' },
      { title: 'Sweatshirts & Hoodies', link: '/kids/sweatshirts' },
      { title: 'Coats & Jackets', link: '/kids/coats-jackets' },
      { title: 'Dresses', link: '/kids/dresses' },
      { title: 'Sleepwear', link: '/kids/sleepwear' },
      { title: 'Activewear', link: '/kids/activewear' },
      { title: 'School Uniforms', link: '/kids/uniforms' },
    ],
  },
  {
    id: 5,
    sub_menu: true,
    title: 'Accessories',
    link: '/accessories',
    sub_menus: [
      { title: 'Tech Accessories', link: '/accessories/tech' },
      { title: 'Fashion Accessories', link: '/accessories/fashion' },
      { title: 'Home Accessories', link: '/accessories/home' },
    ],
  },
  {
    id: 6,
    single_link: true,
    title: 'Sale',
    link: '/sale',
  },



];

export default menu_data;

// mobile_menu
export const mobile_menu = [...menu_data]; // Keep it identical to the desktop menu
