# serverless-nestJS-typeORM-crud

##### This is example how to nestjs using the serverless framework
  - TypeORM
  - MySql
  - CRUD
  
## setup mysql connection in serverless.yml
```
# Custom Variables
custom:
  ...
  mysqlHost:
    local: localhost
  mysqlUser:
    local: user
  mysqlPassword:
    local: password
  mysqlDatabase:
    local: dbname
  mysqlPort:
    local: '3306'
```
## How to prepare
```
$ npm install serverless -g
$ git clone https://github.com/kop7/serverless-nestjs-typeorm.git 【projectName】
$ cd 【projectName】
$ npm install        
```

## Development

```
$ npm run sls:offline 
Serverless: Typescript compiled.
Serverless: Watching typescript files...
Serverless: Starting Offline: undefined/undefined.

Serverless: Routes for author:
Serverless: ANY /api/author

Serverless: Routes for book:
Serverless: ANY /api/book

Serverless: Offline listening on http://localhost:3000
```

The logs should be :

```  
Serverless: ANY /api/book (λ: book)
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [NestFactory] Starting Nest application...
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [InstanceLoader] TypeOrmModule dependencies initialized +34ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [InstanceLoader] AppModule dependencies initialized +43ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [InstanceLoader] ConfigModule dependencies initialized +5ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [InstanceLoader] TypeOrmCoreModule dependencies initialized +168ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [InstanceLoader] TypeOrmModule dependencies initialized +1ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [InstanceLoader] BookModule dependencies initialized +3ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [InstanceLoader] AuthorModule dependencies initialized +0ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [RoutesResolver] AppController {/}: +10ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [RoutesResolver] BookController {/api/book}: +1ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [RouterExplorer] Mapped {/, GET} route +6ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [RouterExplorer] Mapped {/:id, GET} route +3ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [RouterExplorer] Mapped {/, POST} route +2ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [RouterExplorer] Mapped {/bulk, POST} route +4ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [RouterExplorer] Mapped {/:id, PATCH} route +4ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [RouterExplorer] Mapped {/:id, PUT} route +2ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [RouterExplorer] Mapped {/:id, DELETE} route +2ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [RoutesResolver] AuthorController {/api/author}: +1ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [RouterExplorer] Mapped {/, GET} route +2ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [RouterExplorer] Mapped {/:id, GET} route +2ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [RouterExplorer] Mapped {/, POST} route +3ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [RouterExplorer] Mapped {/bulk, POST} route +2ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [RouterExplorer] Mapped {/:id, PATCH} route +2ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [RouterExplorer] Mapped {/:id, PUT} route +2ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [RouterExplorer] Mapped {/:id, DELETE} route +2ms
[Nest] 7980   - 09/02/2019, 6:33:47 PM   [NestApplication] Nest application successfully started +6ms
```
