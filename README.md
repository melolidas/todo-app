ToDo App - Инструкция по запуску
Требования

Node.js v16+

npm или yarn


1. Запуск Backend (Node.js/Express)

# 1. Перейдите в папку backend
cd backend

# 2. Установите зависимости
npm install

# 3. Запустите сервер (разработческий режим)
npm run dev

# Сервер будет доступен на http://localhost:3001

2. Запуск Frontend (React)

# 1. Перейдите в папку frontend
cd frontend

# 2. Установите зависимости
npm install

# 3. Запустите приложение
npm start

# Приложение откроется в браузере по адресу http://localhost:3000


Как проверить, что всё работает?

Откройте http://localhost:3000

Добавьте новую задачу через форму

Отметьте задачу выполненной (чекбокс)

Проверьте ответы API через http://localhost:3001/tasks