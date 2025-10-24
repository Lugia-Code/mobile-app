import I18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

import pt from "../locales/pt.json";
import es from "../locales/es.json";

const LANGUAGE_KEY = "@app_language";

export const saveLanguage = async (lang) => {
  try {
    await AsyncStorage.setItem(LANGUAGE_KEY, lang);
  } catch (error) {
    console.error("Erro ao salvar idioma:", error);
  }
};

export const loadLanguage = async () => {
  try {
    const savedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
    return savedLang || "pt";
  } catch (error) {
    console.error("Erro ao carregar idioma:", error);
    return "pt";
  }
};

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
