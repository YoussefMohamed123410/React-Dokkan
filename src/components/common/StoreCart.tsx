import { selectStoreById } from "@/app/features/store/storeSelectors";
import { selectStoreTotals } from "@/app/features/cart/cartSelectors";
import type { CartItem } from "@/types";
import { memo, useMemo } from "react";
import { useSelector } from "react-redux";
import StoreCartHeader from "./StoreCartHeader";
import StoreCartItem from "./StoreCartItem";
import StoreCartTotals from "./StoreCartTotals";

interface StoreCartProps {
  storeId: string;
  items: CartItem[];
}

const StoreCart = ({ storeId, items }: StoreCartProps) => {
  const selectCurrentStore = useMemo(() => selectStoreById(storeId), [storeId]);
  const selectedStore = useSelector(selectCurrentStore);
  const storeName = selectedStore?.name || "متجر غير معروف";

  const storeTotals = useSelector(selectStoreTotals);
  const storeTotal = storeTotals[storeId] || {
    subtotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  };
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
      <StoreCartHeader storeName={storeName} itemsCount={items.length} />
      {/* Cart Items */}
      <div className="p-4 space-y-3">
        {items.map((item) => (
          <StoreCartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <StoreCartTotals
        subtotal={storeTotal.subtotal}
        tax={storeTotal.tax}
        shipping={storeTotal.shipping}
      />
    </div>
  );
};

export default memo(StoreCart);
