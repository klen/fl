"use client"

import i18next from "i18next"
import { initReactI18next } from "react-i18next"

i18next.use(initReactI18next).use({
  type: "backend",
  read: async (language, namespace, callback) => {
    if (language == "en" && namespace == "common") return callback(null, {})
    const data = await import(`../../public/locales/${language}/${namespace}.json`)
    callback(null, data)
  },
})

i18next.init({
  lng: "ru",
  debug: true,
  ns: ["common"],
  supportedLngs: ["en", "ru"],
  fallbackLng: false,
  load: "languageOnly",
})

export const t = i18next.t.bind(i18next)

export default i18next
