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
  errorGenerating: string;
  promtDescription: string;
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
    responseHistory: 'Получившееся поздравление',
    errorGenerating: 'Ошибка при генерации ответа со стороны Openrouter',
    promtDescription: 'Нужно написать поздравление на День Рождения. Учти возраст и интересы адресата, кроме того разбавь поздравление юмором, но не слишком. Не концентрируйся на каком-то одном из интересов - кратко упомянуть и все(ОЧЕНЬ ВАЖНО), главное пожелать общечеловеческих нужд - здоровья, счастья в семье и т.д. Пиши от первого лица и в конце не подставляй от кого это. Не использовать стикеры или эмодзи. Описание адресата:\n'

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
    responseHistory: "Generated greeting",
    errorGenerating: 'Error was thrown while generating response on OpenRouter',
    promtDescription: `You need to write a birthday greeting like SMS but respectful. Consider the recipient's age and interests, and add some humor to the greeting. Try to avoid using stickers as much as possible. Description of the recipient:\n`
  }
};