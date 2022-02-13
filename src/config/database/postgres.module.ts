import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { Character } from 'src/entities/character/character.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async (): Promise<any> => {
        return {
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: 'serverless',
          database: 'nest-characters',
          entities: [Character],
          keepConnectionAlive: true,
        };
      },
    }),
  ],
})
export class PostgresModule {}
