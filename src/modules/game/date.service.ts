import { Injectable } from '@nestjs/common';
import { IDate } from './interfaces/date.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class DateService {
  constructor(@InjectModel('Game') private readonly gameModel: Model<IDate>) {}

  create() {
    const newDate = new this.gameModel();

    newDate
      .save()
      .then((data: IDate) => {
        // tslint:disable-next-line:no-console
        console.log(data); // Here obviously we would't have a console.log but some other method
      })
      .catch((err: any) => {
        throw new Error('Error saving date');
      });
  }
}
