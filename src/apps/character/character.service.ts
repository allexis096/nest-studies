import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Character } from 'src/entities/character/character.entity';
import { CharacterRepository } from 'src/entities/character/character.repository';

@Injectable()
export class CharacterService {
  constructor(
    @InjectRepository(CharacterRepository)
    private characterRepository: CharacterRepository,
  ) {}

  async list(): Promise<Character[]> {
    return this.characterRepository.find();
  }

  async create(character: Character): Promise<Character> {
    return this.characterRepository.create(character);
  }
}
