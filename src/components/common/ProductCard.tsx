import { Button } from "./Button";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  categoryName?: string;
  storeName?: string;
  imageUrl?: string;
}

export const ProductCard = ({
  product,
  categoryName,
  storeName,
  imageUrl,
}: ProductCardProps) => {
  return (
    <div className="overflow-hidden">
      <div className="h-48 overflow-hidden rounded-3xl bg-slate-100">
        <img
          src={imageUrl ?? "https://placehold.co/600x400?text=No+Image"}
          alt={product.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between text-sm text-slate-500">
          <span>{categoryName ?? "تصنيف"}</span>
          <span>#{storeName ?? "المتجر"}</span>
        </div>
        <h3 className="text-xl font-semibold text-slate-900">
          {product.title}
        </h3>
        <p className="text-sm leading-6 text-slate-600 min-h-12">
          {product.description ?? "بدون وصف"}
        </p>
        <div className="flex items-center justify-between gap-4 pt-3">
          <div>
            <p className="text-lg font-bold text-slate-900">
              {product.price.toFixed(2)} ر.س
            </p>
            <p className="text-xs text-slate-500">
              المخزون: {product.stockQuantity}
            </p>
          </div>
          <Button variant="secondary" size="sm">
            عرض المنتج
          </Button>
        </div>
      </div>
    </div>
  );
};
