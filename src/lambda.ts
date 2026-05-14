import { APIGatewayProxyEvent, Context, Handler } from 'aws-lambda';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serverlessExpress from '@codegenie/serverless-express';

let cachedServer: Handler;

process.on('unhandledRejection', (reason) => {
  console.error(reason);
});

process.on('uncaughtException', (reason) => {
  console.error(reason);
});

async function bootstrapServer(): Promise<Handler> {
  const app = await NestFactory.create(AppModule, {
    logger: false,
  });
  await app.init();

  return serverlessExpress({
    app: app.getHttpAdapter().getInstance(),
  });
}

export const handler: Handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
  callback,
) => {
  if (!cachedServer) {
    cachedServer = await bootstrapServer();
  }

  return cachedServer(event, context, callback);
};
