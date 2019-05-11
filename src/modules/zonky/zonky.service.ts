import { Injectable } from '@nestjs/common';
import { ILoan } from './interfaces';
import axios from 'axios';

@Injectable()
export class ZonkyService {
  getLoans(): Promise<ILoan[]> {
    return new Promise((resolve, reject) => {
      axios
        .get('https://api.zonky.cz/loans/marketplace')
        .then(data => {
          resolve(data.data);
        })
        .catch(err => {
          // tslint:disable-next-line:no-console
          console.log(err);
          reject(err);
        });
    });
  }
}
