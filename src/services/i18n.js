import I18n from "i18next";
import { initReactI18next } from "react-i18next";

import pt from "../locales/pt.json";
import es from "../locales/es.json";

I18n.use(initReactI18next).init({
  lng: "pt",
  fallbackLng: "es",
  resources: {
    pt: { translation: pt },
    es: { translation: es },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default I18n;
