import React, { useContext } from 'react';
import Ru from './strings/ru';
import En from './strings/en';
import { Lang as apiLang } from '../../api/typings';


export type Lang = apiLang;

export interface ILanguageContext {
    lang: Lang;
    t: (key: string) => string;
    link: (url: string) => string;
    linkInOtherLang: (url: string) => string;
}

export const forLanguage = (lang: Lang): ILanguageContext => {
    const strings = lang === 'ru' ? Ru : En;
    return {
        lang,
        t: (key: string) => strings[key],
        link: (url: string) => {
            if(url === '/') {
                return lang === 'ru' ? '/' : '/en'
            } else if(!url.startsWith('/')) {
                return url;
            } else {
                return `/${lang}${url}`;
            }
        },
        linkInOtherLang: (url: string) => {
            if(url === '/') {
                return '/en';
            } else if (url === '/en' || url === '/en/') {
                return '/';
            }
            else if(url.startsWith('/ru/')) {
                return `/en${url.substr(3)}`;
            } else if(url.startsWith('/en/')) {
                return `/ru${url.substr(3)}`;
            } else {
                return url;
            };
        },
    }
};

export const LanguageContext = React.createContext<ILanguageContext>(forLanguage('en'));

export const useLanguage = () => useContext(LanguageContext);
