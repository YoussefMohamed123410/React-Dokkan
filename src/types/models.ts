export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };

export type UserRole = "Customer" | "StoreOwner" | "Admin";

export type OrderStatus = "Pending" | "Shipped" | "Delivered" | "Cancelled";

export type PaymentStatus = "Pending" | "Success" | "Failed";

export type ProductStatus = "Active" | "Inactive";

export type TransactionStatus = "Success" | "Failure";

export type PayableType = "Order" | "Subscription";

export type StoreStatus = "Pending" | "Active" | "Suspended";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  contactNumber?: string;
  profilePhotoUrl?: string;
  googleOauthId?: string;
  isVerified?: boolean;
  createdAt?: string;
  deletedAt?: string;
  ownedStores?: Store[];
  orders?: Order[];
  reviews?: Review[];
  cart?: Cart;
  sentMessages?: Message[];
  receivedMessages?: Message[];
  notifications?: Notification[];
  employments?: StoreEmployee[];
}

export interface Store {
  id: string;
  ownerId: string;
  name: string;
  subdomain: string;
  status: StoreStatus;
  description?: string;
  logoUrl?: string;
  coverBannerUrl?: string;
  businessAddress?: string;
  vatNumber?: string;
  themeSettings?: JsonValue;
  createdAt?: string;
  deletedAt?: string;
  owner?: User;
  products?: Product[];
  orders?: Order[];
  subscriptions?: Subscription[];
  employees?: StoreEmployee[];
  messages?: Message[];
}

export interface Plan {
  id: string;
  name: string;
  price: number;
  features: JsonValue;
  subscriptions?: Subscription[];
}

export interface Subscription {
  id: string;
  storeId: string;
  planId: string;
  status: string;
  nextBillingDate?: string;
  store?: Store;
  plan?: Plan;
}

export interface Category {
  id: string;
  name: string;
  parentCategoryId?: string;
  parent?: Category;
  children?: Category[];
  products?: Product[];
}

export interface Product {
  id: string;
  storeId: string;
  categoryId: string;
  title: string;
  description?: string;
  price: number;
  stockQuantity: number;
  status: ProductStatus;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  store?: Store;
  category?: Category;
  images?: ProductImage[];
  orderItems?: OrderItem[];
  reviews?: Review[];
  cartItems?: CartItem[];
}

export interface ProductImage {
  id: string;
  productId: string;
  imageUrl: string;
  sortOrder?: number;
  product?: Product;
}

export interface Order {
  id: string;
  customerId: string;
  storeId: string;
  status: OrderStatus;
  shippingAddress?: JsonValue;
  totalAmount: number;
  shippingCost?: number;
  taxAmount?: number;
  paymentStatus: PaymentStatus;
  createdAt?: string;
  deletedAt?: string;
  customer?: User;
  store?: Store;
  orderItems?: OrderItem[];
  reviews?: Review[];
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  priceAtPurchase: number;
  order?: Order;
  product?: Product;
}

export interface Review {
  id: string;
  productId: string;
  customerId: string;
  orderId: string;
  rating: number;
  reviewText?: string;
  storeResponse?: string;
  createdAt?: string;
  product?: Product;
  customer?: User;
  order?: Order;
}

export interface Cart {
  id: string;
  customerId: string;
  expiresAt?: string;
  customer?: User;
  cartItems?: CartItem[];
}

export interface CartItem {
  id: string;
  cartId: string;
  productId: string;
  quantity: number;
  cart?: Cart;
  product?: Product;
}

export interface PaymentTransaction {
  id: string;
  payableId: string;
  payableType: PayableType;
  gatewayName?: string;
  gatewayTransactionId?: string;
  amount: number;
  status: TransactionStatus;
  createdAt?: string;
}

export interface StoreEmployee {
  userId: string;
  storeId: string;
  permissions?: JsonValue;
  user?: User;
  store?: Store;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  storeId?: string;
  content: string;
  readStatus?: boolean;
  createdAt?: string;
  sender?: User;
  receiver?: User;
  store?: Store;
}

export interface Notification {
  id: string;
  userId: string;
  type: string;
  content: string;
  readStatus?: boolean;
  createdAt?: string;
  user?: User;
}

export interface StoreAnalytics {
  receiverId: string;
}
