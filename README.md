
```
The Opportunity
├─ backend
│  ├─ .dockerignore
│  ├─ .env
│  ├─ .prettierrc
│  ├─ dist
│  │  ├─ app.controller.d.ts
│  │  ├─ app.controller.js
│  │  ├─ app.controller.js.map
│  │  ├─ app.module.d.ts
│  │  ├─ app.module.js
│  │  ├─ app.module.js.map
│  │  ├─ app.service.d.ts
│  │  ├─ app.service.js
│  │  ├─ app.service.js.map
│  │  ├─ auth
│  │  │  ├─ auth.module.d.ts
│  │  │  ├─ auth.module.js
│  │  │  ├─ auth.module.js.map
│  │  │  ├─ controllers
│  │  │  │  └─ auth
│  │  │  │     ├─ auth.controller.d.ts
│  │  │  │     ├─ auth.controller.js
│  │  │  │     └─ auth.controller.js.map
│  │  │  ├─ dto
│  │  │  │  ├─ login
│  │  │  │  │  ├─ login.d.ts
│  │  │  │  │  ├─ login.js
│  │  │  │  │  └─ login.js.map
│  │  │  │  └─ register
│  │  │  │     ├─ register.d.ts
│  │  │  │     ├─ register.js
│  │  │  │     └─ register.js.map
│  │  │  ├─ guards
│  │  │  │  ├─ jwt-auth.guard
│  │  │  │  │  ├─ jwt-auth.guard.d.ts
│  │  │  │  │  ├─ jwt-auth.guard.js
│  │  │  │  │  └─ jwt-auth.guard.js.map
│  │  │  │  └─ local-auth.guard
│  │  │  │     ├─ local-auth.guard.d.ts
│  │  │  │     ├─ local-auth.guard.js
│  │  │  │     └─ local-auth.guard.js.map
│  │  │  ├─ services
│  │  │  │  └─ auth
│  │  │  │     ├─ auth.service.d.ts
│  │  │  │     ├─ auth.service.js
│  │  │  │     └─ auth.service.js.map
│  │  │  └─ strategies
│  │  │     ├─ jwt.strategy
│  │  │     │  ├─ jwt.strategy.d.ts
│  │  │     │  ├─ jwt.strategy.js
│  │  │     │  └─ jwt.strategy.js.map
│  │  │     └─ local.strategy
│  │  │        ├─ local.strategy.d.ts
│  │  │        ├─ local.strategy.js
│  │  │        └─ local.strategy.js.map
│  │  ├─ common
│  │  │  ├─ common.module.d.ts
│  │  │  ├─ common.module.js
│  │  │  ├─ common.module.js.map
│  │  │  ├─ decorators
│  │  │  │  └─ roles.decorator
│  │  │  │     ├─ roles.decorator.d.ts
│  │  │  │     ├─ roles.decorator.js
│  │  │  │     └─ roles.decorator.js.map
│  │  │  ├─ filters
│  │  │  │  └─ http-exception.filter
│  │  │  │     ├─ http-exception.filter.d.ts
│  │  │  │     ├─ http-exception.filter.js
│  │  │  │     └─ http-exception.filter.js.map
│  │  │  ├─ guards
│  │  │  │  └─ roles.guard
│  │  │  │     ├─ roles.guard.d.ts
│  │  │  │     ├─ roles.guard.js
│  │  │  │     └─ roles.guard.js.map
│  │  │  └─ services
│  │  │     └─ cache
│  │  │        ├─ cache.service.d.ts
│  │  │        ├─ cache.service.js
│  │  │        └─ cache.service.js.map
│  │  ├─ config
│  │  │  ├─ app.config
│  │  │  │  ├─ app.config.d.ts
│  │  │  │  ├─ app.config.js
│  │  │  │  └─ app.config.js.map
│  │  │  ├─ auth.config
│  │  │  │  ├─ auth.config.d.ts
│  │  │  │  ├─ auth.config.js
│  │  │  │  └─ auth.config.js.map
│  │  │  ├─ cache.config
│  │  │  │  ├─ cache.config.d.ts
│  │  │  │  ├─ cache.config.js
│  │  │  │  └─ cache.config.js.map
│  │  │  ├─ config.module.d.ts
│  │  │  ├─ config.module.js
│  │  │  ├─ config.module.js.map
│  │  │  └─ database.config
│  │  │     ├─ database.config.d.ts
│  │  │     ├─ database.config.js
│  │  │     └─ database.config.js.map
│  │  ├─ main.d.ts
│  │  ├─ main.js
│  │  ├─ main.js.map
│  │  ├─ notifications
│  │  │  ├─ controllers
│  │  │  │  └─ notifications
│  │  │  │     ├─ notifications.controller.d.ts
│  │  │  │     ├─ notifications.controller.js
│  │  │  │     └─ notifications.controller.js.map
│  │  │  ├─ dto
│  │  │  │  └─ create-notification
│  │  │  │     ├─ create-notification.d.ts
│  │  │  │     ├─ create-notification.js
│  │  │  │     └─ create-notification.js.map
│  │  │  ├─ entities
│  │  │  │  └─ notification
│  │  │  │     ├─ notification.d.ts
│  │  │  │     ├─ notification.js
│  │  │  │     └─ notification.js.map
│  │  │  ├─ notifications.module.d.ts
│  │  │  ├─ notifications.module.js
│  │  │  ├─ notifications.module.js.map
│  │  │  ├─ repositories
│  │  │  │  └─ notifications
│  │  │  │     ├─ notifications.repository.d.ts
│  │  │  │     ├─ notifications.repository.js
│  │  │  │     └─ notifications.repository.js.map
│  │  │  └─ services
│  │  │     └─ notifications
│  │  │        ├─ notifications.service.d.ts
│  │  │        ├─ notifications.service.js
│  │  │        └─ notifications.service.js.map
│  │  ├─ opportunities
│  │  │  ├─ controllers
│  │  │  │  └─ opportunities
│  │  │  │     ├─ opportunities.controller.d.ts
│  │  │  │     ├─ opportunities.controller.js
│  │  │  │     └─ opportunities.controller.js.map
│  │  │  ├─ dto
│  │  │  │  ├─ create-opportunity
│  │  │  │  │  ├─ create-opportunity.d.ts
│  │  │  │  │  ├─ create-opportunity.js
│  │  │  │  │  └─ create-opportunity.js.map
│  │  │  │  └─ find-opportunities
│  │  │  │     ├─ find-opportunities.d.ts
│  │  │  │     ├─ find-opportunities.js
│  │  │  │     └─ find-opportunities.js.map
│  │  │  ├─ entities
│  │  │  │  ├─ category
│  │  │  │  │  ├─ category.d.ts
│  │  │  │  │  ├─ category.js
│  │  │  │  │  └─ category.js.map
│  │  │  │  ├─ company
│  │  │  │  │  ├─ company.d.ts
│  │  │  │  │  ├─ company.js
│  │  │  │  │  └─ company.js.map
│  │  │  │  ├─ opportunity
│  │  │  │  │  ├─ opportunity.d.ts
│  │  │  │  │  ├─ opportunity.js
│  │  │  │  │  └─ opportunity.js.map
│  │  │  │  └─ user-following
│  │  │  │     ├─ user-following.d.ts
│  │  │  │     ├─ user-following.js
│  │  │  │     └─ user-following.js.map
│  │  │  ├─ opportunities.module.d.ts
│  │  │  ├─ opportunities.module.js
│  │  │  ├─ opportunities.module.js.map
│  │  │  ├─ repositories
│  │  │  │  └─ opportunities
│  │  │  │     ├─ opportunities.repository.d.ts
│  │  │  │     ├─ opportunities.repository.js
│  │  │  │     └─ opportunities.repository.js.map
│  │  │  └─ services
│  │  │     └─ opportunities
│  │  │        ├─ opportunities.service.d.ts
│  │  │        ├─ opportunities.service.js
│  │  │        └─ opportunities.service.js.map
│  │  ├─ tsconfig.build.tsbuildinfo
│  │  └─ users
│  │     ├─ controllers
│  │     │  └─ users
│  │     │     ├─ users.controller.d.ts
│  │     │     ├─ users.controller.js
│  │     │     └─ users.controller.js.map
│  │     ├─ dto
│  │     │  └─ create-user
│  │     │     ├─ create-user.d.ts
│  │     │     ├─ create-user.js
│  │     │     └─ create-user.js.map
│  │     ├─ entities
│  │     │  └─ user
│  │     │     ├─ user.d.ts
│  │     │     ├─ user.js
│  │     │     └─ user.js.map
│  │     ├─ repositories
│  │     │  └─ users
│  │     │     ├─ users.repository.d.ts
│  │     │     ├─ users.repository.js
│  │     │     └─ users.repository.js.map
│  │     ├─ services
│  │     │  └─ users
│  │     │     ├─ users.service.d.ts
│  │     │     ├─ users.service.js
│  │     │     └─ users.service.js.map
│  │     ├─ users.module.d.ts
│  │     ├─ users.module.js
│  │     └─ users.module.js.map
│  ├─ docker-compose.yml
│  ├─ Dockerfile
│  ├─ eslint.config.mjs
│  ├─ mongodb
│  │  └─ init-mongo.js
│  ├─ nest-cli.json
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ README.md
│  ├─ src
│  │  ├─ app.controller.spec.ts
│  │  ├─ app.controller.ts
│  │  ├─ app.module.ts
│  │  ├─ app.service.ts
│  │  ├─ auth
│  │  │  ├─ auth.module.ts
│  │  │  ├─ controllers
│  │  │  │  └─ auth
│  │  │  │     ├─ auth.controller.spec.ts
│  │  │  │     └─ auth.controller.ts
│  │  │  ├─ dto
│  │  │  │  ├─ login
│  │  │  │  │  ├─ login.spec.ts
│  │  │  │  │  └─ login.ts
│  │  │  │  └─ register
│  │  │  │     ├─ register.spec.ts
│  │  │  │     └─ register.ts
│  │  │  ├─ guards
│  │  │  │  ├─ jwt-auth.guard
│  │  │  │  │  ├─ jwt-auth.guard.spec.ts
│  │  │  │  │  └─ jwt-auth.guard.ts
│  │  │  │  └─ local-auth.guard
│  │  │  │     └─ local-auth.guard.ts
│  │  │  ├─ services
│  │  │  │  └─ auth
│  │  │  │     ├─ auth.service.spec.ts
│  │  │  │     └─ auth.service.ts
│  │  │  └─ strategies
│  │  │     ├─ jwt.strategy
│  │  │     │  ├─ jwt.strategy.spec.ts
│  │  │     │  └─ jwt.strategy.ts
│  │  │     └─ local.strategy
│  │  │        ├─ local.strategy.spec.ts
│  │  │        └─ local.strategy.ts
│  │  ├─ common
│  │  │  ├─ common.module.ts
│  │  │  ├─ decorators
│  │  │  │  └─ roles.decorator
│  │  │  │     ├─ roles.decorator.spec.ts
│  │  │  │     └─ roles.decorator.ts
│  │  │  ├─ filters
│  │  │  │  └─ http-exception.filter
│  │  │  │     ├─ http-exception.filter.spec.ts
│  │  │  │     └─ http-exception.filter.ts
│  │  │  ├─ guards
│  │  │  │  └─ roles.guard
│  │  │  │     ├─ roles.guard.spec.ts
│  │  │  │     └─ roles.guard.ts
│  │  │  └─ services
│  │  │     └─ cache
│  │  │        ├─ cache.service.spec.ts
│  │  │        └─ cache.service.ts
│  │  ├─ config
│  │  │  ├─ app.config
│  │  │  │  ├─ app.config.spec.ts
│  │  │  │  └─ app.config.ts
│  │  │  ├─ auth.config
│  │  │  │  ├─ auth.config.spec.ts
│  │  │  │  └─ auth.config.ts
│  │  │  ├─ cache.config
│  │  │  │  ├─ cache.config.spec.ts
│  │  │  │  └─ cache.config.ts
│  │  │  ├─ config.module.ts
│  │  │  └─ database.config
│  │  │     ├─ database.config.spec.ts
│  │  │     └─ database.config.ts
│  │  ├─ main.ts
│  │  ├─ notifications
│  │  │  ├─ controllers
│  │  │  │  └─ notifications
│  │  │  │     ├─ notifications.controller.spec.ts
│  │  │  │     └─ notifications.controller.ts
│  │  │  ├─ dto
│  │  │  │  └─ create-notification
│  │  │  │     ├─ create-notification.spec.ts
│  │  │  │     └─ create-notification.ts
│  │  │  ├─ entities
│  │  │  │  └─ notification
│  │  │  │     ├─ notification.spec.ts
│  │  │  │     └─ notification.ts
│  │  │  ├─ notifications.module.ts
│  │  │  ├─ repositories
│  │  │  │  └─ notifications
│  │  │  │     ├─ notifications.repository.spec.ts
│  │  │  │     └─ notifications.repository.ts
│  │  │  └─ services
│  │  │     └─ notifications
│  │  │        ├─ notifications.service.spec.ts
│  │  │        └─ notifications.service.ts
│  │  ├─ opportunities
│  │  │  ├─ controllers
│  │  │  │  └─ opportunities
│  │  │  │     ├─ opportunities.controller.spec.ts
│  │  │  │     └─ opportunities.controller.ts
│  │  │  ├─ dto
│  │  │  │  ├─ create-opportunity
│  │  │  │  │  ├─ create-opportunity.spec.ts
│  │  │  │  │  └─ create-opportunity.ts
│  │  │  │  └─ find-opportunities
│  │  │  │     ├─ find-opportunities.spec.ts
│  │  │  │     └─ find-opportunities.ts
│  │  │  ├─ entities
│  │  │  │  ├─ category
│  │  │  │  │  ├─ category.spec.ts
│  │  │  │  │  └─ category.ts
│  │  │  │  ├─ company
│  │  │  │  │  ├─ company.spec.ts
│  │  │  │  │  └─ company.ts
│  │  │  │  ├─ opportunity
│  │  │  │  │  ├─ opportunity.spec.ts
│  │  │  │  │  └─ opportunity.ts
│  │  │  │  └─ user-following
│  │  │  │     ├─ user-following.spec.ts
│  │  │  │     └─ user-following.ts
│  │  │  ├─ opportunities.module.ts
│  │  │  ├─ repositories
│  │  │  │  └─ opportunities
│  │  │  │     ├─ opportunities.repository.spec.ts
│  │  │  │     └─ opportunities.repository.ts
│  │  │  └─ services
│  │  │     └─ opportunities
│  │  │        ├─ opportunities.service.spec.ts
│  │  │        └─ opportunities.service.ts
│  │  └─ users
│  │     ├─ controllers
│  │     │  └─ users
│  │     │     ├─ users.controller.spec.ts
│  │     │     └─ users.controller.ts
│  │     ├─ dto
│  │     │  └─ create-user
│  │     │     ├─ create-user.spec.ts
│  │     │     └─ create-user.ts
│  │     ├─ entities
│  │     │  └─ user
│  │     │     ├─ user.spec.ts
│  │     │     └─ user.ts
│  │     ├─ repositories
│  │     │  └─ users
│  │     │     ├─ users.repository.spec.ts
│  │     │     └─ users.repository.ts
│  │     ├─ services
│  │     │  └─ users
│  │     │     ├─ users.service.spec.ts
│  │     │     └─ users.service.ts
│  │     └─ users.module.ts
│  ├─ test
│  │  ├─ app.e2e-spec.ts
│  │  └─ jest-e2e.json
│  ├─ tsconfig.build.json
│  └─ tsconfig.json
└─ frontend
   ├─ eslint.config.mjs
   ├─ next-env.d.ts
   ├─ next.config.ts
   ├─ package-lock.json
   ├─ package.json
   ├─ postcss.config.mjs
   ├─ public
   │  ├─ file.svg
   │  ├─ globe.svg
   │  ├─ next.svg
   │  ├─ vercel.svg
   │  └─ window.svg
   ├─ README.md
   ├─ src
   │  ├─ app
   │  │  ├─ favicon.ico
   │  │  ├─ followed
   │  │  │  └─ page.tsx
   │  │  ├─ globals.css
   │  │  ├─ layout.tsx
   │  │  ├─ opportunities
   │  │  │  └─ page.tsx
   │  │  └─ page.tsx
   │  ├─ components
   │  │  ├─ opportunities
   │  │  │  ├─ OpportunityFilters.tsx
   │  │  │  └─ OpportunityTable.tsx
   │  │  └─ ui
   │  ├─ hooks
   │  ├─ lib
   │  │  ├─ redux
   │  │  │  ├─ slices
   │  │  │  │  └─ opportunitiesSlice.ts
   │  │  │  └─ store.ts
   │  │  └─ utils
   │  ├─ services
   │  │  └─ opportunityService.ts
   │  └─ types
   │     └─ Opportunity.ts
   └─ tsconfig.json

```