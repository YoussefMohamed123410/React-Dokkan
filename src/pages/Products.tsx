import {
  // mockCategories,
  // mockProductImages,
  mockProducts,
  // mockStores,
} from "@/Data";
import AsideBar from "@/components/common/AsideBar";
import { Card } from "@/components/common";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// const findImageUrl = (productId: string) => {
//   return (
//     mockProductImages.find((image) => image.productId === productId)
//       ?.imageUrl ?? "https://placehold.co/600x400?text=No+Image"
//   );
// };

export const Products = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const category = searchParams.get("category");

  useEffect(() => {
    if (category) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedCategory(category);
    } else {
      setSelectedCategory("all");
    }
  }, [category]);

  // const categories = useMemo(
  //   () => [{ id: "all", name: "الكل" }, ...mockCategories],
  //   [],
  // );

  // const categoryMap = useMemo(
  //   () =>
  //     new Map(mockCategories.map((category) => [category.id, category.name])),
  //   [],
  // );

  // const storeMap = useMemo(
  //   () => new Map(mockStores.map((store) => [store.id, store.name])),
  //   [],
  // );

  const filteredProducts = useMemo(() => {
    return mockProducts.filter((product) => {
      const matchesSearch =
        search.trim() === "" ||
        product.title.includes(search) ||
        product.description?.includes(search);

      const matchesCategory =
        selectedCategory === "all" || product.categoryId === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  // console.log(selectedCategory);
  // console.log(search);
  console.log(filteredProducts);

  const reset = () => {
    setSearch("");
    setSelectedCategory("all");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="mb-2">كل المحلات</h1>
          <p className="text-gray-600">
            تم العثور على {filteredProducts.length} متجر
          </p>
        </div>
        <div className="flex gap-8">
          <AsideBar
            category={selectedCategory}
            setCategory={setSelectedCategory}
            searchValue={search}
            setSearchValue={setSearch}
          />
          <div className="flex-1">
            {/* Bar */}
            <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-lg shadow-sm">
              <button
                data-slot="sheet-trigger"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3 lg:hidden"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:r2:"
                data-state="closed"
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
                  className="lucide lucide-sliders-horizontal w-4 h-4 ml-2"
                >
                  <line x1="21" x2="14" y1="4" y2="4"></line>
                  <line x1="10" x2="3" y1="4" y2="4"></line>
                  <line x1="21" x2="12" y1="12" y2="12"></line>
                  <line x1="8" x2="3" y1="12" y2="12"></line>
                  <line x1="21" x2="16" y1="20" y2="20"></line>
                  <line x1="12" x2="3" y1="20" y2="20"></line>
                  <line x1="14" x2="14" y1="2" y2="6"></line>
                  <line x1="8" x2="8" y1="10" y2="14"></line>
                  <line x1="16" x2="16" y1="18" y2="22"></line>
                </svg>
                الفلاتر
              </button>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 whitespace-nowrap flex-shrink-0">
                  الترتيب حسب:
                </span>
                <button
                  type="button"
                  role="combobox"
                  aria-controls="radix-:r5:"
                  aria-expanded="false"
                  aria-autocomplete="none"
                  dir="ltr"
                  data-state="closed"
                  className="flex h-10 w-full items-center justify-between rounded-md  border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-40"
                >
                  <span style={{ pointerEvents: "none" }}>الأحدث</span>
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
                    className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </button>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg p-12 text-center shadow-sm">
                <p className="text-gray-600 mb-4">
                  لم يتم العثور على منتجات تطابق معاييرك.
                </p>
                <button
                  onClick={() => reset()}
                  data-slot="button"
                  className="inline-flex items-center hover:bg-(--secondary) hover:text-white justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[&gt;svg]:px-3"
                >
                  إعادة تعيين الفلاتر
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts &&
                  filteredProducts.map(
                    (p) => p && <Card key={p.id} product={p} />,
                  )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
