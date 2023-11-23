import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './routes/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // Used for access to env file everywhere
    ConfigModule.forRoot({ isGlobal: true }),
    // Database Simple Connection
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
    }),
    // Sub Routes
    UserModule,
  ],
  // Main Route
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
