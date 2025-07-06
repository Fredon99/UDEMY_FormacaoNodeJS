# Formacao Node.js da plataforma Udemy

## Seção 1
### Importação de módulos
```
├── app.js
└── calculator.js
```

## Seção 2
### Servidor HTTP apenas com nodeJS
```
└── app.js
```

## Seção 3
### Fundamentos do Express
- Servidor HTTP
- Rotas
- Parâmetros obrigatórios
- Parâmetros opcionais
- Query params

```
├── app.js
├── package.json
└── package-lock.json
```

## Seção 4
### Fundamentos MySQL
Instalação do banco MySQL, criação e inserção de dados. Mas ao longo do projeto foi utilizado ORM (Sequelize) para manipulação e inserção de dados.

```
└── user_express.sql
```

## Seção 5
### Plataforma de perguntas
Desenvolvida um plataforma de perguntas e respostas utilizado as ferramentas Express, EJS, Bootsrap, MySQL2 e Sequelize.

```
├── app.js
├── config
│   └── database.js
├── models
│   ├── Answer.js
│   └── Question.js
├── package.json
├── package-lock.json
├── public
│   ├── css
│   │   ├── bootstrap.css
│   │   ├── bootstrap.css.map
│   │   ├── bootstrap-grid.css
│   │   ├── bootstrap-grid.css.map
│   │   ├── bootstrap-grid.min.css
│   │   ├── bootstrap-grid.min.css.map
│   │   ├── bootstrap.min.css
│   │   ├── bootstrap.min.css.map
│   │   ├── bootstrap-reboot.css
│   │   ├── bootstrap-reboot.css.map
│   │   ├── bootstrap-reboot.min.css
│   │   ├── bootstrap-reboot.min.css.map
│   │   ├── reset.css
│   │   └── style.css
│   ├── img
│   │   └── guia.png
│   └── js
│       ├── bootstrap.bundle.js
│       ├── bootstrap.bundle.js.map
│       ├── bootstrap.bundle.min.js
│       ├── bootstrap.bundle.min.js.map
│       ├── bootstrap.js
│       ├── bootstrap.js.map
│       ├── bootstrap.min.js
│       └── bootstrap.min.js.map
└── views
    ├── index.ejs
    ├── partials
    │   ├── head.ejs
    │   ├── navbar.ejs
    │   └── script.ejs
    ├── question.ejs
    └── toQuestion.ejs
```