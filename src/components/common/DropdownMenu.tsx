import { cityOptions, ratingOptions } from "@/Data";
import { motion, AnimatePresence } from "framer-motion";

interface IProps {
  isDropdownOpen: boolean;
  positionTop?: boolean;
  position?: { top?: number; bottom?: number; right: number } | null;
  buttonWidth?: number;
  maxHeight?: number;
  selected?: string;
  onSelectedChange?: (value: string) => void;
  dataList: typeof ratingOptions | typeof cityOptions;
}

const DropdownMenu = ({
  isDropdownOpen,
  positionTop = false,
  position,
  buttonWidth = 224,
  maxHeight = 200,
  selected = "all",
  onSelectedChange,
  dataList,
}: IProps) => {
  const handleSelectedChange = (value: string) => {
    onSelectedChange?.(value);
  };

  return (
    <>
      <AnimatePresence>
        {isDropdownOpen && position && (
          <motion.div
            initial={{ opacity: 0, y: positionTop ? 10 : -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: positionTop ? 10 : -10, scale: 0.95 }}
            transition={{ duration: 0.19, ease: "easeInOut" }}
            className="fixed bg-white shadow-lg rounded-lg z-50 overflow-hidden"
            style={{
              width: `${buttonWidth}px`,
              top: positionTop ? undefined : `${position.top}px`,
              bottom: positionTop ? `${position.bottom}px` : undefined,
              right: `${position.right}px`,
              maxHeight: `${maxHeight}px`,
            }}
          >
            <div
              className="border border-gray-200 rounded-lg py-2 select-none overflow-y-hidden"
              style={{ maxHeight: `${maxHeight - 4}px` }}
            >
              {dataList.map((option) => (
                <div
                  key={option.value}
                  onClick={() => handleSelectedChange(option.value)}
                  className="flex items-center rounded-[6px] px-3 py-2 hover:bg-(--secondary) hover:text-white cursor-pointer text-sm whitespace-nowrap"
                >
                  <span className="flex h-4 w-4 items-center justify-center">
                    {selected === option.value ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                      </svg>
                    ) : null}
                  </span>
                  <span className="flex-1 text-left pl-5">{option.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default DropdownMenu;
