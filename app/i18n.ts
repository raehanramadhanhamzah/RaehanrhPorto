import { getRequestConfig } from 'next-intl/server';

const locales = ['id', 'en']; 
const defaultLocale = 'id';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !locales.includes(locale)) {
    locale = defaultLocale;
  }

  return {
    locale, 
    messages: (await import(`./app/languages/${locale}.json`)).default
  };
});
