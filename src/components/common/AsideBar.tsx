import { useDropdown } from "@/hooks/useDropdown";
import DropdownMenu from "./DropdownMenu";
import {
  calculateDropdownPosition,
  type DropdownPosition,
} from "@/utils/dropdownPositioning";
import { useRef, useEffect, useState } from "react";
import { mockCategories } from "@/Data/mockData";
import { cityOptions, ratingOptions } from "@/Data";

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
}

// export default AsideBar;
const FilterSection = ({ title, children }: FilterSectionProps) => (
  <div>
    <h3 className="mb-3">{title}</h3>
    {children}
  </div>
);

const RadioItem = ({
  label,
  name,
  value,
  setValue,
}: {
  label: string;
  name: string;
  value: string;
  setValue: (val: string) => void;
}) => (
  <label className="flex items-center gap-2 cursor-pointer">
    <input
      type="radio"
      name={name}
      checked={
        label === "كل التصنيفات"
          ? value === "all"
          : value === mockCategories.find((cat) => cat.name === label)?.id
      }
      // onChange={() => setValue(label)}
      onChange={() => {
        // console.log(label);
        const category = mockCategories.find((cat) => cat.name === label);
        // console.log(category);
        setValue(category ? category.id : "all");
      }}
      className="w-4 h-4 outline-none focus:outline-none focus:ring-0"
    />
    <span className="text-sm">{label}</span>
  </label>
);

interface IProps {
  selectedRating?: string;
  onRatingChange?: (value: string) => void;

  selectedCity?: string;
  onCityChange?: (value: string) => void;

  searchValue: string;
  setSearchValue: (val: string) => void;

  category: string;
  setCategory: (val: string) => void;

  shippingAvailable?: boolean;
  setShippingAvailable?: (val: boolean) => void;
}

const AsideBar = ({
  searchValue,
  setSearchValue,
  category,
  setCategory,
}: IProps) => {
  const ratingDropdown = useDropdown();
  const cityDropdown = useDropdown();

  const buttonRef = useRef<HTMLButtonElement>(null);
  const cityButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const cityDropdownRef = useRef<HTMLDivElement>(null);

  const [ratingPosition, setRatingPosition] = useState<DropdownPosition | null>(
    null,
  );
  const [cityPosition, setCityPosition] = useState<DropdownPosition | null>(
    null,
  );
  const [buttonWidth, setButtonWidth] = useState<number>(224);
  const [cityButtonWidth, setCityButtonWidth] = useState<number>(224);

  const [selectedRating, setSelectedRating] = useState<string>("all");
  const [selectedCity, setSelectedCity] = useState<string>("all");
  // const [searchValue, setSearchValue] = useState("");
  // const [category, setCategory] = useState("كل التصنيفات");
  const [shippingAvailable, setShippingAvailable] = useState(false);

  const ratingLabel =
    {
      all: "كل التقييمات",
      "4": "فاعلي 4★",
      "4.5": "فاعلي 4.5★",
    }[selectedRating] || "كل التقييمات";

  const cityLabel =
    {
      all: "كل المدن",
      cairo: "القاهرة",
      giza: "الجيزة",
      alexandria: "الإسكندرية",
      hurghada: "الغردقة",
      sharm: "شرم الشيخ",
    }[selectedCity] || "كل المدن";

  // Rating dropdown position calculation
  useEffect(() => {
    if (ratingDropdown.isOpen && buttonRef.current) {
      const timer = requestAnimationFrame(() => {
        const position = calculateDropdownPosition(buttonRef.current);
        setRatingPosition(position);
        setButtonWidth(buttonRef.current?.offsetWidth || 224);
      });
      return () => cancelAnimationFrame(timer);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setRatingPosition(null);
    }
  }, [ratingDropdown]);

  // City dropdown position calculation
  useEffect(() => {
    if (cityDropdown.isOpen && cityButtonRef.current) {
      const timer = requestAnimationFrame(() => {
        const position = calculateDropdownPosition(cityButtonRef.current);
        setCityPosition(position);
        setCityButtonWidth(cityButtonRef.current?.offsetWidth || 224);
      });
      return () => cancelAnimationFrame(timer);
    } else {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCityPosition(null);
    }
  }, [cityDropdown]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        ratingDropdown.close();
      }
      if (
        cityDropdownRef.current &&
        !cityDropdownRef.current.contains(event.target as Node)
      ) {
        cityDropdown.close();
      }
    };

    if (ratingDropdown.isOpen || cityDropdown.isOpen) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [ratingDropdown, cityDropdown]);

  // Close dropdown when page scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (ratingDropdown.isOpen) {
        ratingDropdown.close();
      }
      if (cityDropdown.isOpen) {
        cityDropdown.close();
      }
    };

    if (ratingDropdown.isOpen || cityDropdown.isOpen) {
      window.addEventListener("scroll", handleScroll, true);
      return () => window.removeEventListener("scroll", handleScroll, true);
    }
  }, [ratingDropdown, cityDropdown]);

  // Freeze screen when dropdown is open
  useEffect(() => {
    if (ratingDropdown.isOpen || cityDropdown.isOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [ratingDropdown, cityDropdown]);

  const Reset = () => {
    setSelectedRating("all");
    setSelectedCity("all");
    setSearchValue("");
    setCategory("all");
    setShippingAvailable(false);
    console.log(selectedRating);
    console.log(selectedCity);
    console.log(searchValue);
    console.log(category);
    console.log(shippingAvailable);
  };

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto filter-scrollbar">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
          </svg>
          <h2>الفلاتر</h2>
        </div>

        <div className="space-y-6">
          {/* Search */}
          <FilterSection title="بحث">
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6B6B6B] w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>

              <input
                type="text"
                placeholder="ابحث عن متجر..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="bg-[#FAF8F5] pr-10 h-9 w-full rounded-md border px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </FilterSection>

          {/* Category */}
          <FilterSection title="التصنيف">
            <div className="space-y-2">
              <RadioItem
                label="كل التصنيفات"
                name="category"
                value={category}
                setValue={setCategory}
              />
              <RadioItem
                label="الإلكترونيات"
                name="category"
                value={category}
                setValue={setCategory}
              />
              <RadioItem
                label="الموضة والأزياء"
                name="category"
                value={category}
                setValue={setCategory}
              />
              <RadioItem
                label="المنزل والمعيشة"
                name="category"
                value={category}
                setValue={setCategory}
              />
              <RadioItem
                label="مستحضرات التجميل"
                name="category"
                value={category}
                setValue={setCategory}
              />
              <RadioItem
                label="الرياضة"
                name="category"
                value={category}
                setValue={setCategory}
              />
              <RadioItem
                label="الكتب"
                name="category"
                value={category}
                setValue={setCategory}
              />
            </div>
          </FilterSection>

          {/* Shipping */}
          <FilterSection title="الشحن">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300"
                checked={shippingAvailable}
                onChange={(e) => setShippingAvailable(e.target.checked)}
              />
              <span className="text-sm">متاح الشحن</span>
            </label>
          </FilterSection>

          {/* City */}
          <FilterSection title="المدينة">
            <div ref={cityDropdownRef} className="relative">
              <button
                ref={cityButtonRef}
                className="flex h-10 w-full items-center justify-between rounded-md border px-3 text-sm focus:outline-none focus:ring-0"
                onClick={cityDropdown.toggle}
              >
                <span>{cityLabel}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 opacity-50 transition-transform ${cityDropdown.isOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <DropdownMenu
                isDropdownOpen={cityDropdown.isOpen}
                positionTop={cityPosition?.positionTop}
                position={
                  cityPosition
                    ? {
                        top: cityPosition.top,
                        bottom: cityPosition.bottom,
                        right: cityPosition.right,
                      }
                    : null
                }
                buttonWidth={cityButtonWidth}
                maxHeight={cityPosition?.maxHeight || 400}
                selected={selectedCity}
                onSelectedChange={setSelectedCity}
                dataList={cityOptions}
              />
            </div>
          </FilterSection>

          {/* Price */}

          {/* Rating */}
          <FilterSection title="الحد الأدنى للتقييم">
            <div ref={dropdownRef} className="relative">
              <button
                ref={buttonRef}
                className="flex h-10 w-full items-center justify-between rounded-md border px-3 text-sm focus:outline-none focus:ring-0"
                onClick={ratingDropdown.toggle}
              >
                <span>{ratingLabel}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 opacity-50 transition-transform ${ratingDropdown.isOpen ? "rotate-180" : ""}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              <DropdownMenu
                isDropdownOpen={ratingDropdown.isOpen}
                positionTop={ratingPosition?.positionTop}
                position={
                  ratingPosition
                    ? {
                        top: ratingPosition.top,
                        bottom: ratingPosition.bottom,
                        right: ratingPosition.right,
                      }
                    : null
                }
                buttonWidth={buttonWidth}
                maxHeight={ratingPosition?.maxHeight || 300}
                selected={selectedRating}
                onSelectedChange={setSelectedRating}
                dataList={ratingOptions}
              />
            </div>
          </FilterSection>

          {/* Reset */}
          <button
            onClick={() => {
              Reset();
            }}
            className="w-full h-9 rounded-md border text-sm focus:outline-none focus:ring-0 hover:bg-(--secondary) hover:text-white transition-colors"
          >
            إعادة تعيين الفلاتر
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AsideBar;
