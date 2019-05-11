import { Module } from '@nestjs/common';
import { ZonkyController } from './zonky.controller';
import { ZonkyService } from './zonky.service';

@Module({
  controllers: [ZonkyController],
  providers: [ZonkyService],
})
export class ZonkyModule {}
