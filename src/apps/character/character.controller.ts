import { Body, Controller, Get, Post } from '@nestjs/common';
import { CharacterDto } from 'src/entities/character/character.dto';
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
  create(@Body() character: CharacterDto): Promise<Character> {
    return this.characterService.create(character);
  }
}
