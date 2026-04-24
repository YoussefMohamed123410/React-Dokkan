import {
  selectCartCount,
  selectCartGroupedByStore,
  selectCartItems,
  selectCartTotals,
} from "@/app/features/cart/cartSelectors";
import { setProducts } from "@/app/features/products/productSlice";
import { setStores } from "@/app/features/store/storeSlice";
import CartInfoMessage from "@/components/common/CartInfoMessage";
import CartSummary from "@/components/common/CartSummary";
import PlaceHolder from "@/components/common/PlaceHolder";
import StoreCart from "@/components/common/StoreCart";
import { mockProducts, mockStores } from "@/Data/mockData";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(mockProducts));
    dispatch(setStores(mockStores));
  }, [dispatch]);

  const cartItems = useSelector(selectCartItems);
  const count = useSelector(selectCartCount);
  const groupedCart = useSelector(selectCartGroupedByStore);
  const { subtotal, shipping, tax, total } = useSelector(selectCartTotals);

  const storeCount = Object.entries(groupedCart).length;

  if (cartItems.length === 0) {
    return (
      <PlaceHolder
        buttonText=" تصفح المنتجات"
        icon={getIcon()}
        title="سلة التسوق فارغة"
        description="أضف بعض المنتجات للبدء!"
        buttonLink="/products"
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8" dir="rtl">
      <div className="container mx-auto px-4">
        <h1 className="mb-8">سلة التسوق ({count} منتج)</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {Object.entries(groupedCart).map(([storeId, items]) => (
              <StoreCart key={storeId} storeId={storeId} items={items} />
            ))}
            {storeCount > 1 && <CartInfoMessage storeCount={storeCount} />}
          </div>
          <div className="lg:col-span-1">
            <CartSummary
              count={count}
              totalShippingCost={shipping}
              totalTax={tax}
              totalPrice={subtotal}
              grandTotal={total}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

const getIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-shopping-bag w-16 h-16 text-gray-400 mx-auto mb-4"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
      <path d="M3 6h18"></path>
      <path d="M16 10a4 4 0 0 1-8 0"></path>
    </svg>
  );
};
