import { Module } from '@nestjs/common';
import { CharacterModule } from './apps/character/character.module';
import { DatabaseModule } from './config/database/database.module';

@Module({
  imports: [CharacterModule, DatabaseModule],
})
export class AppModule {}
