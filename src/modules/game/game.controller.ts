import { Controller, Get } from '@nestjs/common';
import { GameService } from './game.service';
import { DateService } from '../share_services/date.service';

@Controller('games')
export class GameController {
  constructor(
    private readonly gameService: GameService,
    private readonly dateService: DateService,
  ) {}

  @Get('/')
  async getGameInfo() {
    this.dateService.create();
    try {
      return await this.gameService.getGames();
    } catch (e) {
      throw Error(e);
    }
  }
}
