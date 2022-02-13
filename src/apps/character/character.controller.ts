import { Controller, Get, Post } from '@nestjs/common';
import { Character } from 'src/entities/character/character.entity';
import { CharacterService } from './character.service';

@Controller('character')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) {}

  @Get()
  list(): Promise<Character[]> {
    return this.characterService.list();
  }

  @Post()
  create(character: Character): Promise<Character> {
    return this.characterService.create(character);
  }
}
