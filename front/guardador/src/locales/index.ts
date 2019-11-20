import { Platform, NativeModules } from 'react-native';
import I18n from 'i18n-js';
import en from './en_US';
import pt from './pt_BR';

const normalizeTranslate = {
    en_US: 'en_US',
    pt_BR: 'pt_BR',
    en: 'en_US',
    pt_US: 'pt_BR',
};

const getLanguageByDevice = () =>
    Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale
        : NativeModules.I18nManager.localeIdentifier;

I18n.translations = {
    en_US: en,
    pt_BR: pt,
};

const setLanguageToI18n = () => {
    const language = getLanguageByDevice();
    const translateNormalize = normalizeTranslate[language];
    const iHaveThisLanguage = Object.prototype.hasOwnProperty.call(
        I18n.translations,
        translateNormalize,
    );
    I18n.defaultLocale = 'en_US';
    I18n.locale = iHaveThisLanguage ? translateNormalize : 'en_US';
};

setLanguageToI18n();

const translate = key => I18n.t(key);

export default translate;
