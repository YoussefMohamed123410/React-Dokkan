interface CartInfoMessageProps {
  storeCount: number;
}

const CartInfoMessage = ({ storeCount }: CartInfoMessageProps) => {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <div className="flex items-start gap-3">
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
          className="lucide lucide-package w-5 h-5 text-blue-600 shrink-0 mt-0.5"
        >
          <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path>
          <path d="M12 22V12"></path>
          <polyline points="3.29 7 12 12 20.71 7"></polyline>
          <path d="m7.5 4.27 9 5.15"></path>
        </svg>
        <div>
          <p className="text-sm text-blue-800 font-medium mb-1">
            شحن من عدة متاجر
          </p>
          <p className="text-xs text-blue-700">
            طلبك يحتوي على منتجات من {storeCount} متاجر. سيتم شحن المنتجات من كل
            متجر بشكل منفصل وقد تصل في أوقات مختلفة.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartInfoMessage;
