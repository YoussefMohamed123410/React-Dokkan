import { selectProductById } from "@/app/features/products/productsSelectors";
import {
  decreaseQty,
  increaseQty,
  removeFromCart,
} from "@/app/features/cart/cartSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import type { CartItem } from "@/types";
import { memo } from "react";
import { useSelector } from "react-redux";

interface StoreCartItemProps {
  cartItem: CartItem;
}

const StoreCartItem = ({ cartItem }: StoreCartItemProps) => {
  const dispatch = useAppDispatch();
  const product = useSelector(selectProductById(cartItem.productId));
  const total = (product?.price || 0) * cartItem.quantity;

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(cartItem.productId));
  };

  const incrementQuantityHandler = () => {
    dispatch(increaseQty(cartItem.productId));
  };

  const decrementQuantityHandler = () => {
    dispatch(decreaseQty(cartItem.productId));
  };

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex gap-4">
        <a className="shrink-0" href="/product/prod-h15" data-discover="true">
          <div className="w-24 h-24 bg-white rounded-lg overflow-hidden border border-gray-200">
            <img
              src={
                product?.images?.[0]?.imageUrl ||
                "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
              }
              alt={product?.title || "عنوان المنتج غير متوفر"}
              className="w-full h-full object-cover"
            />
          </div>
        </a>

        <div className="flex-1">
          <a href="/product/prod-h15" data-discover="true">
            <h4 className="mb-1 hover:text-blue-600 text-[#2B2B2B]">
              {product?.title || "عنوان المنتج غير متوفر"}
            </h4>
          </a>

          <div className="text-lg text-[#005B7F] mb-4">
            {product?.price
              ? `${product.price.toFixed(2)} ج.م`
              : "سعر غير متوفر"}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center border rounded-lg bg-white">
              <button
                onClick={decrementQuantityHandler}
                data-slot="button"
                className="inline-flex hover:bg-(--gold-accent) hover:text-white items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5"
              >
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
                  className="lucide lucide-minus w-4 h-4"
                >
                  <path d="M5 12h14"></path>
                </svg>
              </button>

              <span className="px-4 py-1 min-w-12 text-center">
                {cartItem.quantity || 1}
              </span>

              <button
                onClick={incrementQuantityHandler}
                data-slot="button"
                className="inline-flex hover:bg-(--gold-accent) hover:text-white items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5"
              >
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
                  className="lucide lucide-plus w-4 h-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
              </button>
            </div>

            <button
              onClick={removeFromCartHandler}
              data-slot="button"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:hover:bg-accent/50 h-8 rounded-md gap-1.5 px-3 has-[&gt;svg]:px-2.5 text-red-600 hover:text-red-700 hover:bg-red-50"
            >
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
                className="lucide lucide-trash2 lucide-trash-2 w-4 h-4 ml-2"
              >
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                <line x1="10" x2="10" y1="11" y2="17"></line>
                <line x1="14" x2="14" y1="11" y2="17"></line>
              </svg>
              حذف
            </button>
          </div>
        </div>

        <div className="text-left">
          <div className="text-lg text-[#2B2B2B]">{total.toFixed(2)} ج.م</div>
        </div>
      </div>
    </div>
  );
};

export default memo(StoreCartItem);
