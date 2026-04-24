import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { Lock, Mail, Store, User as UserIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/common";
import { useLocalStorage } from "@/hooks";

type Role = "buyer" | "seller";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: Role;
}

interface StoredUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: Role;
  createdAt: string;
}

const getInitialRole = (roleParam: string | null): Role =>
  roleParam === "seller" ? "seller" : "buyer";

export const RegisterPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [storedUsers, setStoredUsers] = useLocalStorage<StoredUser[]>(
    "registered_users",
    [],
  );

  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: getInitialRole(searchParams.get("role")),
  });

  const handleInputChange =
    (field: keyof RegisterFormData) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const handleRoleChange = (role: Role) => {
    setFormData((prev) => ({ ...prev, role }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.name.trim()) {
      toast.error("يرجى إدخال الاسم الكامل.");
      return;
    }

    if (formData.password.length < 6) {
      toast.error("يجب أن تكون كلمة المرور 6 أحرف على الأقل.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("كلمتا المرور غير متطابقتين.");
      return;
    }

    const emailExists = storedUsers.some(
      (user) => user.email.toLowerCase() === formData.email.toLowerCase(),
    );

    if (emailExists) {
      toast.error("هذا البريد الإلكتروني مسجل بالفعل.");
      return;
    }

    const newUser: StoredUser = {
      id: `user_${Date.now()}`,
      name: formData.name.trim(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password,
      role: formData.role,
      createdAt: new Date().toISOString(),
    };

    setStoredUsers([...storedUsers, newUser]);
    toast.success("تم إنشاء الحساب بنجاح!");
    navigate(formData.role === "seller" ? "/" : "/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FEFDFB] via-[#FAF8F5] to-[#EBD8B7] py-12">
      <div className="container mx-auto flex justify-center ">
        <div className="w-full max-w-xl">
          <Link to="/" className="mb-5 flex items-center justify-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#005B7F] to-[#007AA3] shadow-md">
              <Store className="h-6 w-6 text-white" />
            </div>
            <span className="text-3xl font-semibold leading-none tracking-tight text-[#005B7F]">
              سوق المحلات
            </span>
          </Link>

          <div className="overflow-hidden rounded-3xl border-2 border-[#EBD8B7] bg-white shadow-[0_12px_32px_rgba(0,0,0,0.08)]">
            <div className="border-b-2 border-[#EBD8B7] bg-linear-to-l from-[#FAF8F5] to-[#EBD8B7] px-6 py-4 text-center">
              <h1 className="auth-title text-3xl leading-none text-[#2B2B2B]">
                إنشاء حساب جديد
              </h1>
              <p className="mt-2 text-base text-[#6B6B6B]">
                انضم إلى سوقنا اليوم
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 p-6 md:space-y-5"
              noValidate
            >
              <div>
                <p className="mb-2 text-base font-semibold text-[#2B2B2B]">
                  أريد أن:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className={`rounded-2xl border-2 p-4 text-center transition-all ${
                      formData.role === "buyer"
                        ? "border-[#005B7F] bg-[#005B7F]/5 shadow-md"
                        : "border-[#EBD8B7] hover:border-[#C49A6C]"
                    }`}
                    onClick={() => handleRoleChange("buyer")}
                  >
                    <div className="mb-2 text-2xl">🛍️</div>
                    <div className="text-base font-semibold text-[#2B2B2B]">
                      أشتري منتجات
                    </div>
                    <div className="mt-1 text-xs text-[#6B6B6B]">
                      تسوق من المتاجر
                    </div>
                  </button>
                  <button
                    type="button"
                    className={`rounded-2xl border-2 p-4 text-center transition-all ${
                      formData.role === "seller"
                        ? "border-[#C49A6C] bg-[#C49A6C]/5 shadow-md"
                        : "border-[#EBD8B7] hover:border-[#C49A6C]"
                    }`}
                    onClick={() => handleRoleChange("seller")}
                  >
                    <div className="mb-2 text-2xl">🏪</div>
                    <div className="text-base font-semibold text-[#2B2B2B]">
                      أبيع منتجات
                    </div>
                    <div className="mt-1 text-xs text-[#6B6B6B]">
                      أنشئ متجرا
                    </div>
                  </button>
                </div>
              </div>

              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-base font-semibold text-[#2B2B2B]"
                >
                  الاسم الكامل
                </label>
                <div className="relative mt-2">
                  <UserIcon className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange("name")}
                    placeholder="أدخل اسمك الكامل"
                    className="w-full rounded-xl border-2 border-[#EBD8B7] bg-[#FAF8F5] py-2.5 pr-10 pl-4 text-base text-[#2B2B2B] outline-none transition-colors focus:border-[#005B7F]"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-base font-semibold text-[#2B2B2B]"
                >
                  البريد الإلكتروني
                </label>
                <div className="relative mt-2">
                  <Mail className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange("email")}
                    placeholder="البريد@الإلكتروني.com"
                    className="w-full rounded-xl border-2 border-[#EBD8B7] bg-[#FAF8F5] py-2.5 pr-10 pl-4 text-base text-[#2B2B2B] outline-none transition-colors focus:border-[#005B7F]"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-1 block text-base font-semibold text-[#2B2B2B]"
                >
                  كلمة المرور
                </label>
                <div className="relative mt-2">
                  <Lock className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange("password")}
                    placeholder="••••••••"
                    className="w-full rounded-xl border-2 border-[#EBD8B7] bg-[#FAF8F5] py-2.5 pr-10 pl-4 text-base text-[#2B2B2B] outline-none transition-colors focus:border-[#005B7F]"
                    required
                    minLength={6}
                  />
                </div>
                <p className="mt-1 text-xs text-[#6B6B6B]">6 أحرف على الأقل</p>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-1 block text-base font-semibold text-[#2B2B2B]"
                >
                  تأكيد كلمة المرور
                </label>
                <div className="relative mt-2">
                  <Lock className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange("confirmPassword")}
                    placeholder="••••••••"
                    className="w-full rounded-xl border-2 border-[#EBD8B7] bg-[#FAF8F5] py-2.5 pr-10 pl-4 text-base text-[#2B2B2B] outline-none transition-colors focus:border-[#005B7F]"
                    required
                    minLength={6}
                  />
                </div>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="mt-1 h-4 w-4 rounded border-[#EBD8B7] accent-[#005B7F]"
                />
                <label htmlFor="terms" className="text-sm text-[#6B6B6B]">
                  أوافق على{" "}
                  <Link to="/terms" className="text-[#005B7F] hover:underline">
                    الشروط والأحكام
                  </Link>{" "}
                  و{" "}
                  <Link
                    to="/privacy"
                    className="text-[#005B7F] hover:underline"
                  >
                    سياسة الخصوصية
                  </Link>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full rounded-2xl bg-[#005B7F] py-3 text-lg font-bold text-white hover:bg-[#004A66]"
              >
                إنشاء الحساب
              </Button>

              <div className="text-center">
                <p className="text-base text-[#6B6B6B]">
                  لديك حساب بالفعل؟{" "}
                  <Link
                    to="/login"
                    className="font-medium text-[#005B7F] hover:text-[#004A66] hover:underline"
                  >
                    سجّل دخولك
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
