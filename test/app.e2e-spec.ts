import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from './../src/app.module';

describe('App (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    process.env.DB_TYPE = 'sqlite';
    process.env.DB_DATABASE = ':memory:';

    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/health (GET)', () => {
    return request(app.getHttpServer())
      .get('/health')
      .expect(200)
      .expect(({ body }) => {
        expect(body.status).toBe('ok');
      });
  });

  it('book CRUD flow', async () => {
    const create = await request(app.getHttpServer())
      .post('/api/book')
      .send({ name: 'Clean Code' })
      .expect(201);

    expect(create.body.id).toBeDefined();
    expect(create.body.name).toBe('Clean Code');

    const createdId = create.body.id;

    await request(app.getHttpServer())
      .get('/api/book')
      .expect(200)
      .expect(({ body }) => {
        expect(Array.isArray(body)).toBe(true);
      });

    await request(app.getHttpServer())
      .patch(`/api/book/${createdId}`)
      .send({ name: 'Clean Architecture' })
      .expect(200)
      .expect(({ body }) => {
        expect(body.name).toBe('Clean Architecture');
      });

    await request(app.getHttpServer())
      .delete(`/api/book/${createdId}`)
      .expect(200)
      .expect(({ body }) => {
        expect(body.id).toBe(createdId);
      });
  });

  it('author CRUD flow', async () => {
    const create = await request(app.getHttpServer())
      .post('/api/author')
      .send({ name: 'Robert C. Martin' })
      .expect(201);

    expect(create.body.id).toBeDefined();
    expect(create.body.name).toBe('Robert C. Martin');

    const createdId = create.body.id;

    await request(app.getHttpServer())
      .get('/api/author')
      .expect(200)
      .expect(({ body }) => {
        expect(Array.isArray(body)).toBe(true);
      });

    await request(app.getHttpServer())
      .patch(`/api/author/${createdId}`)
      .send({ name: 'Uncle Bob' })
      .expect(200)
      .expect(({ body }) => {
        expect(body.name).toBe('Uncle Bob');
      });

    await request(app.getHttpServer())
      .delete(`/api/author/${createdId}`)
      .expect(200)
      .expect(({ body }) => {
        expect(body.id).toBe(createdId);
      });
  });
});
