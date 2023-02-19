import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { defaultNS } from "./i18n-namespace";
import { resourcePath, resourcePathMissing } from "../../config/Config"

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    backend: {
      loadPath: `${resourcePath}?languageKey={{lng}}`,
      addPath: `${resourcePathMissing}?languageKey={{lng}}`,
    },
    debug: false,
    defaultNS: defaultNS,
    fallbackLng: "en", // use en if detected lng is not available
    interpolation: {
      escapeValue: false // react already safes from xss
    },
  });

export default i18n;