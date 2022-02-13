import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'serverless',
      database: 'nest-characters',
      entities: [join(__dirname, '..', '..', 'entities/**/*.entity.{js,ts}')],
      keepConnectionAlive: true,
    }),
  ],
})
export class DatabaseModule {
  constructor(private connection: Connection) {}
}
