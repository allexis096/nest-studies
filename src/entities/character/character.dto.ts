import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  CharacterType,
  CharacterVillage,
  ICharacter,
} from './character.interface';

export class CharacterDto implements ICharacter {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsEnum(CharacterType)
  @IsNotEmpty()
  type: CharacterType;

  @IsEnum(CharacterVillage)
  @IsNotEmpty()
  village: CharacterVillage;
}
