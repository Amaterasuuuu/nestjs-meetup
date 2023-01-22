import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv'
import { AppModule } from './app.module';
dotenv.config()

async function bootstrap() {
  const PORT = process.env.PORT
  const APP_ADDRESS = process.env.APP_ADDRESS
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => Logger.log(`Server available on ${APP_ADDRESS}:${PORT}`, 'NestApplication'));
}
bootstrap();
