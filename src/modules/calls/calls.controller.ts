import { Controller, Get } from '@nestjs/common';
import { DateService } from '../share_services/date.service';

@Controller('calls')
export class CallsController {
  constructor(private readonly dateService: DateService) {}

  @Get()
  async getDates() {
    return await this.dateService.findDates();
  }
}
