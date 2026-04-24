import {
  ChevronDown,
  Heart,
  Menu,
  Search,
  ShoppingCart,
  Store,
} from "lucide-react";
import { Link } from "react-router";

import { ROUTE_PATHS } from "@/routes";
import { useDropdown } from "@/hooks";
import HeaderDropdownMenu from "../common/HeaderDropdownMenu";
import { ProductListDropdown } from "@/Data";
import { useAppSelector } from "@/hooks/useAppSelector";
import { selectFavoriteCount } from "@/app/features/favorites/favoriteSelectors";
import { selectCartCount } from "@/app/features/cart/cartSelectors";
import { useSelector } from "react-redux";

export const AuthHeader = () => {
  const productDropdown = useDropdown();
  const storeDropdown = useDropdown();
  const FavCount = useAppSelector(selectFavoriteCount);
  const count = useSelector(selectCartCount);
  return (
    <header
      className="sticky top-0 z-60 border-b border-gray-200 bg-white shadow-sm"
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Navigation */}
          <div className="order-3 flex items-center gap-2">
            <Link
              to={ROUTE_PATHS.FAVORITES}
              aria-label="المفضلة"
              title="المفضلة"
              className="relative inline-flex"
            >
              <span className="inline-flex size-9 items-center justify-center rounded-md bg-transparent p-0 text-sm font-medium transition-all hover:bg-[#EBD8B7] hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 focus-visible:outline-none">
                <Heart className="h-4 w-4 text-[#2B2B2B]" />

                {FavCount > 0 && (
                  <span className="absolute -top-1 -left-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#C49A6C] text-xs text-white">
                    {FavCount}
                  </span>
                )}

                {/* <span className="absolute -top-1 -right-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-[#C49A6C] text-xs text-white">
                  {FavCount}
                </span> */}
              </span>
            </Link>

            <Link
              to={ROUTE_PATHS.CART}
              aria-label="السلة"
              title="السلة"
              className="relative inline-flex"
            >
              <span className="inline-flex size-9 items-center justify-center rounded-md bg-transparent p-0 text-sm font-medium transition-all hover:bg-[#EBD8B7] hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 focus-visible:outline-none">
                <span className="absolute -top-1 -left-1 inline-flex h-5 w-5 items-center justify-center rounded-full  bg-[#C49A6C] text-xs text-white">
                  {count}
                </span>
                <ShoppingCart className="h-4 w-4 text-[#2B2B2B]" />
              </span>
            </Link>

            <button
              type="button"
              data-slot="button"
              aria-label="فتح القائمة"
              title="فتح القائمة"
              className="relative z-10 inline-flex size-9 items-center justify-center rounded-md bg-transparent p-0 text-sm font-medium transition-all duration-300 hover:bg-[#EBD8B7] hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              <Menu className="h-4 w-4 text-[#2B2B2B]" />
            </button>
          </div>
          {/* Search Bar */}
          <div className="hidden md:flex max-w-2xl flex-1 items-center justify-center order-2 mx-auto">
            <div className="w-full">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  placeholder="ابحث عن منتج أو متجر..."
                  className="w-full rounded-lg border-2 border-[#EBD8B7] bg-[#FAF8F5] py-2 pl-4 pr-10 focus:border-[#005B7F] focus:outline-none focus:ring-2 focus:ring-[#005B7F]"
                />
              </div>
            </div>
          </div>

          <div className="order-1 flex items-center gap-6">
            <Link to={ROUTE_PATHS.HOME} className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-[#005B7F] to-[#007AA3]">
                <Store className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl text-[#005B7F]">دكان</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-4 lg:flex">
              <div
                className="relative inline-block"
                onMouseEnter={productDropdown.open}
                onMouseLeave={productDropdown.close}
              >
                <Link
                  to={ROUTE_PATHS.PRODUCTS}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 
                      hover:text-[#005B7F] focus:outline-none border-none"
                >
                  <span>المنتجات</span>
                  <ChevronDown className="h-4 w-4" />
                </Link>
                <HeaderDropdownMenu
                  dataList={ProductListDropdown}
                  isDropdownOpen={productDropdown.isOpen}
                  position={{ top: 55 }}
                  onClose={productDropdown.close}
                />
              </div>

              <div
                className="relative inline-block"
                onMouseEnter={storeDropdown.open}
                onMouseLeave={storeDropdown.close}
              >
                <Link
                  className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 transition-colors hover:text-[#005B7F] focus:outline-none focus:ring-0 border-none"
                  to={ROUTE_PATHS.STORES}
                >
                  <span>المحلات</span>
                  <ChevronDown className="h-4 w-4" />
                </Link>
                <HeaderDropdownMenu
                  dataList={ProductListDropdown}
                  isDropdownOpen={storeDropdown.isOpen}
                  position={{ top: 55 }}
                  onClose={storeDropdown.close}
                />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AuthHeader;
