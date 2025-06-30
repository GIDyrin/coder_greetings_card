export type Language = 'ru' | 'en';

export interface Translations {
  appTitle: string;
  createGreeting: string;
  descriptionPlaceholder: string;
  generateButton: string;
  generating: string;
  yourGreeting: string;
  copy: string;
  copied: string;
  historyTitle: string;
  emptyHistory: string;
  promtHistory: string;
  responseHistory: string;
}

export const translations: Record<Language, Translations> = {
  ru: {
    appTitle: 'Поздравительный коллега',
    createGreeting: 'Создайте поздравление',
    descriptionPlaceholder: 'Опишите коллегу: "Маркетолог Анна, 30 лет, любит кофе и путешествия..."',
    generateButton: 'Создать поздравление',
    generating: 'Генерация...',
    yourGreeting: 'Ваше поздравление',
    copy: 'Копировать',
    copied: 'Скопировано!',
    historyTitle: 'История запросов',
    emptyHistory: 'Здесь будут ваши предыдущие запросы',
    promtHistory: 'Ваш запрос',
    responseHistory: 'Получившееся поздравление'
  },
  en: {
    appTitle: 'Greeting Colleague',
    createGreeting: 'Create a Greeting',
    descriptionPlaceholder: 'Describe a colleague: "Marketer Anna, 30 years old, loves coffee and traveling..."',
    generateButton: 'Create Greeting',
    generating: 'Generating...',
    yourGreeting: 'Your Greeting',
    copy: 'Copy',
    copied: 'Copied!',
    historyTitle: 'History of Requests',
    emptyHistory: 'Your previous requests will appear here',
    promtHistory: "Your promt",
    responseHistory: "Generated greeting"
  }
};