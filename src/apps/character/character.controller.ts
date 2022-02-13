import { Controller, Get } from '@nestjs/common';
import { CharacterService } from './character.service';

@Controller()
export class CharacterController {
  constructor(private readonly appService: CharacterService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
