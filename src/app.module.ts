import { Module } from '@nestjs/common';
import { CharacterModule } from './apps/character/character.module';
import { DatabaseModule } from './config/database/database.module';
import { PostgresModule } from './config/database/postgres.module';

@Module({
  imports: [CharacterModule, DatabaseModule],
})
export class AppModule {}
