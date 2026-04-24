import { toast } from "sonner";
import { CheckCircle, X } from "lucide-react";

export const showSuccessToast = (message: string) => {
  toast.custom((t) => (
    <div className="relative flex flex-row-reverse items-center gap-3 bg-[#001f0f] text-white px-4 py-3 rounded-lg shadow-lg w-[320px]">
      <CheckCircle className="text-green-400 w-5 h-5" />
      {/* #001f0f */}
      <p className="text-sm font-medium text-[#3aa971]">{message}</p>

      <button
        onClick={() => toast.dismiss(t)}
        className="absolute -top-2.5  -right-2.5 text-[#3aa971] hover:text-white bg-black hover:bg-black rounded-full p-1 transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  ));
};
