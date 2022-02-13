import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: (process.env.DB_TYPE as 'postgres') ?? 'postgres',
      host: process.env.DB_HOST ?? 'localhost',
      port: (process.env.DB_PORT as unknown as number) ?? 5432,
      username: process.env.DB_USERNAME ?? 'postgres',
      password: process.env.DB_PASSWORD ?? 'serverless',
      database: process.env.DB_NAME ?? 'nest-characters',
      entities: [join(__dirname, '..', '..', 'entities/**/*.entity.{js,ts}')],
      keepConnectionAlive: true,
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {
  constructor(private connection: Connection) {}
}
