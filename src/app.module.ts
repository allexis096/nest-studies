import { Module } from '@nestjs/common';
import { CharacterModule } from './apps/character/character.module';

@Module({
  imports: [CharacterModule],
})
export class AppModule {}
