import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.nest-module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Prevents Cross-Origin-Request-Blocked
  app.enableCors({ origin: '*' });
  await app.listen(3000);
}
bootstrap();
