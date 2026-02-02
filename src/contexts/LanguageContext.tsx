import React, { createContext, useContext, useState, ReactNode } from 'react';

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
    'hero.title': 'VATSIM Сибирь',
    'hero.subtitle': 'Добро пожаловать в виртуальное воздушное пространство Сибирского региона',
    'hero.cta': 'Присоединиться',
    'hero.events': 'Смотреть события',
    
    // Stats
    'stats.pilots': 'Активных пилотов',
    'stats.controllers': 'Диспетчеров',
    'stats.events': 'События в месяц',
    'stats.airports': 'Аэропортов',
    
    // Features
    'features.title': 'Почему VATSIM Сибирь?',
    'features.realistic.title': 'Реалистичное управление',
    'features.realistic.desc': 'Профессиональные диспетчеры обеспечивают реалистичный опыт полётов',
    'features.community.title': 'Дружное сообщество',
    'features.community.desc': 'Присоединяйтесь к активному сообществу виртуальных авиаторов',
    'features.events.title': 'Регулярные события',
    'features.events.desc': 'Участвуйте в групповых полётах и специальных мероприятиях',
    
    // Events page
    'events.title': 'Предстоящие события',
    'events.subtitle': 'Присоединяйтесь к нашим мероприятиям и групповым полётам',
    'events.upcoming': 'Предстоящие',
    'events.past': 'Прошедшие',
    'events.register': 'Зарегистрироваться',
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
    'events.register': 'Register',
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
