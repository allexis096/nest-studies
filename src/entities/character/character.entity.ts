import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  CharacterType,
  CharacterVillage,
  ICharacter,
} from './character.interface';

@Entity()
export class Character implements ICharacter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column({
    enum: CharacterType,
    type: 'enum',
  })
  type: CharacterType;

  @Column({
    enum: CharacterVillage,
    type: 'enum',
  })
  village: CharacterVillage;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
