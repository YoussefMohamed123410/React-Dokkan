import { ProductListDropdown } from "@/Data";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";

interface IProps {
  isDropdownOpen: boolean;
  positionTop?: boolean;
  position?: { top?: number; bottom?: number; right?: number } | null;
  buttonWidth?: number;
  maxHeight?: number;
  selected?: string;
  onSelectedChange?: (value: string) => void;
  dataList: typeof ProductListDropdown;
  onClose?: () => void;
}

const HeaderDropdownMenu = ({
  isDropdownOpen,
  positionTop = false,
  position,
  buttonWidth = 224,
  maxHeight = 400,
  onClose,
  dataList,
}: IProps) => {
  

  return (
    <AnimatePresence>
      {isDropdownOpen && (
        <motion.div
          initial={{ opacity: 0, y: positionTop ? 10 : -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: positionTop ? 10 : -10, scale: 0.95 }}
          transition={{ duration: 0.19, ease: "easeInOut" }}
          className="fixed bg-white shadow-lg rounded-lg z-50 overflow-hidden"
          style={{
            width: `${buttonWidth}px`,
            top: position?.top ? `${position.top}px` : undefined,
            bottom: position?.bottom ? `${position.bottom}px` : undefined,
            right: position?.right ? `${position.right}px` : undefined,
            maxHeight: `${maxHeight}px`,
          }}
        >
          <div
            className="border border-gray-200 rounded-lg py-2 select-none overflow-y-hidden"
            style={{ maxHeight: `${maxHeight - 4}px` }}
          >
            {dataList.map((option) => (
              <Link
                to={`/products?category=${option.link}`}
                key={option.link}
                onClick={() => {
                  onClose?.(); // ✅ trigger close animation
                }}  
                // onClick={() => handleSelectedChange(option.link)}
                className="flex items-center space-y-2 rounded-[6px] px-3 py-2 hover:bg-(--muted) hover:text-(--nile-blue) cursor-pointer text-sm whitespace-nowrap"
              >
                <span className="flex-1 pl-5">{option.name}</span>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HeaderDropdownMenu;
