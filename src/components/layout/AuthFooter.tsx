import { Link } from "react-router-dom";

export const AuthFooter = () => {
  return (
    <footer className="bg-[#2B2B2B] border-t mt-auto text-white" dir="rtl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link className="flex items-center gap-2 mb-4" to="/">
              <div className="w-10 h-10 bg-[#005B7F] rounded-lg flex items-center justify-center">
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
                  className="lucide lucide-store w-6 h-6 text-white"
                >
                  <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                  <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
                  <path d="M2 7h20"></path>
                  <path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"></path>
                </svg>
              </div>
              <span className="text-lg text-white">دكان</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              منصة التجارة الإلكترونية الموثوقة لبيع وشراء المنتجات عبر الإنترنت
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                title="Facebook"
                className="text-gray-400 hover:text-[#C49A6C] transition-colors"
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
                  className="lucide lucide-facebook w-5 h-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                title="Twitter"
                className="text-gray-400 hover:text-[#C49A6C] transition-colors"
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
                  className="lucide lucide-twitter w-5 h-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                title="Instagram"
                className="text-gray-400 hover:text-[#C49A6C] transition-colors"
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
                  className="lucide lucide-instagram w-5 h-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Email"
                title="Email"
                className="text-gray-400 hover:text-[#C49A6C] transition-colors"
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
                  className="lucide lucide-mail w-5 h-5"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                  to="/"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                  to="/products"
                >
                  جميع المنتجات
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                  to="/marketplace"
                >
                  تصفح المتاجر
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                  to="/contact"
                >
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg">للتجار</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                  to="/register?role=seller"
                >
                  كن تاجراً معنا
                </Link>
              </li>
              <li>
                <Link
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                  to="/seller/dashboard"
                >
                  لوحة تحكم البائع
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  دليل البائعين
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  مركز المساعدة
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg">القوانين</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  شروط الخدمة
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  سياسة ملفات تعريف الارتباط
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  سياسة الإرجاع
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 سوق المحلات - جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};
