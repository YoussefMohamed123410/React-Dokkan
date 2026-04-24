import type { IProductListDropdown, Product } from "@/types";
import {
  mockCart,
  mockCartItems,
  mockCategories,
  mockOrders,
  mockPlans,
  mockProductImages,
  mockProducts,
  mockStores,
  mockUsers,
} from "./mockData";

export const ProductListDropdown: IProductListDropdown[] = [
  { name: "الإلكترونيات", link: "cat_1" },
  { name: "الموضة و الأزياء", link: "cat_2" },
  { name: "المنزل و المعيشة", link: "cat_3" },
  { name: "مستحضرات التجميل", link: "cat_4" },
  { name: "الرياضة", link: "cat_5" },
  { name: "الكتب", link: "cat_6" },
];

export const mockFavoriteProducts: Product[] = [
  {
    id: "product_1",
    storeId: "store_1",
    categoryId: "cat_1",
    title: "سمّاعات لاسلكية",
    description: "جودة صوت ممتازة وعزل ضجيج نشط.",
    price: 199.99,
    stockQuantity: 25,
    status: "Active",
    createdAt: "2026-04-12T08:10:00.000Z",
    store: {
      id: "store_1",
      ownerId: "user_2",
      name: "متجر البهجة",
      subdomain: "albahja",
      status: "Active",
      description: "متجر إلكتروني يقدم منتجات منزلية وديكورات عالية الجودة.",
      logoUrl: "https://placehold.co/200x80?text=%D8%A8%D9%87%D8%AC%D8%A9",
      coverBannerUrl:
        "https://placehold.co/1200x400?text=%D8%B3%D8%AA%D9%88%D8%B1+%D8%A7%D9%84%D8%A8%D9%87%D8%AC%D8%A9",
      businessAddress: "الرياض، المملكة العربية السعودية",
      vatNumber: "1234567890",
      themeSettings: { primaryColor: "#005B7F", accentColor: "#C49A6C" },
      createdAt: "2026-04-05T15:00:00.000Z",
    },
  },
];
const cityOptions = [
  { value: "all", label: "كل المدن" },
  { value: "cairo", label: "القاهرة" },
  { value: "giza", label: "الجيزة" },
  { value: "alexandria", label: "الإسكندرية" },
  { value: "hurghada", label: "الغردقة" },
  { value: "sharm", label: "شرم الشيخ" },
];

const ratingOptions = [
  { value: "all", label: "كل التقييمات" },
  { value: "4", label: "فاعلي 4★" },
  { value: "4.5", label: "فاعلي 4.5★" },
];

export {
  mockUsers,
  mockStores,
  mockPlans,
  mockCategories,
  mockProducts,
  mockProductImages,
  mockCart,
  mockCartItems,
  mockOrders,
  cityOptions,
  ratingOptions,
};
