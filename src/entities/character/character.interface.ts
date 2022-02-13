export enum CharacterType {
  Hero = 'hero',
  Villain = 'villain',
}

export enum CharacterVillage {
  Konohagakure = 'konohagakure',
  Sunagakure = 'sunagakure',
  Kumogakure = 'kumogakure',
  Kirigakure = 'kirigakure',
  Iwagakure = 'iwagakure',
  Otogakure = 'otogakure',
}

export interface ICharacter {
  id?: number;
  name: string;
  age: number;
  type: CharacterType;
  village: CharacterVillage;
  createdAt?: Date;
  updatedAt?: Date;
}
