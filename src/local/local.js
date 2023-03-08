import {I18n} from "i18n-js";
import {getLocales} from 'expo-localization';

const i18n = new I18n({
  en: {
    login: {
      title: "Welcome to RECLAMIC",
      emailPlaceholder: 'Enter your email address',
      emailError: 'Please input email',
      passwordPlaceholder: 'Enter your password',
      passwordError: 'Please input password',
      enter: 'log in',
      registration: 'don\'t have an account?',
    },
  }, 'ru': {
    login: {
      title: "Вся реклама в RECLAMIC",
      emailPlaceholder: 'Введите ваш email',
      emailError: 'Не корректный email',
      passwordPlaceholder: 'Введите ваш пароль',
      passwordError: 'Не корректный пароль',
      enter: 'Войти',
      registration: 'нет аккаунта?',

    }
  },
});

i18n.defaultLocale = 'en';
i18n.locale = getLocales()[0].languageCode;

export default i18n;