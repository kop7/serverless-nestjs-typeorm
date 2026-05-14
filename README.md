# Serverless NestJS TypeORM CRUD

## 1) What This Is
A NestJS API running on AWS Lambda via the Serverless Framework, with CRUD endpoints for:
- `Author`
- `Book`

## 2) Current Architecture
- Lambda entrypoint: `src/lambda.ts`
- Root module: `src/app.module.ts`
- Modules:
  - `src/modules/author/*`
  - `src/modules/book/*`
- Entities:
  - `src/entity/author.entity.ts`
  - `src/entity/book.entity.ts`
- DB config: `src/config/database.ts`
- Serverless config: `serverless.yml`

## 3) Status After the Upgrade Cycle (2026-05-14)

### Implemented
1. NestJS + TypeORM migrated to a modern stack:
   - NestJS 11
   - TypeORM 0.3
   - `mysql2` driver
2. Removed `@nestjsx/crud`; introduced explicit CRUD controllers and services.
3. Migrated from `tslint` to ESLint (flat config).
4. Added a health endpoint:
   - `GET /health` (in serverless-offline: `GET /local/health`)
5. Fixed Lambda bootstrap/caching logic.
6. Updated `serverless.yml` to `nodejs20.x` runtime and proxy routing.
7. Added and fixed e2e tests for `book` and `author` CRUD flows.

### Verification (Executed Locally)
- `npm run build` ✅
- `npm run lint` ✅
- `npm test` ✅
- `npm run test:e2e` ✅
- `npm run sls:offline` + smoke (`/local/health`, `/local/api/book`) ✅

## 4) Running Locally
```bash
npm install
npm run sls:offline
```

Serverless Offline endpoints are stage-prefixed:
- `http://localhost:3000/local/health`
- `http://localhost:3000/local/api/book`
- `http://localhost:3000/local/api/author`

## 5) Plan for Further `package.json` Upgrades (Latest Versions)
The current combination is selected because it works end-to-end. Next wave toward absolute latest:

1. **Serverless 4 migration**
   - move `serverless` + `serverless-offline` to 4.x/14.x
   - handle mandatory authentication/license flow in CI/CD and local environments
2. **TypeScript track**
   - stay on TS 6.x and continuously monitor TS 7 breaking changes
3. **Security hardening**
   - systematically reduce high vulnerabilities via transitive updates and lockfile refresh
4. **DB migrations**
   - replace `synchronize: true` with proper TypeORM migrations for production
5. **CI pipeline**
   - add a pipeline that runs `build/lint/test/e2e` and optional `sls package`
