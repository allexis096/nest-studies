import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterController } from './character.controller';
import { CharacterService } from './character.service';
import { CharacterRepository } from 'src/entities/character/character.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CharacterRepository])],
  controllers: [CharacterController],
  providers: [CharacterService],
})
export class CharacterModule {}
