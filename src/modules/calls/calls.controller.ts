import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { DateService } from '../share_services/date.service';
import { IDate } from '../share_services/date.interface';
import { AuthService } from './auth.service';

@Controller('calls')
export class CallsController {
  constructor(
    private readonly dateService: DateService,
    private readonly authService: AuthService,
  ) {}

  token: string;

  @Get()
  getDates(@Req() req: Request, @Res() res: Response) {
    this.token = req.headers.authorization;

    this.authService
      .checkToken(this.token)
      .then(() => {
        this.dateService
          .findDates()
          .then((data: IDate[]) => {
            res.status(200).json(data);
          })
          .catch((err: any) => {
            res.status(500).json({ message: err });
          });
      })

      .catch((err: any) => {
        res.status(401).json({ message: err });
      });
  }
}
