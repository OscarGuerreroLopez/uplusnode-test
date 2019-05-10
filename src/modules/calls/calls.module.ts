import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CallsController } from './calls.controller';
import { DateService } from '../share_services/date.service';
import { GameSchema } from '../game/schemas/game.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Game', schema: GameSchema }])],
  controllers: [CallsController],
  providers: [DateService],
})
export class CallsModule {}
