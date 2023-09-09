import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/REGISTER', () => {
    return request(app.getHttpServer())
      .post('/auth/register')
      .send({
        username: 'Ghulam',
        email: 'ghulam12@gmail.com',
        password: '12345678',
      })
      .expect(201);
  });

  it('/LOGIN', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({
        email: 'ghulam12@gmail.com',
        password: '12345678',
      })
      .expect(201);
  });

  afterAll(async () => {
    await app.close();
  });
});
