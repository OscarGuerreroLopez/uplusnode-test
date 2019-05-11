import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import config from '../../config/keys';

@Injectable()
export class AuthService {
  checkToken(token: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, config.secret, (error, decoded) => {
        if (error) {
          reject('No Valid token or Token missing');
        } else {
          resolve();
        }
      });
    });
  }
}
