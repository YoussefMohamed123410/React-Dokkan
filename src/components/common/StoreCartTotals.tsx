interface StoreCartTotalsProps {
  subtotal: number;
  tax: number;
  shipping: number;
}

const StoreCartTotals = ({ subtotal, tax, shipping }: StoreCartTotalsProps) => {
  const total = subtotal + shipping + tax;
  const isFreeShipping = shipping === 0;

  return (
    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
      <div className="space-y-2 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>المجموع الفرعي للمتجر</span>
          <span>{subtotal.toFixed(2)} ج.م</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>الشحن</span>
          {isFreeShipping ? (
            <span className="text-green-600">مجاني 🎉</span>
          ) : (
            <span>{shipping.toFixed(2)} ج.م</span>
          )}
        </div>
        <div className="flex justify-between text-gray-600">
          <span>الضريبة</span>
          <span>{tax.toFixed(2)} ج.م</span>
        </div>
        <div className="flex justify-between pt-2 border-t border-gray-300">
          <span className="text-[#2B2B2B] font-medium">إجمالي المتجر</span>
          <span className="text-[#005B7F] font-medium">
            {total.toFixed(2)} ج.م
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoreCartTotals;
