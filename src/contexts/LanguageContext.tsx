import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.events': 'События',
    'nav.airports': 'Аэропорты',
    'nav.profile': 'Профиль',
    'nav.login': 'Войти',
    
    // Hero
    'hero.title': 'VATSIM Siberia',
    'hero.subtitle': 'Виртуальный центр управления воздушным движением Сибири (VATSIB) в сети VATSIM.',
    'hero.cta': 'Присоединиться',
    'hero.events': 'Смотреть события',
    'hero.webinfo': 'На этом сайте вы найдёте информацию о том, как стать диспетчером в нашем виртуальном центре, а также сведения о выполнении полётов в зоне РПИ UNNT, UNKL и UIII.',
    'hero.webinfo2': 'является частью дивизиона',
    'hero.webinfo3': 'который входит в',
    'hero.vatsiminfo': 'VATSIM SIBERIA является частью дивизиона VATSIM Russia(VATRUS), который входит с Middle East and Africa (EMEA)',
    'hero.welcomefly': 'Желаем приятных и безопасных полётов в воздушном пространстве Сибири!',
    
    // Stats
    'stats.pilots': 'Активных пилотов',
    'stats.controllers': 'Диспетчеров',
    'stats.events': 'События в месяц',
    'stats.airports': 'Аэропортов',
    
    // Features
    'features.title': 'Почему VATSIM Siberia?',
    'features.realistic.title': 'Реалистичное управление',
    'features.realistic.desc': 'Профессиональные диспетчеры обеспечивают реалистичный опыт полётов',
    'features.community.title': 'Дружное сообщество',
    'features.community.desc': 'Присоединяйтесь к активному сообществу виртуальных авиаторов',
    'features.events.title': 'Регулярные мероприятия',
    'features.events.desc': 'Участвуйте в групповых полётах и специальных мероприятиях',
    
    // Events page
    'events.title': 'Предстоящие события',  
    'events.subtitle': 'Присоединяйтесь к нашим мероприятиям и групповым полётам',
    'events.upcoming': 'Предстоящие',
    'events.past': 'Прошедшие',
    'events.interesting': 'Интересно',
    'events.details': 'Подробнее',
    
    // Airports page
    'airports.title': 'Аэропорты',
    'airports.subtitle': 'Информация об аэропортах и текущая погода',
    'airports.search': 'Поиск по ICAO, названию или городу...',
    'airports.runways': 'Взлётно-посадочные полосы',
    'airports.updated': 'Обновлено',
    'airports.minutesAgo': 'мин. назад',
    'airports.notFound': 'Аэропорты не найдены',
    
    // Profile page
    'profile.title': 'Профиль пилота',
    'profile.vatsimId': 'VATSIM ID',
    'profile.email': 'Электронная почта',
    'profile.rating': 'Рейтинг',
    'profile.hours': 'Часы налёта',
    'profile.logout': 'Выйти',
    
    // Footer
    'footer.about': 'О нас',
    'footer.contact': 'Контакты',
    'footer.discord': 'Discord',
    'footer.rights': 'Все права защищены',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookies',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.events': 'Events',
    'nav.airports': 'Airports',
    'nav.profile': 'Profile',
    'nav.login': 'Login',
    
    // Hero
    'hero.title': 'VATSIM Siberia',
    'hero.subtitle': 'Welcome to the virtual airspace of the Siberian region',
    'hero.cta': 'Join Now',
    'hero.events': 'View Events',
    'hero.webinfo': 'On this website, you will find information on how to become a controller in our virtual center, as well as details about flying in the UNNT, UNKL, and UIII FIRs.',
    'hero.webinfo2': 'is part of the division',
    'hero.webinfo3': 'which belongs to the',
    'hero.vatsiminfo': 'VATSIM SIBERIA is part of the VATSIM Russia (VATRUS) division, which belongs to the Middle East and Africa (EMEA)',
    'hero.welcomefly': 'We wish you pleasant and safe flights in the Siberian airspace!',
    
    // Stats
    'stats.pilots': 'Active Pilots',
    'stats.controllers': 'Controllers',
    'stats.events': 'Events per Month',
    'stats.airports': 'Airports',
    
    // Features
    'features.title': 'Why VATSIM Siberia?',
    'features.realistic.title': 'Realistic ATC',
    'features.realistic.desc': 'Professional controllers provide realistic flight experience',
    'features.community.title': 'Friendly Community',
    'features.community.desc': 'Join an active community of virtual aviators',
    'features.events.title': 'Regular Events',
    'features.events.desc': 'Participate in group flights and special events',
    
    // Events page
    'events.title': 'Upcoming Events',
    'events.subtitle': 'Join our events and group flights',
    'events.upcoming': 'Upcoming',
    'events.past': 'Past',
    'events.interesting': 'Interesting',
    'events.details': 'Details',
    
    // Airports page
    'airports.title': 'Airports',
    'airports.subtitle': 'Airport information and current weather',
    'airports.search': 'Search by ICAO, name or city...',
    'airports.runways': 'Runways',
    'airports.updated': 'Updated',
    'airports.minutesAgo': 'min. ago',
    'airports.notFound': 'No airports found',
    
    // Profile page
    'profile.title': 'Pilot Profile',
    'profile.vatsimId': 'VATSIM ID',
    'profile.email': 'Email',
    'profile.rating': 'Rating',
    'profile.hours': 'Flight Hours',
    'profile.logout': 'Logout',
    
    // Footer
    'footer.about': 'About',
    'footer.contact': 'Contact',
    'footer.discord': 'Discord',
    'footer.rights': 'All rights reserved',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookies',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
