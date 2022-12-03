import { Test, TestingModule } from '@nestjs/testing';
import { Day1Service } from './day-1.service';

describe('Day1Service', () => {
  let service: Day1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Day1Service],
    }).compile();

    service = module.get<Day1Service>(Day1Service);
  });

  it('should be defined', () => {
    console.log('Calories of Top Elf', service.calculateCaloriesForElves(1));
    console.log('Calories of Top Three Elf', service.calculateCaloriesForElves(3));
  });
});
