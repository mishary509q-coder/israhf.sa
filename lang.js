const translations = {
  ar: {
    welcome: "مرحبًا، مدير المدرسة 👋",
    logout: "🔓 تسجيل الخروج",
    language: "🌐 اللغة",
    darkMode: "🌙",
    periodLabel: "عرض البيانات حسب:",
    stats_students: "عدد الطلاب",
    stats_absent: "الغياب اليوم",
    stats_late: "المتأخرين",
    stats_discipline: "نسبة الانضباط",
    chart_class: "📊 الغياب حسب الفصول",
    chart_day: "📅 الغياب حسب الأيام",
    tableTitle: "📋 جدول الغياب اليومي",
    tableHeaders_name: "اسم الطالب",
    tableHeaders_class: "الفصل",
    tableHeaders_status: "الحالة",
    tableHeaders_note: "ملاحظة المعلم"
  },
  en: {
    welcome: "Welcome, School Manager 👋",
    logout: "🔓 Logout",
    language: "🌐 Language",
    darkMode: "🌙",
    periodLabel: "View data by:",
    stats_students: "Students",
    stats_absent: "Absences Today",
    stats_late: "Late Arrivals",
    stats_discipline: "Discipline Rate",
    chart_class: "📊 Absences by Class",
    chart_day: "📅 Absences by Day",
    tableTitle: "📋 Daily Absence Table",
    tableHeaders_name: "Student Name",
    tableHeaders_class: "Class",
    tableHeaders_status: "Status",
    tableHeaders_note: "Teacher Note"
  }
};

function applyLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  localStorage.setItem("siteLang", lang);
}

function toggleLanguage() {
  const currentLang = localStorage.getItem("siteLang") || "ar";
  const newLang = currentLang === "ar" ? "en" : "ar";
  applyLanguage(newLang);
}