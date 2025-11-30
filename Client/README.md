````markdown
# 🎓 PTK - Client

PTKnow - информационный сайт для Политехнического колледжа НовГУ. На котором размещаются мероприятия и курсы дополнительного образования.

## 🚀 Быстрый старт

### 📋 Предварительные требования

- Node.js v18+ (рекомендуется v24.11.1)
- Git
- npm или yarn

### ⚡ Установка

1. **Клонирование репозитория**

```bash
git clone git@github.com:IsMirakl/PTK-project.git
```
````

2. **Переход в директорию проекта**

```bash
cd PTK-project
```

3. **Установка зависимостей**

```bash
npm install
```

4. **Запуск development сервера**

```bash
npm run dev
```

5. **Сборка проекта**

```bash
npm run build
```

## 📜 Available Scripts / Доступные скрипты

```bash
npm run dev          # Запуск
npm run build        # Сборка проекта для production
npm run preview      # Просмотр собранного проекта
npm run lint         # Проверка кода ESLint
npm run type-check   # Проверка TypeScript типов
```

## 🎯 Функциональность

### 🔐 Аутентификация

- 📧 Вход по email
- 👤 Регистрация пользователей
- 🔒 Защищенные маршруты
- 🔑 Управление сессиями

### 👤 Профили пользователей

- 👥 Публичные профили
- ✏️ Редактирование профиля
- 🎓 Управление статусом студента
- 📞 Контактная информация

### 📚 Курсы

- ➕ Создание курсов
- 🏷️ Система тегов курсов
- 👀 Превью курсов с изображениями
- 🔄 Управление курсами
- 👥 Управление участниками
- 🔒 Публичные и приватные курсы

### 🎭 Мероприятия

- 📅 Список мероприятий
- 🎫 \Регистрация на мероприятия
- 📍 Детали мероприятий

## 🛠️ Технологии

### Основные технологии

- **React 19** - Frontend framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client routing

### Интерфейс и стили

- **CSS Modules** - Component styling
- **React Toastify** - Notifications

### API и данные

- **Axios** - HTTP client
- **REST API** - Backend communication
- **Mock API** - Development data

### Инструменты разработки

- **ESLint** - Code linting
- **Git** - Version control

## 🏗️ Структура проекта

```
src/
├── Components/          # React components
│   ├── ui/              # Reusable UI components
│   │   ├── forms/       # Form components (CourseFormInput, CourseButton)
│   │   └── course/      # Course-specific components
│   ├── layout/          # Layout components (Header, Footer)
├── hooks/               # Custom React hooks
│   ├── useAuth.ts       # Auth logic
│   ├── useProfile.ts    # Profile management
│   ├── useCreateCourse.ts # Course creation
│   └── useCourse.ts     # Course data
├── api/                 # API layer
│   ├── endpoints/       # API endpoints
│   ├── interceptors/    # interceptors
│   ├── mockApi/         # Mock dat
│   └── types/           # API types
├── assets/              # assets
│   ├── icons/           # icons
│   ├── images/          # Images and photos
│   └── logo/            # Logo
├── pages/               # Page components
│   ├── AuthPage.tsx     # Auth page
│   ├── ProfilePage.tsx  # User profile page
│   ├── CreateCoursePage.tsx # Course creation
│   └── ...              # Other pages
├── routes/              # Routing
├── styles/              # Styling
│   ├── components/      # Component styles
│   ├── pages/           # Page styles
│   └── globals.css      # Global styles
├── utils/               # Utility functions
└── types/               # TypeScript type definitions
    ├── profile.ts       # Profile-related types
    ├── course.ts        # Course-related types
    └── auth.ts          # Auth types
```

## 👨‍💻 Руководство по разработке

### Конвенция коммитов

```bash
feat:     sНовая функциональность
fix:       Исправление багов/ошибок
docs:     Изменения в документации
style:    Изменения форматирования
refactor: Рефакторинг кода
chore:    Технические задачи
```

## 📄 Лицензия

License: Apache 2.0

---
