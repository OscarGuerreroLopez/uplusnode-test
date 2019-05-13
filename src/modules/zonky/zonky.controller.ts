import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ZonkyService } from './zonky.service';
import { ILoan } from './interfaces';

@Controller('zonky')
export class ZonkyController {
  constructor(private zonkyService: ZonkyService) {}
  @Get()
  getLoans(@Req() req: Request, @Res() res: Response) {
    this.zonkyService
      .getLoans()
      .then((data: ILoan[]) => {
        res.status(200).json(data);
      })
      .catch((err: any) => {
        res.status(500).json({ message: 'Something did not work' });
      });
  }
}
