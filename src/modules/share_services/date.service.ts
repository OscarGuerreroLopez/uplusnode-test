import { Injectable } from '@nestjs/common';
import { IDate } from './date.interface';
import { WeekDays } from './week_days.enum';
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

  findDates(): Promise<IDate[]> {
    return new Promise((resolve, reject) => {
      this.gameModel
        .find()
        .then(data => {
          resolve(
            data.filter((item: IDate) => {
              return item.called_at.getDay() === WeekDays.Monday;
            }),
          );

          // resolve(data);
        })
        .catch();
    });

    // return await this.gameModel.find();
  }
}
