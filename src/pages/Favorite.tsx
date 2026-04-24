import { selectFavoriteItems } from "@/app/features/favorites/favoriteSelectors";
import { Card } from "@/components/common/Card";
import PlaceHolder from "@/components/common/PlaceHolder";
import { useAppSelector } from "@/hooks/useAppSelector";

const Favorite = () => {
  const items = useAppSelector(selectFavoriteItems);
  const count = items.length;

  if (count == 0) {
    return (
      <>
        <PlaceHolder
          buttonText=" تصفح المنتجات"
          buttonLink="/products"
          icon={getIcon()}
          title="المفضلة فارغة"
          description="لم تقم بإضافة أي منتجات للمفضلة بعد"
        />
      </>
    );
  } else {
    return (
      <div className="min-h-screen bg-gray-50 py-8" dir="rtl">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="mb-2">المفضلة ({count} منتج)</h1>
            <p className="text-gray-600">
              المنتجات التي أضفتها إلى قائمة المفضلة
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((p) => (
              <Card key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    );
  }
};
export default Favorite;

const getIcon = () => {
  return (
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
      className="lucide lucide-heart w-16 h-16 text-gray-400 mx-auto mb-4"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
    </svg>
  );
};
