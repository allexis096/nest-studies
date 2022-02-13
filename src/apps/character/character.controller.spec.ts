import { Test, TestingModule } from '@nestjs/testing';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';

describe('CharacterController', () => {
  let character: TestingModule;

  beforeAll(async () => {
    character = await Test.createTestingModule({
      controllers: [CharacterController],
      providers: [CharacterService],
    }).compile();
  });

  describe('getHello', () => {
    it('should return "Hello World!"', () => {
      const appController =
        character.get<CharacterController>(CharacterController);
      expect(appController.list()).toBe('Hello World!');
    });
  });
});
