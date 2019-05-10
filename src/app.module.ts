import { Module } from '@nestjs/common';
import { GameModule } from './modules/game/game.module';
import { CallsModule } from './modules/calls/calls.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DateService } from './modules/share_services/date.service';
import config from './config/keys';

@Module({
  imports: [GameModule, CallsModule, MongooseModule.forRoot(config.mongoURI)],
  controllers: [],
  providers: [DateService],
})
export class AppModule {}
