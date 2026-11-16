import { readChoice, readJSON, writeStorage } from "./storage.js";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Minus,
  Menu,
  Plus,
  Search,
  ShoppingBag,
  Sparkles,
  Trash2,
  X,
} from "lucide-react";

export const englishDictionary = {
  announcement:
    "Complimentary express shipping across GCC on orders over 1,000 SAR",
  home: "Home",
  collection: "Collections",
  newArrivals: "New arrivals",
  atelier: "The atelier",
  search: "Search",
  bag: "Bag",
  language: "العربية",
  heroEyebrow: "The Gulf Edition · 2026",
  heroTitle: "Quiet luxury, shaped for the Gulf.",
  heroText:
    "Abayas cut with architectural restraint, hand-finished in Riyadh and composed from exceptional Japanese and European cloth.",
  shopCollection: "Shop the collection",
  discoverCraft: "Discover the craft",
  featured: "The signature edit",
  featuredText:
    "Considered silhouettes for unhurried days and luminous evenings.",
  viewAll: "View all pieces",
  craftTitle: "Made slowly. Worn endlessly.",
  craftText:
    "Every RIWA piece passes through specialist hands. The result is modest tailoring with presence, ease, and enduring beauty.",
  exploreAtelier: "Explore our atelier",
  catalogEyebrow: "The complete wardrobe",
  catalogTitle: "Abaya collection",
  catalogText:
    "Explore fluid daily layers, sculptural occasion pieces, and hand-finished heirlooms.",
  filterBy: "Filter by fabric",
  all: "All",
  japaneseCrepe: "Japanese Crepe",
  pureLinen: "Pure Linen",
  royalSilk: "Royal Silk",
  sortBy: "Sort by",
  featuredSort: "Featured",
  lowToHigh: "Price: Low to High",
  highToLow: "Price: High to Low",
  pieces: "pieces",
  quickAdd: "Quick add",
  viewDetails: "View details",
  size: "Select size",
  sizeGuide: "Size guide",
  addToBag: "Add to bag",
  addedToBag: "Added to your bag",
  composition: "Composition",
  care: "Professional dry clean only",
  madeIn: "Hand-finished in Riyadh",
  cartTitle: "Your bag",
  emptyCart: "Your bag is waiting for something exceptional.",
  continueShopping: "Continue shopping",
  subtotal: "Subtotal",
  vat: "GCC VAT (15%)",
  total: "Total",
  freeShipping: "You have unlocked complimentary GCC shipping.",
  shippingProgress: "Add {amount} for complimentary GCC shipping.",
  checkout: "Secure checkout",
  remove: "Remove",
  quantity: "Quantity",
  close: "Close",
  sizeGuideTitle: "RIWA size guide",
  sizeGuideText:
    "Measurements are garment dimensions. For a fluid fit, allow ease through the bust.",
  length: "Length",
  bust: "Bust",
  sleeve: "Sleeve",
  inches: "in",
  checkoutTitle: "Checkout",
  checkoutText:
    "Complete your delivery details. This portfolio checkout is a front-end demonstration.",
  contact: "Contact",
  email: "Email address",
  delivery: "Delivery details",
  firstName: "First name",
  lastName: "Last name",
  address: "Address",
  city: "City",
  country: "Country",
  payment: "Payment",
  cardPlaceholder: "Card details (demo)",
  placeOrder: "Place order",
  orderSummary: "Order summary",
  orderSuccess: "Your RIWA order has been received.",
  orderSuccessText:
    "A private client advisor will contact you shortly to confirm delivery.",
  returnHome: "Return home",
  newsletter: "Private salon correspondence",
  newsletterText:
    "Receive atelier previews, private appointments, and seasonal collection notes.",
  emailPlaceholder: "Your email address",
  subscribe: "Subscribe",
  footerCollections: "Collections",
  footerService: "Client services",
  footerHouse: "The house",
  shippingReturns: "Shipping & returns",
  contactUs: "Contact us",
  privacy: "Privacy",
  newsletterPreview: "Newsletter preview only. No email was sent and no subscription was created.",
  shippingInfo: "This is a storefront demo. Shipping and returns are not processed.",
  contactInfo: "This portfolio demo has no connected customer support service.",
  heritageInfo: "RIWA explores contemporary Gulf abaya design through a bilingual storefront experience.",
  privacyInfo: "Language, currency and cart choices are stored in your browser. Demo checkout details are not sent to a server. Images and fonts may load from third-party hosts.",
  heritage: "Our heritage",
  copyright: "© 2026 RIWA Haute Abaya Atelier. All rights reserved.",
  menu: "Menu",
  currency: "Currency",
  back: "Back",
  productStory:
    "A precise study in movement and proportion, finished with subtle artisanal details.",
  selectSizeError: "Please select a size first.",
};
export const arabicDictionary = {
  announcement: "شحن سريع مجاني لجميع دول الخليج للطلبات فوق 1,000 ر.س",
  home: "الرئيسية",
  collection: "المجموعات",
  newArrivals: "وصل حديثاً",
  atelier: "دار رِواء",
  search: "بحث",
  bag: "الحقيبة",
  language: "EN",
  heroEyebrow: "إصدار الخليج · 2026",
  heroTitle: "فخامة هادئة صُممت للخليج.",
  heroText:
    "عباءات بقصّات معمارية هادئة، تُنجز يدوياً في الرياض من أجود الأقمشة اليابانية والأوروبية.",
  shopCollection: "تسوقي المجموعة",
  discoverCraft: "اكتشفي الحرفة",
  featured: "مختارات رِواء",
  featuredText: "قصّات مدروسة للأيام الهادئة والأمسيات المضيئة.",
  viewAll: "عرض جميع القطع",
  craftTitle: "صُنعت بتمهّل، لتدوم طويلاً.",
  craftText:
    "تمر كل قطعة من رِواء بين أيدي حرفيين متخصصين، لتقدّم أناقة محتشمة بحضور وانسيابية وجمال دائم.",
  exploreAtelier: "اكتشفي دارنا",
  catalogEyebrow: "خزانة متكاملة",
  catalogTitle: "مجموعة العباءات",
  catalogText:
    "اكتشفي طبقات يومية انسيابية، وقطع مناسبات منحوتة، وتصاميم تراثية منجزة يدوياً.",
  filterBy: "التصفية حسب القماش",
  all: "الكل",
  japaneseCrepe: "كريب ياباني",
  pureLinen: "كتان نقي",
  royalSilk: "حرير ملكي",
  sortBy: "الترتيب",
  featuredSort: "المميزة",
  lowToHigh: "السعر: من الأقل للأعلى",
  highToLow: "السعر: من الأعلى للأقل",
  pieces: "قطع",
  quickAdd: "إضافة سريعة",
  viewDetails: "عرض التفاصيل",
  size: "اختاري المقاس",
  sizeGuide: "دليل المقاسات",
  addToBag: "أضيفي للحقيبة",
  addedToBag: "تمت الإضافة إلى حقيبتك",
  composition: "الخامة",
  care: "تنظيف جاف احترافي فقط",
  madeIn: "منجزة يدوياً في الرياض",
  cartTitle: "حقيبتك",
  emptyCart: "حقيبتك تنتظر قطعة استثنائية.",
  continueShopping: "متابعة التسوق",
  subtotal: "المجموع الفرعي",
  vat: "ضريبة الخليج (15%)",
  total: "الإجمالي",
  freeShipping: "لقد حصلتِ على شحن خليجي مجاني.",
  shippingProgress: "أضيفي {amount} للحصول على شحن خليجي مجاني.",
  checkout: "إتمام الشراء بأمان",
  remove: "إزالة",
  quantity: "الكمية",
  close: "إغلاق",
  sizeGuideTitle: "دليل مقاسات رِواء",
  sizeGuideText:
    "القياسات هي أبعاد القطعة. لقصة انسيابية، اتركي مساحة مريحة عند الصدر.",
  length: "الطول",
  bust: "الصدر",
  sleeve: "الكم",
  inches: "إنش",
  checkoutTitle: "إتمام الطلب",
  checkoutText:
    "أدخلي بيانات التوصيل. صفحة الدفع هذه نموذج فرونت إند لأغراض العرض.",
  contact: "التواصل",
  email: "البريد الإلكتروني",
  delivery: "بيانات التوصيل",
  firstName: "الاسم الأول",
  lastName: "اسم العائلة",
  address: "العنوان",
  city: "المدينة",
  country: "الدولة",
  payment: "الدفع",
  cardPlaceholder: "بيانات البطاقة (تجريبي)",
  placeOrder: "تأكيد الطلب",
  orderSummary: "ملخص الطلب",
  orderSuccess: "تم استلام طلبك من رِواء.",
  orderSuccessText: "سيتواصل معكِ مستشار العملاء قريباً لتأكيد التوصيل.",
  returnHome: "العودة للرئيسية",
  newsletter: "رسائل الصالون الخاص",
  newsletterText:
    "استلمي معاينات الدار، والمواعيد الخاصة، وأخبار المجموعات الموسمية.",
  emailPlaceholder: "بريدك الإلكتروني",
  subscribe: "اشتراك",
  footerCollections: "المجموعات",
  footerService: "خدمة العملاء",
  footerHouse: "الدار",
  shippingReturns: "الشحن والاسترجاع",
  contactUs: "تواصلي معنا",
  privacy: "الخصوصية",
  newsletterPreview: "هذا نموذج تجريبي للنشرة. لم يتم إرسال بريد أو إنشاء اشتراك.",
  shippingInfo: "هذا متجر تجريبي؛ لا يتم تنفيذ الشحن أو الإرجاع.",
  contactInfo: "هذا مشروع لمعرض الأعمال، ولا يرتبط بخدمة دعم عملاء فعلية.",
  heritageInfo: "تستكشف رِواء تصميم العباءة الخليجية المعاصرة من خلال تجربة متجر ثنائية اللغة.",
  privacyInfo: "تُحفظ اللغة والعملة والسلة في متصفحك. لا تُرسل بيانات الدفع التجريبية إلى خادم. قد تُحمّل الصور والخطوط من جهات خارجية.",
  heritage: "إرثنا",
  copyright: "© 2026 دار رِواء للعباءات الفاخرة. جميع الحقوق محفوظة.",
  menu: "القائمة",
  currency: "العملة",
  back: "عودة",
  productStory: "دراسة دقيقة للحركة والتناسب، تنتهي بلمسات حرفية هادئة.",
  selectSizeError: "يرجى اختيار المقاس أولاً.",
};
export const i18nDictionary = { en: englishDictionary, ar: arabicDictionary };

const VIEW_NAMES = {
  HOME: "HOME",
  COLLECTION: "COLLECTION",
  PRODUCT_DETAIL: "PRODUCT_DETAIL",
  CHECKOUT: "CHECKOUT",
};
const CURRENCY_RATES = { SAR: 1, AED: 0.98, USD: 0.267 };
const CART_STORAGE_KEY = "riwa_cart_v1";
const PREFERENCE_STORAGE_KEY = "riwa_preferences_v1";
const FREE_SHIPPING_THRESHOLD = 1000;
const PRODUCT_IMAGES = [
  [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB928guHRqAqT_g4_3Tll2MhB2_81Uvl5XLmx9StXMpBB2lRsBDhsJP3IVq__Pz2I8y_VrvEvHe4mWie_jHgotOvwooMHNx_mI-wZbyf_cMd3iAX79Q3eqOLtJ6VVZcDD0vlh2Ma-Y4fPNOsCDmeQuTEENYlBYVGdHoXjmBGFLD9zV-0nDJe3CmBh2tbY6bj5w1WCPbzoQApZ41OyN5B6B1l0IbS6Gcno2BJ0yVhbu7Ks_ZpV3naylWiw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD4kVWm8YIpnmXZRasv7jiqhJQUM2XKKAwtNdnjk3Un0RWfmr1WI69ODdkwTFx2-tT1rzKV18FZcdBKk7-DbJyCW5RZdXxucyA5Xa21H4-4NLq8hYAKFbCVq4u4dcmhzFbpP4ZtbwY7QQ6sN4WhktTvkKbmTWzK1ixEgkAX6jMwQhVbz97uFiUic1SOL4uYoPS9O9Yzpzn2A79yLYhMOgEWvm_-b-Dq5K3NluzjLHPsOjl4gg9is4GcaA",
  ],
  [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDavIdOpDfHL6MY6NgV8-pvsslas011HWlB2gzGY4-7SFLVvxd6yGwq8th_tIX71uO_bNoFARAZW72HGgK1edBw-_FKK5bhFWDcPl0i_7HwvKOQsEZzJUqyHTr06OLAHUAx_xxbjXNtoTOaE5VWW_SbiyCFcDYbQn_oPgh_SDUOhrmaTM5zPjvxq0QKYUHOqWQfjKu3onFY__Cg0AUAl9Pt3uIKC4gMpB5Ls5EP6qRuxQ_t1rv6909zjw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAu9-ZbPEKmE8RRW1LypizKmwD9KMOpJYgExT92eRdRxa0tSnl3OecjFs6YlMMYUPGtZ9-C6DgKYsaPnEAXmW2bogdUD7kfR42_8wSLTlfJwK0A_n0It6sFZ9CcxMLVmLWsGQHYMOovQ4afable4Y5RQQXym-WcHVI8qGU1O3L41nn76yT_2CZ3Jw9AgaRUVuaLlSGArZuAKo-KtGdHd2_6TxnE7BR0gzNtvQ1dgLvN4mA2FE4BlaIxgw",
  ],
  [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDzugPu-kYYnGLfRTo7JlbnHM_P3ufzquRqamEi2RLmJ_yosdddMnpZMjwW6oMnvzodW-SE-wh6F-jrSfRwxmOhHQekN41POFeX8_bYxwStQ7aUEpzsQqsNe6j36OQiVFccxQ5mlXo5uJpuNJoBu5nW2o-vWULf1dkS9Sts-ffj5xQniHuSD4fQa200GzGtd_ofNjO38kTp6q3kgh9phSdtfJIpQ89qgS-VXdk5vZCNQxUeOkBbi_zVAQ",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDCHuEyJuGFDVUQmyHqR3dowhwA1-4lYC2MAsHrZpHe96Ljp8PaYLx3i5pzpc6-5FiO31QraeNXJ-FYOyl85SNXCLYEDEvZf2fasVGEEL-hnxnK1IG5SLRur_YNYw_baoQ__Gp3TcZg9PdcCv_ESihgfGHv7MEdLAJFuq27bvL-DRq_rfPRylWizCYZaVNzGhYH_9wmJruv0gjaXmbBLir_cbQWB5AECRBaIry06MuN8y2ThCgK04LYeg",
  ],
  [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDxAQEbaSd41DtjA3c1JK-7c86EmWwucW5P8YELm1duKGMqkQyRzVguU5Km1IuBNRzXyOH6HIfEAziHBb7aOY3fgDQkaOg_YdUkDrsmt83te8qbSi74O7ofM-FKOE0wZ6lQTs8ToKKprcvtgAV-ASPWZIB7xPjEes19TiZ6fbVaWo-8mcphmxsY4PL2oOrRrCuMa1uYyp9koanSjzhp4I46dqOTA1mCSMVQwpsyoU9cMozgLOCBG_iAnw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD0urqxpxANiknWWazA7us5sGfQHgazd7WSU0enqIai2sLwareD4EaYxZ4UWOTmXHYxA2n94dJ1AxvgWuoDujGJv8xYcGkeP-Y4JblTJ7rHgEmorBiaaH9aH5b4kfZTtx85cMvkyTx51ju8MgbZgLKOBCeAU-SlKcxtHYMLjuQhZtgFaAVwlGc2pkQLbm43qorLqiKBbmV7DPyXpAa9Kxpiy5IsTl3x3Hc1AZXBwS3GCwvj5rA9PUTUuQ",
  ],
  [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCB01QSHAXvyLm--Mi_wPOOOC9pZ-ynJAPXmDDi0Nm7St_ZZM0jucB0eJREupxl8x0a0cooxuTrUtXcIGOMHNYA3wqhk-c9hHjLkfJUuUAJvIT763Twwo1x-pvNDarAf1_r7pG6jbgNuY2_bsq8zquIWNq_At9Jt69mcrs8NpXT5KLEa5AiRUh7GPrmUtR27uXf2uVMNHjX_nNhyUHlWo8Y5s_GrQJAfvCCxV66CjPhU-uZJsRIaf8kaA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD0IU6LN74tMCnEkRMP4_D_d0LduS_-_vBgv79NjlA2bOHs3_v14e7cp_NSYQGDihujXw4VnGNP_22yOudbM6iWkBsfQvfaYbCfsTTmS0UoVESrGfXGrSu75NE1lsQ5f30eoROHQ9nk36AO06v_hhteto7UMAbdJAK0NPNPsKHyg78EDlk35hMOpYBM7lb7eguVSguh1nDuuIPSf1UO3hpRBf1qf1O1HZe2TIbzt2pk4P98CDABUAzvJw",
  ],
  [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDWA7sxAjgr3the1dpiSlmZbZyPKa-3RruCH76yfHBfH7ZaskxE5vtMs0sNzGQw6Oy5_jCW64dhCtlUc0URWDVT8nrOjBxu3QjdMrVIemOtRuVuUmgOJObmxIARoaz_rmmCCoD_HGoYDtZ3P4EmewQcdpE0hDM_qJCIl7qzn2v4ZxaNQEuzH2VDCVWC7V_FXk_zCCzK3hqJQBHXZXzAD7YYxy92BnIaDMPrKdoePk0PjJa2orpZGePINA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCywJWBeDnMRvo-yWJmwtdIcy7zpBzUU9IOWpBqQD-gRfKBqZb1MqPWsrXOtWLExF9K0vb_ASo6x7tL9pKCo_pX0xQMNQKSi1SgFViO8CKfMpko6fm8JJ-q1roM_25j0e6uq_xaXarNY7GRP6lVDqYDHKaC7yTL7zYDZUGbtoER1dv-HcgkEGq7fizUO3bdKbGPdQE0Z5__aAnNy2rFPqy8sfcdcMaYZ0DK_cyR6hhrpAKow5sK0-ur2w",
  ],
];

export const abayaCatalogData = [
  [
    "noor-bisht",
    "Noor Zari Bisht",
    "بشت نور المطرز",
    1890,
    "japaneseCrepe",
    "Bisht",
  ],
  [
    "sahra-cloche",
    "Sahra Sculpted Cloche",
    "عباءة صحراء المنحوتة",
    1450,
    "pureLinen",
    "Cloche",
  ],
  [
    "layl-organza",
    "Layl Organza Veil",
    "عباءة ليل الأورغانزا",
    2380,
    "royalSilk",
    "Layered",
  ],
  [
    "sama-tailored",
    "Sama Tailored Abaya",
    "عباءة سما المفصلة",
    1290,
    "japaneseCrepe",
    "Straight",
  ],
  [
    "reem-cocoon",
    "Reem Silk Cocoon",
    "عباءة ريم الحريرية",
    1720,
    "pureLinen",
    "Cocoon",
  ],
  [
    "malak-bullion",
    "Malak Bullion Bisht",
    "بشت ملك بخيوط الذهب",
    2750,
    "royalSilk",
    "Bisht",
  ],
].map((product, index) => ({
  id: product[0],
  nameEn: product[1],
  nameAr: product[2],
  price: product[3],
  fabric: product[4],
  silhouette: product[5],
  sizes: [52, 54, 56, 58, 60],
  images: PRODUCT_IMAGES[index],
}));
const formatPrice = (price, currency) =>
  new Intl.NumberFormat(currency === "USD" ? "en-US" : "en-SA", {
    maximumFractionDigits: 0,
  }).format(price * CURRENCY_RATES[currency]);
const Arrow = ({ back = false }) => (
  <span className="directional">
    {back ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
  </span>
);
export function LanguageToggle({ language, onSwitch, t }) {
  return (
    <button
      className="control"
      onClick={() => onSwitch(language === "en" ? "ar" : "en")}
    >
      {t("language")}
    </button>
  );
}
export function CurrencySelector({ currency, onChange, t }) {
  const [isCurrencyMenuOpen, setIsCurrencyMenuOpen] = useState(false);
  return (
    <div className="currency-picker">
      <button
        type="button"
        className="currency"
        onClick={() => setIsCurrencyMenuOpen((isOpen) => !isOpen)}
        aria-label={t("currency")}
        aria-expanded={isCurrencyMenuOpen}
      >
        <span>{currency}</span>
        <ChevronDown size={13} />
      </button>
      {isCurrencyMenuOpen && (
        <div className="currency-menu" role="menu">
          {Object.keys(CURRENCY_RATES).map((currencyOption) => (
            <button
              type="button"
              role="menuitem"
              key={currencyOption}
              className={currency === currencyOption ? "active" : ""}
              onClick={() => {
                onChange(currencyOption);
                setIsCurrencyMenuOpen(false);
              }}
            >
              {currencyOption}
              {currency === currencyOption && <Check size={14} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
export function AnnouncementBar({ t }) {
  return (
    <div className="announcement" role="region" aria-label="RIWA">
      <Sparkles size={13} />
      {t("announcement")}
    </div>
  );
}
export function HeaderNav({
  view,
  language,
  currency,
  cartCount,
  onNavigate,
  onLanguageSwitch,
  onCurrencyChange,
  onCartOpen,
  t,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = (target, sectionId = null) => {
    onNavigate(target);
    setMenuOpen(false);
    if (sectionId) {
      window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  };
  return (
    <>
      <AnnouncementBar t={t} />
      <header className="site-header">
        <div className="header-inner">
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t("menu")}
          >
            <Menu />
          </button>
          <button className="brand" onClick={() => navigate(VIEW_NAMES.HOME)}>
            <b>RIWA</b>
            <span>رِواء</span>
          </button>
          <nav className={menuOpen ? "open" : ""}>
            <button
              className={view === VIEW_NAMES.HOME ? "active" : ""}
              onClick={() => navigate(VIEW_NAMES.HOME)}
            >
              {t("home")}
            </button>
            <button
              className={view === VIEW_NAMES.COLLECTION ? "active" : ""}
              onClick={() => navigate(VIEW_NAMES.COLLECTION)}
            >
              {t("collection")}
            </button>
            <button onClick={() => navigate(VIEW_NAMES.HOME, "new-arrivals")}>
              {t("newArrivals")}
            </button>
            <button onClick={() => navigate(VIEW_NAMES.HOME, "riwa-craft")}>
              {t("atelier")}
            </button>
          </nav>
          <div className="header-actions">
            <CurrencySelector
              currency={currency}
              onChange={onCurrencyChange}
              t={t}
            />
            <LanguageToggle
              language={language}
              onSwitch={onLanguageSwitch}
              t={t}
            />
            <button
              className="search-button"
              aria-label={t("search")}
              onClick={() => navigate(VIEW_NAMES.COLLECTION)}
            >
              <Search size={18} />
            </button>
            <button className="bag-button" onClick={onCartOpen}>
              <ShoppingBag size={18} />
              <span>{t("bag")}</span>
              <b>{cartCount}</b>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export function ProductCard({
  product,
  language,
  currency,
  onNavigate,
  onQuickAdd,
  t,
}) {
  const name = language === "ar" ? product.nameAr : product.nameEn;
  return (
    <article className="product-card">
      <button
        className="product-image"
        onClick={() => onNavigate(VIEW_NAMES.PRODUCT_DETAIL, product)}
      >
        <img src={product.images[0]} alt={name} />
        <img className="hover-image" src={product.images[1]} alt="" />
        <em>{t("viewDetails")}</em>
      </button>
      <div className="product-meta">
        <div>
          <p>{t(product.fabric)}</p>
          <h3>
            <button
              onClick={() => onNavigate(VIEW_NAMES.PRODUCT_DETAIL, product)}
            >
              {name}
            </button>
          </h3>
          <span>
            {formatPrice(product.price, currency)} {currency}
          </span>
        </div>
        <button
          className="quick-add"
          onClick={() => onNavigate(VIEW_NAMES.PRODUCT_DETAIL, product)}
          aria-label={t("size")}
        >
          <Plus size={18} />
        </button>
      </div>
    </article>
  );
}
export function HomeView({ language, currency, onNavigate, onQuickAdd, t }) {
  const hero =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAnbdBY8aDwq8SPSysESiLyMekUJKHG6JxVjbe-eDkDrkKxfowop2hCXJgyD79dVgpx3VmtLHyeDvjJ6r_Un9oYzpks0f8if86deCyZPD8UjUkW09nHQ8X91OKqdCy3W9fBitcCf9vSqVALyuii-skIkNYpGQ40E3coVNe0J9sOb6jlwBjuz7abm4faCsXfSGbP_iim7rmX5FclgEWgcpaISpEgPNHecMuRAmynD8HNJvRMsjKJKdMo-w";
  const scrollToCraft = () =>
    document.getElementById("riwa-craft")?.scrollIntoView({ behavior: "smooth" });
  return (
    <main>
      <section className="hero">
        <img src={hero} alt="" />
        <div className="hero-shade" />
        <div className="hero-copy">
          <p>{t("heroEyebrow")}</p>
          <h1>{t("heroTitle")}</h1>
          <i />
          <span>{t("heroText")}</span>
          <div>
            <button
              className="primary light"
              onClick={() => onNavigate(VIEW_NAMES.COLLECTION)}
            >
              {t("shopCollection")}
              <Arrow />
            </button>
            <button className="text-button light" onClick={scrollToCraft}>
              {t("discoverCraft")}
            </button>
          </div>
        </div>
      </section>
      <section className="section" id="new-arrivals">
        <header className="section-heading">
          <div>
            <p>{t("newArrivals")}</p>
            <h2>{t("featured")}</h2>
            <span>{t("featuredText")}</span>
          </div>
          <button
            className="text-button"
            onClick={() => onNavigate(VIEW_NAMES.COLLECTION)}
          >
            {t("viewAll")}
            <Arrow />
          </button>
        </header>
        <div className="product-grid">
          {abayaCatalogData.slice(0, 3).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              language={language}
              currency={currency}
              onNavigate={onNavigate}
              onQuickAdd={onQuickAdd}
              t={t}
            />
          ))}
        </div>
      </section>
      <section className="craft" id="riwa-craft">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDg0WuBc-L9xZPeWpe1eup7-cz5tPlXh2wJ6COh0fqTn-xNdr_qv1rNmDNLHkrGPh8XtuPXNE1c-nWcPVdWTBcr8z76j_TJBWoj_L-odPyveZeKJq3CUMcssIjLJkMq8fRXLtuHiydnRIC19vSSw412uTYWEs-ySb6y-D7lyc95kolI6183dX2RZ2ktX4cNslu6KuH4cK-z5gCoa7YVOZNjIHklWS2NVZ-W3xFnpqhjyB83NaggdrgGYQ"
          alt=""
        />
        <div>
          <p>{t("atelier")}</p>
          <h2>{t("craftTitle")}</h2>
          <span>{t("craftText")}</span>
          <button className="text-button" onClick={scrollToCraft}>
            {t("exploreAtelier")}
            <Arrow />
          </button>
        </div>
      </section>
    </main>
  );
}
export function CatalogView({
  language,
  currency,
  activeFilter,
  onFilterChange,
  onNavigate,
  onQuickAdd,
  t,
}) {
  const [sort, setSort] = useState("featuredSort");
  const products = useMemo(() => {
    const result =
      activeFilter === "all"
        ? [...abayaCatalogData]
        : abayaCatalogData.filter((product) => product.fabric === activeFilter);
    if (sort === "lowToHigh")
      result.sort((first, second) => first.price - second.price);
    if (sort === "highToLow")
      result.sort((first, second) => second.price - first.price);
    return result;
  }, [activeFilter, sort]);
  return (
    <main className="catalog">
      <header className="catalog-hero">
        <p>{t("catalogEyebrow")}</p>
        <h1>{t("catalogTitle")}</h1>
        <span>{t("catalogText")}</span>
      </header>
      <div className="toolbar">
        <div>
          <span>{t("filterBy")}</span>
          {["all", "japaneseCrepe", "pureLinen", "royalSilk"].map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? "active" : ""}
              onClick={() => onFilterChange(filter)}
            >
              {t(filter)}
            </button>
          ))}
        </div>
        <label>
          <span>{t("sortBy")}</span>
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
          >
            <option value="featuredSort">{t("featuredSort")}</option>
            <option value="lowToHigh">{t("lowToHigh")}</option>
            <option value="highToLow">{t("highToLow")}</option>
          </select>
        </label>
      </div>
      <p className="count">
        {products.length} {t("pieces")}
      </p>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            language={language}
            currency={currency}
            onNavigate={onNavigate}
            onQuickAdd={onQuickAdd}
            t={t}
          />
        ))}
      </div>
    </main>
  );
}

export function ProductDetailView({
  product,
  language,
  currency,
  onNavigate,
  onAdd,
  onGuide,
  t,
}) {
  const [size, setSize] = useState(null);
  const [image, setImage] = useState(product.images[0]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    setSize(null);
    setImage(product.images[0]);
    setMessage("");
  }, [product]);
  const name = language === "ar" ? product.nameAr : product.nameEn;
  const add = () => {
    if (!size) {
      setMessage(t("selectSizeError"));
      return;
    }
    onAdd(product, size);
    setMessage(t("addedToBag"));
  };
  return (
    <main className="pdp">
      <button
        className="back"
        onClick={() => onNavigate(VIEW_NAMES.COLLECTION)}
      >
        <Arrow back />
        {t("back")}
      </button>
      <div className="pdp-grid">
        <div className="gallery">
          <div>
            {product.images.map((source, index) => (
              <button
                className={image === source ? "active" : ""}
                key={source}
                onClick={() => setImage(source)}
              >
                <img src={source} alt={`${name} ${index + 1}`} />
              </button>
            ))}
          </div>
          <img className="main-image" src={image} alt={name} />
        </div>
        <div className="product-info">
          <p>
            {t(product.fabric)} · {product.silhouette}
          </p>
          <h1>{name}</h1>
          <strong>
            {formatPrice(product.price, currency)} {currency}
          </strong>
          <p className="story">{t("productStory")}</p>
          <div className="size-title">
            <span>{t("size")}</span>
            <button onClick={onGuide}>{t("sizeGuide")}</button>
          </div>
          <div className="sizes">
            {product.sizes.map((option) => (
              <button
                className={size === option ? "active" : ""}
                key={option}
                onClick={() => {
                  setSize(option);
                  setMessage("");
                }}
              >
                {option}
              </button>
            ))}
          </div>
          {message && <p className="message">{message}</p>}
          <button className="primary full" onClick={add}>
            {t("addToBag")}
            <ShoppingBag size={18} />
          </button>
          <div className="details">
            <div>
              <span>{t("composition")}</span>
              <p>{t(product.fabric)}</p>
            </div>
            <div>
              <span>{t("care")}</span>
              <p>{t("madeIn")}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export function SizeGuideModal({ open, onClose, t }) {
  useEffect(() => {
    if (!open) return;
    const escape = (event) => event.key === "Escape" && onClose();
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="modal">
      <button className="backdrop" onClick={onClose} aria-label={t("close")} />
      <div className="modal-card">
        <button className="close" onClick={onClose}>
          <X />
        </button>
        <p>RIWA | رِواء</p>
        <h2>{t("sizeGuideTitle")}</h2>
        <span>{t("sizeGuideText")}</span>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>{t("size")}</th>
                <th>
                  {t("length")} ({t("inches")})
                </th>
                <th>
                  {t("bust")} ({t("inches")})
                </th>
                <th>
                  {t("sleeve")} ({t("inches")})
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                [52, 52, 42, 23],
                [54, 54, 44, 24],
                [56, 56, 46, 24.5],
                [58, 58, 48, 25],
                [60, 60, 50, 25.5],
              ].map((row) => (
                <tr key={row[0]}>
                  {row.map((cell) => (
                    <td key={cell}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export function SlideOverCartDrawer({
  open,
  items,
  language,
  currency,
  onClose,
  onQuantity,
  onRemove,
  onCheckout,
  t,
}) {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const vat = subtotal * 0.15;
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  return (
    <div className={`cart-root ${open ? "open" : ""}`}>
      <button className="backdrop" onClick={onClose} aria-label={t("close")} />
      <aside className="cart">
        <header>
          <div>
            <p>RIWA | رِواء</p>
            <h2>{t("cartTitle")}</h2>
          </div>
          <button onClick={onClose} aria-label={t("close")}>
            <X />
          </button>
        </header>
        {!items.length ? (
          <div className="empty">
            <ShoppingBag />
            <p>{t("emptyCart")}</p>
            <button className="text-button" onClick={onClose}>
              {t("continueShopping")}
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <article key={item.cartItemId}>
                  <img src={item.image} alt="" />
                  <div>
                    <h3>{language === "ar" ? item.nameAr : item.nameEn}</h3>
                    <p>
                      {t("size")}: {item.size}
                    </p>
                    <strong>
                      {formatPrice(item.price * item.quantity, currency)}{" "}
                      {currency}
                    </strong>
                    <div className="quantity">
                      <button onClick={() => onQuantity(item.cartItemId, -1)}>
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => onQuantity(item.cartItemId, 1)}>
                        <Plus size={14} />
                      </button>
                      <button
                        className="remove"
                        onClick={() => onRemove(item.cartItemId)}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <footer>
              <div className="meter">
                <i>
                  <span
                    style={{
                      width: `${Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)}%`,
                    }}
                  />
                </i>
                <p>
                  {remaining
                    ? t("shippingProgress").replace(
                        "{amount}",
                        `${formatPrice(remaining, currency)} ${currency}`,
                      )
                    : t("freeShipping")}
                </p>
              </div>
              <dl>
                <div>
                  <dt>{t("subtotal")}</dt>
                  <dd>
                    {formatPrice(subtotal, currency)} {currency}
                  </dd>
                </div>
                <div>
                  <dt>{t("vat")}</dt>
                  <dd>
                    {formatPrice(vat, currency)} {currency}
                  </dd>
                </div>
                <div className="total">
                  <dt>{t("total")}</dt>
                  <dd>
                    {formatPrice(subtotal + vat, currency)} {currency}
                  </dd>
                </div>
              </dl>
              <button className="primary full" onClick={onCheckout}>
                {t("checkout")}
                <Arrow />
              </button>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}

export function CheckoutView({ items, language, currency, onNavigate, onComplete, t }) {
  const [submitted, setSubmitted] = useState(false);
  const total =
    items.reduce((sum, item) => sum + item.price * item.quantity, 0) * 1.15;
  if (submitted)
    return (
      <main className="success">
        <Check />
        <h1>{t("orderSuccess")}</h1>
        <p>{t("orderSuccessText")}</p>
        <button className="primary" onClick={() => onNavigate(VIEW_NAMES.HOME)}>
          {t("returnHome")}
        </button>
      </main>
    );
  return (
    <main className="checkout">
      <button
        className="back"
        onClick={() => onNavigate(VIEW_NAMES.COLLECTION)}
      >
        <Arrow back />
        {t("continueShopping")}
      </button>
      <header>
        <p>RIWA | رِواء</p>
        <h1>{t("checkoutTitle")}</h1>
        <span>{t("checkoutText")}</span>
      </header>
      <div className="checkout-grid">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
            onComplete();
          }}
        >
          <fieldset>
            <legend>{t("contact")}</legend>
            <input required type="email" placeholder={t("email")} />
          </fieldset>
          <fieldset>
            <legend>{t("delivery")}</legend>
            <div>
              <input required placeholder={t("firstName")} />
              <input required placeholder={t("lastName")} />
              <input required className="wide" placeholder={t("address")} />
              <input required placeholder={t("city")} />
              <input required placeholder={t("country")} />
            </div>
          </fieldset>
          <fieldset>
            <legend>{t("payment")}</legend>
            <input required placeholder={t("cardPlaceholder")} />
          </fieldset>
          <button className="primary full">{t("placeOrder")}</button>
        </form>
        <aside className="summary">
          <h2>{t("orderSummary")}</h2>
          {items.map((item) => (
            <div key={item.cartItemId}>
              <img src={item.image} alt="" />
              <span>
                {language === "ar" ? item.nameAr : item.nameEn}
                <small>
                  {t("size")}: {item.size} · {item.quantity}
                </small>
              </span>
              <strong>
                {formatPrice(item.price * item.quantity, currency)} {currency}
              </strong>
            </div>
          ))}
          <footer>
            <span>{t("total")}</span>
            <strong>
              {formatPrice(total, currency)} {currency}
            </strong>
          </footer>
        </aside>
      </div>
    </main>
  );
}
export function FooterSection({ onNavigate, t }) {
  const [information, setInformation] = useState(null);
  const [newsletterPreview, setNewsletterPreview] = useState(false);
  return (
    <footer className="site-footer">
      <div className="newsletter">
        <div>
          <p>RIWA | رِواء</p>
          <h2>{t("newsletter")}</h2>
          <span>{t("newsletterText")}</span>
        </div>
        <form onSubmit={(event) => { event.preventDefault(); setNewsletterPreview(true); }}>
          <input required type="email" placeholder={t("emailPlaceholder")} aria-label={t("email")} />
          <button>{t("subscribe")}</button>
        </form>
        {newsletterPreview && <p role="status">{t("newsletterPreview")}</p>}
      </div>
      <div className="footer-grid">
        <div className="footer-brand">
          <b>RIWA</b>
          <span>رِواء</span>
        </div>
        <div>
          <h3>{t("footerCollections")}</h3>
          <button onClick={() => onNavigate(VIEW_NAMES.COLLECTION)}>
            {t("collection")}
          </button>
          <button onClick={() => onNavigate(VIEW_NAMES.COLLECTION)}>
            {t("newArrivals")}
          </button>
        </div>
        <div>
          <h3>{t("footerService")}</h3>
          <button onClick={() => setInformation("shippingInfo")}>{t("shippingReturns")}</button>
          <button onClick={() => setInformation("contactInfo")}>{t("contactUs")}</button>
        </div>
        <div>
          <h3>{t("footerHouse")}</h3>
          <button onClick={() => setInformation("heritageInfo")}>{t("heritage")}</button>
          <button onClick={() => setInformation("privacyInfo")}>{t("privacy")}</button>
        </div>
      </div>
      {information && <p className="footer-information" role="status">{t(information)}</p>}
      <p className="copyright">{t("copyright")}</p>
    </footer>
  );
}

export default function App() {
  const preferences = (() => {
    try {
      return readJSON(PREFERENCE_STORAGE_KEY, {}, (value) => value !== null && typeof value === "object" && !Array.isArray(value));
    } catch {
      return {};
    }
  })();
  const [currentLanguage, setCurrentLanguage] = useState(
    ["en", "ar"].includes(preferences.language) ? preferences.language : "en",
  );
  const [selectedCurrency, setSelectedCurrency] = useState(
    ["SAR", "AED", "USD"].includes(preferences.currency) ? preferences.currency : "SAR",
  );
  const [cartItems, setCartItems] = useState(() => {
    try {
      return readJSON(CART_STORAGE_KEY, [], (value) => Array.isArray(value) && value.every((item) => item && typeof item.cartItemId === "string" && typeof item.nameEn === "string" && typeof item.nameAr === "string" && Number.isFinite(item.price) && item.price >= 0 && Number.isInteger(item.quantity) && item.quantity > 0));
    } catch {
      return [];
    }
  });
  const [activeView, setActiveView] = useState(VIEW_NAMES.HOME);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const t = (key) => i18nDictionary[currentLanguage][key] ?? key;
  useEffect(() => {
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLanguage;
    writeStorage(
      PREFERENCE_STORAGE_KEY,
      JSON.stringify({ language: currentLanguage, currency: selectedCurrency }),
    );
  }, [currentLanguage, selectedCurrency]);
  useEffect(() => {
    writeStorage(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeView, selectedProduct]);
  const handleAddToCart = (product, selectedSize) => {
    const cartItemId = `${product.id}-${selectedSize}`;
    setCartItems((items) => {
      const found = items.find((item) => item.cartItemId === cartItemId);
      return found
        ? items.map((item) =>
            item.cartItemId === cartItemId
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          )
        : [
            ...items,
            {
              cartItemId,
              nameEn: product.nameEn,
              nameAr: product.nameAr,
              price: product.price,
              size: selectedSize,
              image: product.images[0],
              quantity: 1,
            },
          ];
    });
    setIsCartOpen(true);
  };
  const handleUpdateQuantity = (cartItemId, delta) =>
    setCartItems((items) =>
      items.map((item) =>
        item.cartItemId === cartItemId
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  const handleRemoveFromCart = (cartItemId) =>
    setCartItems((items) =>
      items.filter((item) => item.cartItemId !== cartItemId),
    );
  const handleNavigate = (viewName, productData = null) => {
    if (productData) setSelectedProduct(productData);
    setActiveView(viewName);
    setIsCartOpen(false);
  };
  const handleLanguageSwitch = (targetLang) => setCurrentLanguage(targetLang);
  const handleCurrencyChange = (targetCurrency) =>
    setSelectedCurrency(targetCurrency);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <div>
      <HeaderNav
        view={activeView}
        language={currentLanguage}
        currency={selectedCurrency}
        cartCount={cartCount}
        onNavigate={handleNavigate}
        onLanguageSwitch={handleLanguageSwitch}
        onCurrencyChange={handleCurrencyChange}
        onCartOpen={() => setIsCartOpen(true)}
        t={t}
      />
      {activeView === VIEW_NAMES.HOME && (
        <HomeView
          language={currentLanguage}
          currency={selectedCurrency}
          onNavigate={handleNavigate}
          onQuickAdd={handleAddToCart}
          t={t}
        />
      )}{" "}
      {activeView === VIEW_NAMES.COLLECTION && (
        <CatalogView
          language={currentLanguage}
          currency={selectedCurrency}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          onNavigate={handleNavigate}
          onQuickAdd={handleAddToCart}
          t={t}
        />
      )}{" "}
      {activeView === VIEW_NAMES.PRODUCT_DETAIL && selectedProduct && (
        <ProductDetailView
          product={selectedProduct}
          language={currentLanguage}
          currency={selectedCurrency}
          onNavigate={handleNavigate}
          onAdd={handleAddToCart}
          onGuide={() => setIsSizeGuideOpen(true)}
          t={t}
        />
      )}{" "}
      {activeView === VIEW_NAMES.CHECKOUT && (
        <CheckoutView
          items={cartItems}
          language={currentLanguage}
          currency={selectedCurrency}
          onNavigate={handleNavigate}
          onComplete={() => setCartItems([])}
          t={t}
        />
      )}
      <FooterSection onNavigate={handleNavigate} t={t} />
      <SlideOverCartDrawer
        open={isCartOpen}
        items={cartItems}
        language={currentLanguage}
        currency={selectedCurrency}
        onClose={() => setIsCartOpen(false)}
        onQuantity={handleUpdateQuantity}
        onRemove={handleRemoveFromCart}
        onCheckout={() => handleNavigate(VIEW_NAMES.CHECKOUT)}
        t={t}
      />
      <SizeGuideModal
        open={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        t={t}
      />
    </div>
  );
}
