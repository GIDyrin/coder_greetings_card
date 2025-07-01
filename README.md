Запускать в корневой папке скрипт start.sh:
```
chmod +x start.sh
sh ./start.sh
```

Для запуска проекта указать ключ в созданном env файле, а после в разных консольных окнах
```
npm run dev
and 
npm run serv
```

СТРУКТУРА

```
./src/
├── App.tsx
├── components
│   ├── GenerationForm
│   │   ├── components
│   │   │   ├── GreetingCard
│   │   │   │   ├── GreetingCard.tsx
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── GenerationForm.tsx
│   │   └── index.ts
│   ├── HistoryList
│   │   ├── components
│   │   │   ├── index.ts
│   │   │   ├── ModalHistory
│   │   │   │   ├── index.ts
│   │   │   │   └── ModalHistory.tsx
│   │   │   └── ReviewRecord
│   │   │       ├── components
│   │   │       │   ├── index.ts
│   │   │       │   └── RecordField
│   │   │       │       ├── index.ts
│   │   │       │       └── RecordField.tsx
│   │   │       ├── index.ts
│   │   │       └── ReviewRecord.tsx
│   │   ├── HistoryList.tsx
│   │   └── index.ts
│   ├── index.ts
│   └── LanguageSwitcher
│       ├── index.ts
│       └── LanguageSwitcher.tsx
├── context
│   ├── index.ts
│   └── LanguageContext.tsx
├── index.css
├── locales
│   └── index.ts
├── main.tsx
└── vite-env.d.ts
./server
├── index.js
├── node_modules
├── package.json
└── package-lock.json
```

