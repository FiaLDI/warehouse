Strucuture
```
frontend/
├── public/
├── src/
│   ├── app/
│   │   └── store.ts          # Redux store configuration
│   ├── features/
│   │   ├── auth/             # Логика аутентификации
│   │   ├── cart/             # Корзина покупок
│   │   ├── products/         # Товары и категории
│   │   └── orders/           # Заказы пользователя
│   ├── components/
│   │   ├── common/           # Общие UI компоненты
│   │   │   ├── Header.tsx
│   │   │   └── ProductCard.tsx
│   │   └── pages/
│   │       ├── HomePage.tsx
│   │       ├── ProductPage.tsx
│   │       └── CheckoutPage.tsx
│   ├── hooks/                # Кастомные хуки
│   ├── services/
│   │   ├── api.ts            # Базовый API клиент (RTK Query)
│   │   └── auth.ts           # API методы для аутентификации
│   ├── types/                # Типы TypeScript
│   │   └── entities.ts       # Типы данных (совместимые с бэкендом)
│   ├── utils/
│   │   ├── constants.ts      # Константы приложения
│   │   └── helpers.ts        # Вспомогательные функции
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
└── webpack.config.ts            # или webpack.config.js

backend/
├── src/
│   ├── config/
│   │   ├── db.ts            # Конфигурация PostgreSQL 
│   │   └── env.ts           # Обработка переменных окружения
│   ├── controllers/
│   │   ├── auth.controller.ts  # Контроллеры аутентификации
│   │   ├── product.controller.ts # Контроллеры товаров
│   │   └── order.controller.ts  # Контроллеры заказов
│   ├── middleware/
│   │   ├── auth.middleware.ts   # JWT-аутентификация
│   │   └── error.middleware.ts  # Обработка ошибок
│   ├── routes/
│   │   ├── auth.routes.ts    # Маршруты аутентификации
│   │   ├── product.routes.ts # Маршруты товаров
│   │   └── order.routes.ts   # Маршруты заказов
│   ├── services/
│   │   ├── auth.service.ts   # Бизнес-логика аутентификации
│   │   ├── product.service.ts # Логика работы с товарами
│   │   └── order.service.ts  # Логика обработки заказов
│   ├── types/
│   │   └── custom-types.ts   # Пользовательские типы TypeScript
│   ├── utils/
│   │   ├── apiError.ts       # Классы ошибок API
│   │   └── logger.ts         # Логирование
│   └── app.ts                # Основной файл приложения
├── package.json
├── tsconfig.json
└── .env
```