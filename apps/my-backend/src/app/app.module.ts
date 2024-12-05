import { Module } from '@nestjs/common';

import { UserService } from '@user/user.service';
import { UserController } from '@user/user.controller';
import { DatabaseModule } from '@database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@user/user.entity';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([User])],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
