## О проекте:
Этот проект - моя курсовая работа для 3 семестра. Клиент-серверное приложение, серверная часть которого - Nest.JS, клиентская часть - Vue.js
Тема проекта - сайт для автомастерской с привязкой к базе данных, с возможностью вывода данных из БД, занесения в нее новых данных, удаления, обновления.
# Для клиентской части проекта:

## Для клиентской части проекта
```
npm install -g @vue/cli
vue upgrade --next
npm install vue-router@latest
npm install vuex
npm install vue-scrollto
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

# Для серверной части проекта:
### 1) Установить пакеты:
```
npm -G install @nestjs/cli
npm install @nestjs/typeorm @nestjs/swagger typeorm nestjs-form-data dotenv cross-env swagger-ui-express tsconfig-paths pg pg-hstore rimraf
npm install ts-node ts-loader @nestjs/config
```
### 2) Нужно перейти в папку education и запустить локальный сервер на Nest.js:
```
cd ./education
npm run start
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Предпросмотр проекта:

https://github.com/SegaMegaPro/-4-/assets/110731178/f41fd72a-55da-46e4-a96f-31a32195a807



