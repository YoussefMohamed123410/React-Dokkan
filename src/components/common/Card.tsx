import type { Product } from "@/types/models";
import { Link } from "react-router-dom";
import { showSuccessToast } from "./showSuccessToast";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import { toggleFavorite } from "@/app/features/favorites/favoritesSlice";
import { selectIsFavorite } from "@/app/features/favorites/favoriteSelectors";
import { useAppSelector } from "@/hooks/useAppSelector";

type ProductProps = {
  product: Product;
};

export const Card = ({ product }: ProductProps) => {
   const dispatch = useAppDispatch();

  const productId = product?.id ?? "";
  const isFav = useAppSelector(selectIsFavorite(productId));

  // Handlers

  const toggleFavorite1 = (product: Product) => {
    dispatch(toggleFavorite(product));

    showSuccessToast(
      isFav ? "تمت إزالة المنتج من المفضلة!" : "تمت إضافة المنتج إلى المفضلة!",
    );
  };

  const AddToCartHandler = (product: Product) => {
    console.log(product);
    // Dispatch add to cart action here
    showSuccessToast("تمت إضافة المنتج إلى السلة!");
  };

  if (!product || !productId) return null;
  return (
    <Link className="h-full" to={`/product/${productId}`} data-discover="true">
      <div
        data-slot="card"
        className="text-card-foreground h-full gap-6 border-2 border-[#EBD8B7] hover:border-[#C49A6C] hover:shadow-xl transition-all duration-300 group overflow-hidden h-full flex flex-col bg-white rounded-xl"
      >
        <div data-slot="card-content" className="pb-6 p-0 flex flex-col h-full">
          <div className="relative h-32 w-full overflow-hidden bg-[#FAF8F5] group">
            <img
              src={
                product.images?.[0]?.imageUrl ||
                "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg"
              }
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <button
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                e.stopPropagation();
                toggleFavorite1(product);
              }}
              className="absolute top-2 left-2 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                // className="lucide lucide-heart w-3.5 h-3.5 text-[#C49A6C] fill-red-500 text-red-500"
                className={`lucide lucide-heart w-3.5 h-3.5 ${
                  isFav
                    ? "fill-red-500 stroke-red-500"
                    : "fill-none stroke-[#C49A6C]"
                }`}
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
            </button>
          </div>
          <div className="flex-1 flex flex-col p-3">
            <p className="text-xs text-[#6B6B6B] mb-1 line-clamp-1">
              {product.store?.name}
            </p>
            <h3 className="text-[#2B2B2B] mb-2 group-hover:text-[#005B7F] transition-colors line-clamp-2 text-sm leading-tight min-h-[2.5rem]">
              {product.title}
            </h3>
            <div className="flex items-center gap-1.5 mb-2">
              <div className="flex items-center gap-0.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-star w-3 h-3 fill-[#C49A6C] text-[#C49A6C]"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
                <span className="text-[#2B2B2B] text-xs">4.8</span>
              </div>
              <span className="text-[#6B6B6B] text-xs">(165)</span>
            </div>
            <div className="flex items-center justify-between gap-2 mt-auto">
              <span className="text-[#005B7F] text-sm">
                {product.price?.toLocaleString()} ج.م
              </span>
              <button
                data-slot="button"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  e.stopPropagation();
                  AddToCartHandler(product);
                }}
                className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([className *='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive gap-1.5 has-[&svg]:px-2.5 bg-[#005B7F] hover:bg-[#004A66] text-white h-8 px-3 text-xs rounded-[10px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-shopping-cart w-3.5 h-3.5 ml-1"
                >
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
                أضف
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
