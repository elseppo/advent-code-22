import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Day1Service } from './day-1/day-1.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Day1Service],
})
export class AppModule {}
