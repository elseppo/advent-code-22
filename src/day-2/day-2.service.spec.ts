import { Test, TestingModule } from '@nestjs/testing';
import { Day2Service } from './day-2.service';

describe('Day2Service', () => {
  let service: Day2Service;
  const input = ['B Y',
    'A X',
    'C Z',
    'A Z',
    'B Y',
    'B Y',
    'A X',
    'C Z',
    'B Y',
    'B Y',
    'C Z',
    'C X',
    'B Y',
    'C Z',
    'B Y',
    'C Z',
    'A Z',
    'A Z',
    'A X',
    'B Y',
    'A X',
    'C Z',
    'C Y',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'A X',
    'B Y',
    'A Z',
    'B Z',
    'B Y',
    'A X',
    'A X',
    'C Z',
    'B Y',
    'B Y',
    'B Z',
    'A Z',
    'A X',
    'C Z',
    'B Z',
    'A Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'B X',
    'A Z',
    'A Z',
    'C Z',
    'C Z',
    'C Z',
    'A Y',
    'C Z',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'B Z',
    'A X',
    'A X',
    'C Z',
    'B Y',
    'B Y',
    'B Z',
    'A X',
    'A X',
    'C Z',
    'B Y',
    'C Z',
    'A X',
    'C Z',
    'A X',
    'C X',
    'A Y',
    'A Y',
    'B Y',
    'A Y',
    'C Z',
    'B Y',
    'C Z',
    'C Z',
    'A X',
    'C Z',
    'A Z',
    'C Z',
    'A X',
    'C Z',
    'B Y',
    'B Y',
    'C Z',
    'B Z',
    'C Y',
    'C Z',
    'B Y',
    'C Z',
    'C Z',
    'B X',
    'A X',
    'C Z',
    'C Z',
    'B Y',
    'C Z',
    'B Y',
    'A Z',
    'B Y',
    'B Z',
    'A Z',
    'C Z',
    'C Z',
    'C Z',
    'A Z',
    'C Z',
    'A X',
    'A X',
    'A Z',
    'C Z',
    'A X',
    'A Z',
    'C Z',
    'A Z',
    'A Y',
    'B Y',
    'A Z',
    'B X',
    'A X',
    'C Z',
    'C Z',
    'B Y',
    'C Y',
    'B Y',
    'B Z',
    'B Y',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A Y',
    'C Z',
    'B Z',
    'A X',
    'B Y',
    'A Y',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'C Z',
    'B Y',
    'C Z',
    'B Y',
    'C Z',
    'C X',
    'A Y',
    'A X',
    'C Y',
    'B Y',
    'A Z',
    'C Z',
    'C Z',
    'B Y',
    'B Y',
    'A X',
    'B Y',
    'A Y',
    'A X',
    'A X',
    'B Y',
    'A X',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'B Y',
    'C Z',
    'A Z',
    'C Z',
    'B Z',
    'C Z',
    'A Y',
    'C Z',
    'B Z',
    'C Z',
    'A Y',
    'A Y',
    'C Z',
    'A X',
    'B Y',
    'C Z',
    'A X',
    'B Y',
    'B Y',
    'A X',
    'A X',
    'C Z',
    'B Y',
    'C Z',
    'B Z',
    'C Z',
    'A X',
    'C Z',
    'B Y',
    'B Y',
    'A X',
    'B Z',
    'C Z',
    'B Z',
    'B Y',
    'B Y',
    'A Y',
    'B Z',
    'A Z',
    'C Z',
    'C Z',
    'A X',
    'A X',
    'A X',
    'C Z',
    'B Y',
    'A X',
    'A Y',
    'C Z',
    'A X',
    'B Y',
    'A Y',
    'A Y',
    'C Z',
    'C Z',
    'C Z',
    'A Z',
    'B Z',
    'C Z',
    'B Y',
    'C Z',
    'C Z',
    'A Y',
    'A X',
    'C Z',
    'B Y',
    'C Z',
    'C Z',
    'B Y',
    'B Y',
    'A Y',
    'C Z',
    'B Y',
    'B Y',
    'A Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'B Z',
    'C Z',
    'B Y',
    'A X',
    'C Z',
    'B Z',
    'A Z',
    'A X',
    'C Z',
    'A X',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'A X',
    'C Z',
    'A Y',
    'C Z',
    'C Z',
    'A X',
    'B Y',
    'C Z',
    'B Z',
    'B Y',
    'C Z',
    'A Z',
    'C Z',
    'C Z',
    'A Y',
    'A Z',
    'C Z',
    'C Z',
    'B Z',
    'C Z',
    'B Y',
    'C Z',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'B Z',
    'C Z',
    'B Z',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A Z',
    'A Y',
    'A X',
    'A X',
    'C Z',
    'B X',
    'A Z',
    'A X',
    'C Z',
    'B Z',
    'C Z',
    'B Y',
    'A Z',
    'C Z',
    'B Y',
    'C Z',
    'C Y',
    'A Y',
    'C Z',
    'B Y',
    'B Y',
    'C Z',
    'A X',
    'C Z',
    'A X',
    'C X',
    'A X',
    'B X',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'B Y',
    'C Z',
    'B Z',
    'C Z',
    'B Y',
    'A X',
    'C X',
    'C Z',
    'B Y',
    'A Z',
    'A X',
    'B Y',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'A X',
    'A X',
    'B Y',
    'A X',
    'A Y',
    'C Z',
    'B Y',
    'A X',
    'A Y',
    'B Y',
    'A X',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'A X',
    'B Z',
    'A Y',
    'C Z',
    'A X',
    'C Z',
    'B Y',
    'C Z',
    'A Z',
    'C Z',
    'C Z',
    'A Y',
    'B Z',
    'C Z',
    'A X',
    'B Y',
    'B Y',
    'C Z',
    'A Y',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'A X',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'A Z',
    'C Z',
    'C Z',
    'C Z',
    'A Y',
    'B Z',
    'B Y',
    'B Y',
    'C Z',
    'A X',
    'A Y',
    'C Z',
    'A X',
    'A Y',
    'A X',
    'C Z',
    'A Y',
    'B Z',
    'B Y',
    'B Z',
    'C Z',
    'C Z',
    'C Z',
    'B Z',
    'B Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'B Z',
    'A Y',
    'A Y',
    'B Z',
    'B X',
    'A Z',
    'A X',
    'C Z',
    'A X',
    'A Y',
    'A X',
    'A X',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'B Y',
    'A X',
    'C Z',
    'A X',
    'A Y',
    'A X',
    'C Z',
    'A Y',
    'C Z',
    'B Y',
    'A X',
    'A Y',
    'A Z',
    'C Z',
    'B Y',
    'B Y',
    'B Z',
    'A X',
    'A X',
    'B Y',
    'C Z',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'A Y',
    'A Z',
    'C Z',
    'B Y',
    'C Z',
    'A X',
    'A Z',
    'A Z',
    'B Y',
    'B Y',
    'A X',
    'B Y',
    'C Z',
    'B Z',
    'C Z',
    'B Y',
    'A Z',
    'C Z',
    'A Y',
    'A X',
    'A Z',
    'B Y',
    'A X',
    'A Z',
    'C Z',
    'A Z',
    'C Z',
    'C Z',
    'A X',
    'C Z',
    'A X',
    'C Z',
    'A X',
    'C Z',
    'B Y',
    'C Z',
    'A X',
    'B Y',
    'A Y',
    'C X',
    'A Y',
    'A Z',
    'A X',
    'A Z',
    'B Y',
    'A X',
    'C Z',
    'A Y',
    'B Y',
    'B Y',
    'C Z',
    'B Y',
    'C Z',
    'B Y',
    'B Z',
    'C Z',
    'C Z',
    'B Y',
    'A X',
    'C Z',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'A X',
    'A Z',
    'A Z',
    'C Z',
    'A Y',
    'B Y',
    'A Y',
    'A Y',
    'B Y',
    'C X',
    'A Y',
    'C Z',
    'C Z',
    'C Z',
    'A Y',
    'A Y',
    'A Y',
    'C Z',
    'A X',
    'B Y',
    'A X',
    'B X',
    'A Y',
    'A Y',
    'A X',
    'B Z',
    'B Y',
    'C Z',
    'B Y',
    'C Z',
    'B Y',
    'C Z',
    'A Z',
    'C Z',
    'A X',
    'B Y',
    'A X',
    'C Z',
    'B Z',
    'C Z',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'A X',
    'B Y',
    'B Z',
    'A Z',
    'A X',
    'A X',
    'C Z',
    'A X',
    'A X',
    'C X',
    'C X',
    'C Z',
    'B Y',
    'B Z',
    'C Z',
    'A X',
    'B Y',
    'B Y',
    'A Z',
    'C Z',
    'C Y',
    'A X',
    'B Y',
    'B Y',
    'C Y',
    'A X',
    'A X',
    'A X',
    'A X',
    'A Z',
    'B Y',
    'A Z',
    'C Z',
    'C Z',
    'B Y',
    'B Z',
    'B Y',
    'A Y',
    'C Z',
    'C Z',
    'B Y',
    'A Y',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'A X',
    'A Z',
    'C Z',
    'A Z',
    'C Z',
    'B Z',
    'A X',
    'A Y',
    'B Y',
    'A X',
    'A Y',
    'A Z',
    'A Y',
    'A X',
    'A Y',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'A X',
    'A Y',
    'A X',
    'C Z',
    'A Z',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'B Y',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'B Y',
    'A Y',
    'A X',
    'A X',
    'C Z',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'B Y',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'A Y',
    'A X',
    'C Z',
    'A Y',
    'C Z',
    'A X',
    'B Z',
    'B Y',
    'A X',
    'B Y',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'A X',
    'C Z',
    'B X',
    'C Z',
    'C Z',
    'A Y',
    'C Z',
    'A Y',
    'B X',
    'C Z',
    'B Y',
    'C Z',
    'A Z',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'B X',
    'C Z',
    'C Z',
    'B Y',
    'A Z',
    'A Y',
    'C Z',
    'A X',
    'A Z',
    'A X',
    'A X',
    'B Y',
    'A X',
    'C Z',
    'A X',
    'A X',
    'B Y',
    'A X',
    'B Z',
    'C Z',
    'A Z',
    'A Y',
    'A X',
    'B Y',
    'A X',
    'A Z',
    'A X',
    'B Y',
    'B Z',
    'B Y',
    'C Z',
    'B Y',
    'A X',
    'A Y',
    'C Z',
    'A X',
    'B Z',
    'C Z',
    'C Z',
    'A X',
    'A X',
    'A Y',
    'C Z',
    'C Z',
    'C Z',
    'A Y',
    'B Y',
    'A X',
    'C Z',
    'B Y',
    'B Y',
    'A X',
    'A X',
    'B Y',
    'C Z',
    'B Y',
    'A X',
    'A Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'B Z',
    'C Z',
    'A Z',
    'C Z',
    'A Y',
    'B Y',
    'A Y',
    'C X',
    'C Z',
    'C Z',
    'A Y',
    'A X',
    'B Y',
    'C Z',
    'A X',
    'C Z',
    'A X',
    'A Y',
    'A Y',
    'B Z',
    'C Y',
    'B Y',
    'C Z',
    'B Y',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'A X',
    'B Y',
    'A Y',
    'C Z',
    'B Y',
    'A Z',
    'B Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A Y',
    'A X',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'B X',
    'C Z',
    'B Z',
    'A X',
    'A X',
    'A Y',
    'A X',
    'A Z',
    'B Y',
    'A Y',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C X',
    'A Y',
    'C Z',
    'C Z',
    'B Y',
    'A X',
    'C Y',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'B X',
    'A X',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'C Y',
    'A X',
    'C Z',
    'A Z',
    'C Z',
    'C Z',
    'B Y',
    'A X',
    'A X',
    'A Z',
    'A Y',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'A Y',
    'A X',
    'C Z',
    'C Z',
    'A X',
    'A X',
    'C Z',
    'C Z',
    'B Y',
    'A X',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'A Y',
    'B Z',
    'A Y',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'B Y',
    'A Y',
    'A X',
    'B Z',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'B Z',
    'C Z',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'C Z',
    'C Y',
    'B Z',
    'B Z',
    'A Y',
    'C Z',
    'C Z',
    'B Z',
    'B Y',
    'C Z',
    'B Y',
    'C Z',
    'C Z',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'A Y',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'C Z',
    'A Y',
    'A X',
    'A Z',
    'A Y',
    'C Z',
    'C Z',
    'C Z',
    'B Z',
    'C Z',
    'B Y',
    'C Z',
    'B Y',
    'A Y',
    'C Z',
    'C Z',
    'A Z',
    'B Y',
    'A X',
    'A X',
    'B Z',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'B Z',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A Y',
    'C Z',
    'A Z',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'A X',
    'A Y',
    'C Z',
    'B Y',
    'A X',
    'C Z',
    'C Z',
    'A X',
    'A Y',
    'A X',
    'B Z',
    'C Z',
    'A X',
    'C Z',
    'A X',
    'A Z',
    'B Y',
    'C Z',
    'C Z',
    'C X',
    'B Z',
    'B X',
    'B Y',
    'A Z',
    'C Z',
    'A X',
    'B Z',
    'A X',
    'B Y',
    'C Z',
    'B Z',
    'A Z',
    'A Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'B Y',
    'A Y',
    'A X',
    'A X',
    'B Y',
    'A Z',
    'A X',
    'C Z',
    'B Z',
    'A X',
    'A X',
    'B Y',
    'A X',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'A X',
    'A Z',
    'C Z',
    'A X',
    'B Z',
    'C Z',
    'B Y',
    'C Z',
    'C Z',
    'A Y',
    'C Z',
    'B Z',
    'C Z',
    'C Z',
    'B Y',
    'C Z',
    'C Z',
    'B Y',
    'A X',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'B Y',
    'C Z',
    'B Z',
    'C Z',
    'A X',
    'C Z',
    'A X',
    'C Z',
    'A Y',
    'C Z',
    'C Z',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'B Y',
    'C Z',
    'A X',
    'B Z',
    'A X',
    'B Z',
    'C Z',
    'A X',
    'C Z',
    'B Y',
    'A Z',
    'B X',
    'A Y',
    'C Z',
    'C Z',
    'B X',
    'A Y',
    'A X',
    'C Z',
    'A X',
    'C Z',
    'B X',
    'A X',
    'B Y',
    'A Z',
    'A X',
    'C Z',
    'A Y',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A Z',
    'C Z',
    'C Z',
    'B Y',
    'A X',
    'B Y',
    'C Z',
    'B Y',
    'A X',
    'C Z',
    'C Z',
    'A X',
    'A X',
    'B Y',
    'C Z',
    'B Y',
    'C Z',
    'C Z',
    'A Z',
    'C Z',
    'C Z',
    'C Z',
    'A Y',
    'A Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'C Z',
    'A X',
    'A X',
    'B Z',
    'C Z',
    'C Z',
    'C Z',
    'B Z',
    'A X',
    'C Z',
    'A Y',
    'B Y',
    'C Z',
    'A Y',
    'C Z',
    'C Z',
    'A X',
    'A X',
    'B Y',
    'A Z',
    'A Y',
    'A X',
    'B X',
    'B Y',
    'B Z',
    'B Y',
    'A X',
    'C Z',
    'C Z',
    'B Z',
    'B Z',
    'B Z',
    'C Z',
    'C Z',
    'B Y',
    'B Y',
    'B Y',
    'C Z',
    'B Y',
    'A X',
    'A Z',
    'B Z',
    'A X',
    'B Z',
    'A X',
    'C Z',
    'B Y',
    'B X',
    'A X',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'B X',
    'B Y',
    'A Y',
    'A X',
    'A X',
    'A Y',
    'C Z',
    'C Z',
    'B Y',
    'C Z',
    'B Z',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'A Y',
    'C Z',
    'B Z',
    'A X',
    'A Y',
    'A Z',
    'C Z',
    'B Y',
    'B Z',
    'A X',
    'C Z',
    'A X',
    'A X',
    'A Z',
    'C Z',
    'C Z',
    'B Y',
    'A X',
    'C Z',
    'A Y',
    'A Z',
    'A X',
    'A X',
    'C Z',
    'A Y',
    'B Y',
    'C Z',
    'A Z',
    'C Z',
    'B Y',
    'A X',
    'A X',
    'A X',
    'C Y',
    'C Z',
    'A Y',
    'B Z',
    'C X',
    'A X',
    'A X',
    'A X',
    'A X',
    'B Z',
    'B Y',
    'C Z',
    'B Y',
    'A X',
    'B Y',
    'C Z',
    'B Y',
    'C Z',
    'C Z',
    'A X',
    'B Y',
    'A Y',
    'B X',
    'A X',
    'B X',
    'C Z',
    'A Z',
    'A X',
    'B Y',
    'B Y',
    'C Z',
    'A X',
    'A X',
    'B Y',
    'C Z',
    'A X',
    'C Z',
    'A X',
    'A Z',
    'A Z',
    'C Z',
    'A Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A Z',
    'C Y',
    'C Z',
    'C Z',
    'A Z',
    'A Y',
    'A X',
    'B Z',
    'C Z',
    'C Z',
    'C Z',
    'A Y',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A Z',
    'B Z',
    'A X',
    'C Z',
    'C Z',
    'A Y',
    'B Y',
    'A X',
    'C Z',
    'A X',
    'B Y',
    'A X',
    'A X',
    'A Z',
    'B Y',
    'C Z',
    'B X',
    'C X',
    'A X',
    'A X',
    'A X',
    'C Z',
    'C Z',
    'A X',
    'B Y',
    'A Z',
    'B Y',
    'A X',
    'A Y',
    'C Z',
    'B Y',
    'C Z',
    'B Y',
    'A Y',
    'B Y',
    'A Y',
    'A X',
    'C Z',
    'C Z',
    'A X',
    'B Y',
    'A X',
    'C Z',
    'C Z',
    'A Y',
    'B Y',
    'B Y',
    'A Z',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'A X',
    'B Y',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'B Y',
    'C Z',
    'B Z',
    'B Y',
    'A X',
    'B Y',
    'A Z',
    'B Y',
    'A X',
    'B X',
    'C Z',
    'A Z',
    'B Y',
    'C Z',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'B X',
    'A X',
    'B Y',
    'B Y',
    'A X',
    'C Z',
    'A X',
    'B Z',
    'B Z',
    'B Z',
    'A X',
    'C X',
    'A X',
    'A X',
    'A X',
    'B Y',
    'B Y',
    'C Z',
    'C Z',
    'A X',
    'C Z',
    'B Y',
    'A X',
    'C Z',
    'A X',
    'C Z',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'A Y',
    'B Y',
    'C Z',
    'A Z',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'A Z',
    'A Y',
    'C Z',
    'A X',
    'B Y',
    'B Z',
    'C Z',
    'A Y',
    'A Y',
    'C Z',
    'C Z',
    'B Z',
    'A Z',
    'C Z',
    'A X',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'C Y',
    'B Y',
    'A Y',
    'A X',
    'C Z',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'A Z',
    'C X',
    'A Y',
    'C Z',
    'A Y',
    'A Y',
    'C Z',
    'A Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'A Y',
    'B Y',
    'A Z',
    'B Y',
    'A X',
    'A X',
    'B Y',
    'A Z',
    'B Y',
    'C Z',
    'B Z',
    'A X',
    'C Z',
    'A Y',
    'A Y',
    'C Z',
    'A X',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'A X',
    'C Z',
    'B Y',
    'C Z',
    'B X',
    'C Z',
    'A Y',
    'C Z',
    'A X',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'B Y',
    'C Z',
    'B Z',
    'C Z',
    'A Y',
    'A X',
    'A Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A Z',
    'B Y',
    'B Y',
    'B Y',
    'C Z',
    'C Z',
    'C X',
    'C Z',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'B Z',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'B Z',
    'C Z',
    'A X',
    'C Z',
    'A Y',
    'B Y',
    'C Z',
    'B Z',
    'B Y',
    'C Z',
    'B X',
    'C Z',
    'B Y',
    'B Y',
    'B Y',
    'A X',
    'A X',
    'C Z',
    'A Z',
    'C Z',
    'B Y',
    'B Z',
    'C Z',
    'C Z',
    'B Z',
    'B Y',
    'A Z',
    'B Y',
    'A X',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'A X',
    'C Z',
    'C Z',
    'A Y',
    'C Z',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'B Y',
    'C Z',
    'A Z',
    'A X',
    'B Y',
    'C Z',
    'B Y',
    'A X',
    'A Z',
    'C Z',
    'B Y',
    'A Z',
    'C Z',
    'B Y',
    'A Z',
    'A X',
    'B Z',
    'A X',
    'C Z',
    'B Y',
    'C Z',
    'A Y',
    'C Y',
    'A X',
    'A Y',
    'C Z',
    'C Z',
    'B Y',
    'C Z',
    'B Y',
    'A Z',
    'C Z',
    'C Z',
    'A X',
    'C Z',
    'B Z',
    'A Y',
    'B Z',
    'A Z',
    'A X',
    'B Y',
    'A Z',
    'A Y',
    'C Z',
    'C Z',
    'B Y',
    'A X',
    'B Y',
    'C Z',
    'A X',
    'B Y',
    'B Y',
    'C Z',
    'A Z',
    'A X',
    'C Z',
    'B X',
    'C Z',
    'C Z',
    'C Z',
    'C Y',
    'A Z',
    'A X',
    'C Z',
    'C Z',
    'A X',
    'B Y',
    'C Z',
    'B Y',
    'C Z',
    'B Z',
    'A Z',
    'C Z',
    'B Y',
    'A X',
    'C Z',
    'C Z',
    'B Z',
    'C Z',
    'A Z',
    'B Y',
    'B Z',
    'C Z',
    'C Z',
    'A X',
    'C Y',
    'B Y',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'B Y',
    'B Z',
    'C Z',
    'C Z',
    'A Y',
    'A X',
    'C Z',
    'A X',
    'B Z',
    'B Y',
    'A Z',
    'B Z',
    'C X',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'B Z',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'B Y',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'B Y',
    'B Z',
    'B Y',
    'C Z',
    'A X',
    'A X',
    'B Y',
    'A X',
    'B Y',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'B Z',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A Z',
    'C Z',
    'A X',
    'B Y',
    'A Y',
    'A Y',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'A Z',
    'A X',
    'B Y',
    'C Z',
    'A X',
    'C Z',
    'A X',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'B Y',
    'A Y',
    'C Z',
    'B Y',
    'B Y',
    'A X',
    'C Z',
    'A Y',
    'A Z',
    'C Z',
    'C Z',
    'C Z',
    'A Y',
    'B Y',
    'C Z',
    'C Z',
    'B Z',
    'C Z',
    'B Z',
    'B Y',
    'A X',
    'A X',
    'C Z',
    'B Z',
    'C Z',
    'C Z',
    'A X',
    'A X',
    'B Z',
    'A X',
    'C Z',
    'C Z',
    'B Y',
    'A X',
    'C Z',
    'A X',
    'B Y',
    'C X',
    'A Z',
    'B Y',
    'C Z',
    'A X',
    'B Y',
    'C Z',
    'A X',
    'B Y',
    'C Z',
    'B X',
    'C Z',
    'A Y',
    'C Z',
    'A X',
    'C X',
    'B Z',
    'C Z',
    'B Y',
    'B Y',
    'B Y',
    'A Y',
    'A X',
    'C Z',
    'C Z',
    'A Y',
    'B Y',
    'A X',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'A X',
    'C Z',
    'A X',
    'C Z',
    'B Y',
    'C Z',
    'A X',
    'A Z',
    'C X',
    'B Y',
    'C Z',
    'C Z',
    'B Z',
    'A X',
    'A X',
    'B Y',
    'C Z',
    'A Y',
    'B Y',
    'C Z',
    'A X',
    'A Z',
    'A X',
    'B Y',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'B Y',
    'A X',
    'B Y',
    'B Z',
    'C Z',
    'B Z',
    'A X',
    'C Z',
    'C Z',
    'A Y',
    'C Z',
    'A X',
    'C Z',
    'B Y',
    'C Z',
    'C Z',
    'C Y',
    'C Z',
    'C Z',
    'A Y',
    'C Z',
    'C Z',
    'A Z',
    'A X',
    'B Z',
    'C Z',
    'A Y',
    'A X',
    'B Z',
    'C Z',
    'C Z',
    'B Y',
    'B Z',
    'A X',
    'A X',
    'C Z',
    'B Y',
    'A Y',
    'C Z',
    'A Z',
    'A X',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'A Z',
    'C Z',
    'C Z',
    'C Z',
    'A Y',
    'B Y',
    'A X',
    'B Z',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A Z',
    'B Z',
    'B X',
    'A X',
    'A Z',
    'A X',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'A X',
    'B Y',
    'A Y',
    'C Z',
    'B Z',
    'C Z',
    'A X',
    'B Y',
    'C Z',
    'B Y',
    'A Z',
    'C Z',
    'A Y',
    'C Z',
    'A X',
    'C Z',
    'A Z',
    'B Y',
    'A Y',
    'A X',
    'A X',
    'A Z',
    'C Z',
    'C Z',
    'C Y',
    'C Z',
    'A Y',
    'A X',
    'B Y',
    'A Z',
    'B Z',
    'B Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'A Y',
    'B Y',
    'C Z',
    'B Y',
    'C Z',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'A Z',
    'A X',
    'B Y',
    'C Z',
    'A Y',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'B Y',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'B Y',
    'C Z',
    'A X',
    'A X',
    'C Z',
    'B Y',
    'B Z',
    'A X',
    'A X',
    'A X',
    'C Z',
    'C Z',
    'B Y',
    'A X',
    'C Z',
    'A X',
    'A Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A Z',
    'A X',
    'B X',
    'B Z',
    'A Y',
    'C Z',
    'C Y',
    'B Y',
    'C Z',
    'A Y',
    'A X',
    'B Z',
    'B Y',
    'C Z',
    'B Y',
    'C Z',
    'A X',
    'A Z',
    'A X',
    'C Z',
    'B Y',
    'B Y',
    'B Y',
    'A Z',
    'C Z',
    'C Z',
    'B Y',
    'C Z',
    'B Y',
    'A X',
    'B Y',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'B Y',
    'A X',
    'A Y',
    'B Z',
    'C Z',
    'C Z',
    'A X',
    'B Y',
    'A X',
    'A X',
    'A Y',
    'B X',
    'A X',
    'A X',
    'C Z',
    'B Z',
    'A X',
    'C Z',
    'A Y',
    'A Z',
    'C Z',
    'A Z',
    'A X',
    'B Y',
    'A X',
    'C X',
    'C Z',
    'B Y',
    'C Z',
    'A X',
    'A X',
    'C Z',
    'A X',
    'B Y',
    'A X',
    'C Z',
    'B Z',
    'C Z',
    'A X',
    'C X',
    'C Z',
    'C Z',
    'A X',
    'C Z',
    'A Y',
    'C Z',
    'A X',
    'B Y',
    'B Y',
    'B Y',
    'B Y',
    'B Y',
    'B Y',
    'B Y',
    'B Y',
    'A Y',
    'A Z',
    'B Y',
    'C Z',
    'C Z',
    'B Y',
    'A Z',
    'A X',
    'A Y',
    'A X',
    'C Z',
    'A Y',
    'A Z',
    'A Y',
    'B Y',
    'C Z',
    'C Z',
    'A Y',
    'C Z',
    'A X',
    'B Y',
    'C Z',
    'A X',
    'C Z',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'A Z',
    'A X',
    'C Z',
    'B Y',
    'A Z',
    'C Z',
    'A X',
    'C Z',
    'B Y',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'B Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'B Y',
    'A X',
    'C Z',
    'C Z',
    'A Z',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'A X',
    'B Y',
    'A X',
    'C Z',
    'B Y',
    'B Y',
    'A Y',
    'A Y',
    'A X',
    'A Y',
    'A Y',
    'C Z',
    'C Z',
    'A Y',
    'C Z',
    'A Y',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'B Y',
    'B Y',
    'A X',
    'C Z',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'B Y',
    'A X',
    'C Z',
    'A X',
    'C Y',
    'A Y',
    'B Y',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'C Z',
    'C Z',
    'B Y',
    'C Z',
    'A X',
    'A X',
    'B Y',
    'B X',
    'C Z',
    'B Y',
    'A X',
    'B Z',
    'A Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'A Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'A X',
    'B Y',
    'A Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A Z',
    'B Y',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'B Z',
    'C Z',
    'A Y',
    'C Z',
    'A Y',
    'B Y',
    'C Z',
    'A X',
    'C Z',
    'A X',
    'B Z',
    'B Y',
    'B Y',
    'A X',
    'B X',
    'A X',
    'C Z',
    'B Y',
    'A X',
    'A Z',
    'C Z',
    'C Z',
    'A Z',
    'C Z',
    'C Z',
    'B Y',
    'C Y',
    'C Z',
    'A Z',
    'A Z',
    'C Z',
    'B X',
    'C Z',
    'C Z',
    'B Y',
    'C Z',
    'B Y',
    'B Y',
    'A X',
    'A Y',
    'B Y',
    'A X',
    'B Z',
    'C Z',
    'A Z',
    'A X',
    'A X',
    'A Z',
    'A Z',
    'B Z',
    'A X',
    'B Y',
    'C Z',
    'B Y',
    'A X',
    'C Z',
    'B Z',
    'A Y',
    'B Z',
    'C Z',
    'A X',
    'B Z',
    'A X',
    'A Y',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'A Y',
    'A Y',
    'A X',
    'B Y',
    'C Z',
    'A X',
    'B Y',
    'A X',
    'B Y',
    'C Z',
    'A Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'B Z',
    'C Z',
    'A X',
    'A Z',
    'A X',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'C Z',
    'A X',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'B Y',
    'A Z',
    'A X',
    'A Z',
    'C Z',
    'C Z',
    'C Z',
    'C Z',
    'B X',
    'C Z',
    'C Z',
    'A X',
    'C Z',
    'A Z',
    'B Z',
    'B Y',
    'B Z',
    'A Y',
    'B Y',
    'B Y',
    'C Z',
    'A Y',
    'A Y',
    'A Y',
    'C Z',
    'C Z',
    'B Z',
    'A X',
    'C Z',
    'A X',
    'A X',
    'A X',
    'C Z',
    'C Z',
    'A Z',
    'A X',
    'A Y',
    'C Z',
    'C Z',
    'A X',
    'B Z',
    'C Z',
    'A X',
    'C Z',
    'A Z',
    'A X',
    'C Z',
    'C Z',
    'A X',
    'A Z',
    'B Y',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'A X',
    'B Z',
    'C Z',
    'B Y',
    'C Z',
    'A Z',
    'C Z',
    'A X',
    'B Y',
    'C Z',
    'C Z',
    'A Y',
    'C X',
    'A Y',
    'A Y',
    'C Z',
    'C Z',
    'A X',
    'A Z',
    'B Y',
    'C Z',
    'B Y',
    'C Z',
    'A Y',
    'C Z',
    'C Z',
    'C Z',
    'A Z',
    'C Z',
    'C Z',
    'B Y',
    'A Y',
    'C Z',
    'C Z',
    'B Y',
    'A X',
    'C Z',
    'B Y',
    'C Z',
    'B Y',
    'C Z',
    'B Y',
    'A X',
    'A Y',
    'B Y',
    'C Z',
    'B Z',
    'A Y',
    'C Z',
    'A Y',
    'A Z',
    'C Z',
    'B Y',
    'C Z',
    'C Z',
    'B Y',
    'A Y',
    'A Y',
    'C Z',
    'C Z',
    'A Y',
    'C Z',
    'C X',
    'C Z',
    'C Z',
    'C Z',
    'A X',
    'C Z',
    'B Y',
    'B Y',
    'C Z',
    'C Y',
    'B Z',
    'C Z',
    'B Y',
    'A X',
    'A X',
    'B Y',
    'C Z',
    'A X',
    'C Z',
    'B Z',
    'C Z',
    'A X',
    'B Y'
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Day2Service],
    }).compile();

    service = module.get<Day2Service>(Day2Service);
  });

  it('V1 Test Example', () => {
    const input = [
      'A Y',
      'B X',
      'C Z'
    ];
    expect(service.playRockPaperScissorsV1(input)).toBe(15);
  });

  it('Test V1', () => {
    expect(service.playRockPaperScissorsV1(input)).toBe(13675);
  });

  it('V2 Test Example', () => {
    const testInput = [
      'A Y',
      'B X',
      'C Z'
    ];
    expect(service.playRockPaperScissorsV2(testInput)).toBe(12);
  });

  it('V2 Test RealThing', () => {
    expect(service.playRockPaperScissorsV2(input)).toBe(14184);
  });

});
