import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Day1Service } from './day-1/day-1.service';
import { Day2Service } from './day-2/day-2.service';
import { Day3Service } from './day-3/day-3.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Day1Service, Day2Service, Day3Service],
})
export class AppModule {}
