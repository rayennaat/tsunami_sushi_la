"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type Language = "en" | "fr" | "ar";
export const languageLabels: Record<Language, string> = { en: "EN", fr: "FR", ar: "عربي" };

const copy = {
  en: {
    nav: ["About", "Menu", "Reservation", "Reviews", "Socials"], reserve: "Reserve", openNav: "Open navigation", closeNav: "Close navigation", language: "Language",
    hero: ["Fresh Japanese Taste", "Sushi with the force of a wave.", "Bold rolls, fresh cuts, and Japanese-inspired flavors served with the energy of a wave.", "Book a table", "View menu", "Scroll"],
    about: ["About Tsunami", "Tsunami brings together sushi classics, crunchy rolls, chef creations, poke bowls, and sharing boxes made fresh to order. Every plate is built around bold flavor, fresh cuts, and a warm dining experience.", "Read our story", "See the menu", "Fresh cuts · Crunchy rolls · Chef boxes"],
    menu: ["Taste the wave", "Our menu", "Pick your mood: fresh starters, crispy rolls, chef specials, sushi boxes, poke bowls, noodles, and warm Japanese plates.", "Fresh starters", "Crisp salads, light bites, soups, and clean flavors to open the table.", "Signature rolls", "Crunchy rolls, chef creations, nigiri, sashimi, and bold combinations made to order.", "Boxes & bowls", "Poke bowls, sushi boxes, and generous sharing sets for dine-in or takeaway.", "Chef selection", "Fresh daily", "Explore the menu"],
    reservation: ["Reservation", "Reserve for dine-in, group boxes, or pickup before the next wave hits.", "Find the restaurant location on Google Maps", "Call ahead for today’s hours and table availability.", "Call to reserve"],
    reviews: ["Reviews", "Consistently delicious", "Show previous review", "Show next review"],
    footer: ["Modern sushi, fast choices, and a counter built around the craft.", "Explore", "Follow", "All rights reserved.", "Tunis, Tunisia"],
    common: ["Back home", "Call to reserve", "Open map"],
    aboutPage: ["About Tsunami", "Tsunami Sushi is a modern neighborhood sushi spot focused on clear choices, fast service, and plates that still feel carefully made. The menu moves from crisp salads and classic nigiri to crunchy rolls, chef signatures, hot dishes, poke bowls, and generous sharing boxes.", "The experience is designed around momentum: choose quickly, watch the counter work, and get food that feels fresh whether you are sitting down for dinner or picking up a box on the way home.", "Open time", "Monday – Saturday", "Sunday", "Monday – Sunday", "Closed"],
    reservationPage: ["Reservation", "Select the branch you want, check the map preview, then call the matching number to reserve your table.", "Reservation number"]
  },
  fr: {
    nav: ["À propos", "Menu", "Réservation", "Avis", "Réseaux"], reserve: "Réserver", openNav: "Ouvrir la navigation", closeNav: "Fermer la navigation", language: "Langue",
    hero: ["Saveurs japonaises fraîches", "Des sushis avec la force d’une vague.", "Des rolls audacieux, des produits frais et des saveurs japonaises servis avec l’énergie d’une vague.", "Réserver une table", "Voir le menu", "Défiler"],
    about: ["À propos de Tsunami", "Tsunami réunit les classiques du sushi, les rolls croustillants, les créations du chef, les poke bowls et les box à partager, préparés à la commande. Chaque assiette associe saveurs franches, produits frais et accueil chaleureux.", "Notre histoire", "Voir le menu", "Produits frais · Rolls croustillants · Box du chef"],
    menu: ["Goûtez la vague", "Notre menu", "Choisissez selon votre envie : entrées fraîches, rolls croustillants, spécialités du chef, box, poke bowls, nouilles et plats japonais chauds.", "Entrées fraîches", "Salades croquantes, bouchées légères, soupes et saveurs fraîches pour commencer.", "Rolls signature", "Rolls croustillants, créations du chef, nigiri, sashimi et associations audacieuses.", "Box et bowls", "Poke bowls, box de sushis et assortiments généreux sur place ou à emporter.", "Sélection du chef", "Frais du jour", "Explorer le menu"],
    reservation: ["Réservation", "Réservez sur place, pour des box de groupe ou un retrait avant la prochaine vague.", "Retrouvez le restaurant sur Google Maps", "Appelez pour connaître les horaires et les tables disponibles.", "Appeler pour réserver"],
    reviews: ["Avis", "Toujours délicieux", "Voir l’avis précédent", "Voir l’avis suivant"],
    footer: ["Des sushis modernes, des choix simples et un comptoir dédié au savoir-faire.", "Explorer", "Suivre", "Tous droits réservés.", "Tunis, Tunisie"],
    common: ["Retour à l’accueil", "Appeler pour réserver", "Ouvrir la carte"],
    aboutPage: ["À propos de Tsunami", "Tsunami Sushi est un restaurant moderne qui mise sur des choix clairs, un service rapide et des assiettes préparées avec soin. Le menu va des salades croquantes et nigiri classiques aux rolls croustillants, créations du chef, plats chauds, poke bowls et grandes box à partager.", "L’expérience suit un rythme simple : choisissez rapidement, regardez le comptoir s’activer et savourez des produits frais, sur place ou dans une box à emporter.", "Horaires", "Lundi – Samedi", "Dimanche", "Lundi – Dimanche", "Fermé"],
    reservationPage: ["Réservation", "Choisissez votre restaurant, consultez la carte, puis appelez le numéro correspondant pour réserver votre table.", "Numéro de réservation"]
  },
  ar: {
    nav: ["من نحن", "القائمة", "الحجز", "الآراء", "التواصل"], reserve: "احجز", openNav: "فتح قائمة التنقل", closeNav: "إغلاق قائمة التنقل", language: "اللغة",
    hero: ["مذاق ياباني طازج", "سوشي بقوة الموج.", "لفائف جريئة ومكونات طازجة ونكهات يابانية تُقدّم بطاقة الموج.", "احجز طاولة", "شاهد القائمة", "مرّر"],
    about: ["عن تسونامي", "يجمع تسونامي بين كلاسيكيات السوشي واللفائف المقرمشة وإبداعات الشيف وأطباق البوكي وعلب المشاركة المحضّرة حسب الطلب. كل طبق يجمع النكهة القوية والمكونات الطازجة والأجواء الدافئة.", "اقرأ قصتنا", "شاهد القائمة", "مكونات طازجة · لفائف مقرمشة · علب الشيف"],
    menu: ["تذوّق الموجة", "قائمتنا", "اختر ما يناسبك: مقبلات طازجة، لفائف مقرمشة، أطباق الشيف، علب سوشي، بوكي، نودلز وأطباق يابانية ساخنة.", "مقبلات طازجة", "سلطات مقرمشة ولقيمات خفيفة وشوربات لبداية شهية.", "لفائف مميزة", "لفائف مقرمشة وإبداعات الشيف ونيغيري وساشيمي وتوليفات جريئة.", "علب وأطباق", "أطباق بوكي وعلب سوشي وتشكيلات سخية للأكل في المطعم أو خارجه.", "اختيار الشيف", "طازج يومياً", "استكشف القائمة"],
    reservation: ["الحجز", "احجز للأكل في المطعم أو لعلب المجموعات أو للاستلام.", "اعثر على موقع المطعم في خرائط Google", "اتصل لمعرفة أوقات اليوم والطاولات المتاحة.", "اتصل للحجز"],
    reviews: ["الآراء", "لذيذ دائماً", "عرض الرأي السابق", "عرض الرأي التالي"],
    footer: ["سوشي عصري، خيارات سهلة، ومنضدة تحتفي بحرفة التحضير.", "استكشف", "تابعنا", "جميع الحقوق محفوظة.", "تونس، تونس"],
    common: ["العودة للرئيسية", "اتصل للحجز", "افتح الخريطة"],
    aboutPage: ["عن تسونامي", "تسونامي سوشي مطعم عصري يركّز على الخيارات الواضحة والخدمة السريعة والأطباق المحضّرة بعناية. تمتد القائمة من السلطات والنيغيري إلى اللفائف المقرمشة وإبداعات الشيف والأطباق الساخنة والبوكي وعلب المشاركة.", "التجربة مصممة بإيقاع بسيط: اختر بسرعة، شاهد فريق المنضدة أثناء العمل، واستمتع بطعام طازج في المطعم أو خارجه.", "أوقات العمل", "الاثنين – السبت", "الأحد", "الاثنين – الأحد", "مغلق"],
    reservationPage: ["الحجز", "اختر الفرع، شاهد موقعه على الخريطة، ثم اتصل بالرقم المناسب لحجز طاولتك.", "رقم الحجز"]
  }
} as const;

type Text = (typeof copy)[Language];
const LanguageContext = createContext<{ language: Language; setLanguage: (value: Language) => void; text: Text } | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  useEffect(() => {
    const saved = localStorage.getItem("tsunami-language") as Language | null;
    if (saved && saved in copy) queueMicrotask(() => setLanguage(saved));
  }, []);
  useEffect(() => { document.documentElement.lang = language; document.documentElement.dir = language === "ar" ? "rtl" : "ltr"; localStorage.setItem("tsunami-language", language); }, [language]);
  const value = useMemo(() => ({ language, setLanguage, text: copy[language] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() { const value = useContext(LanguageContext); if (!value) throw new Error("Missing LanguageProvider"); return value; }
