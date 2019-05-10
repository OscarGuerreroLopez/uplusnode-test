import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GameService } from './game.service';
import { GameController } from './game.controller';
import { GameSchema } from './schemas/game.schema';
import { DateService } from '../share_services/date.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Game', schema: GameSchema }])],
  providers: [GameService, DateService],
  controllers: [GameController],
})
export class GameModule {}
