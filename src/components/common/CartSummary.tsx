interface CartSummaryProps {
  count: number;
  totalShippingCost: number;
  totalTax: number;
  totalPrice: number;
  grandTotal?: number;
}

const CartSummary = ({
  count,
  totalShippingCost,
  totalTax,
  totalPrice,
  grandTotal,
}: CartSummaryProps) => {
  const total = grandTotal || totalPrice + totalShippingCost + totalTax;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm sticky top-24">
      <h2 className="mb-6">ملخص الطلب الإجمالي</h2>
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-gray-600">
          <span>المجموع الفرعي ({count} منتج)</span>
          <span>{totalPrice.toFixed(2)} ج.م</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>إجمالي الشحن</span>
          <span>{totalShippingCost.toFixed(2)} ج.م</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>إجمالي الضريبة</span>
          <span>{totalTax.toFixed(2)} ج.م</span>
        </div>
        <div className="border-t pt-3">
          <div className="flex justify-between">
            <span className="text-lg">الإجمالي الكلي</span>
            <span className="text-xl text-[#005B7F] font-medium">
              {total.toFixed(2)} ج.م
            </span>
          </div>
        </div>
      </div>
      <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-xs text-amber-800">
          💡 الشحن يُحسب لكل متجر على حدة. احصل على شحن مجاني عند الشراء بـ 500
          ج.م أو أكثر من نفس المتجر.
        </p>
      </div>
      <button
        data-slot="button"
        className="inline-flex bg-(--primary) text-white items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-10 rounded-md px-6 has-[>svg]:px-4 w-full mb-4"
      >
        إتمام الطلب
      </button>
      <button
        data-slot="button"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 has-[>svg]:px-3 w-full"
      >
        متابعة التسوق
      </button>
    </div>
  );
};

export default CartSummary;
