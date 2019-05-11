import { Injectable } from '@nestjs/common';
import Axios, { AxiosResponse } from 'axios';
import axios from 'axios';

import { ICheapSharkResponse } from './interfaces/cheapSharkResponse.interface';
import { IGame, IError } from './interfaces/game.interface';
import { from, forkJoin } from 'rxjs';

@Injectable()
export class GameService {
  /**
   * Returns list of games
   */

  public async getGames(): Promise<IGame[] | IError[]> {
    const gamesList = await this.fetchGameInfo();
    return await this.getCheapest(gamesList.data);
  }

  private async fetchGameInfo(): Promise<AxiosResponse> {
    const res = await Axios.get(
      'http://www.cheapshark.com/api/1.0/deals?storeID=1&desc=0&title=grand%20theft%20auto&pageSize=20',
    );
    if (res.status === 200) {
      return res;
    }
    throw new Error('Error fetching games data');
  }

  // Function to get the cheapest price for each game and return them all at once
  private getCheapest(
    games: ICheapSharkResponse[],
  ): Promise<IGame[] | IError[]> {
    return new Promise(resolve => {
      const gameInfo = games.map(game => {
        return from(
          axios
            .get('http://www.cheapshark.com/api/1.0/deals?id=' + game.dealID)
            .then(result => {
              return {
                name: game.title,
                salePrice: parseFloat(game.salePrice),
                cheapestPrice: parseFloat(result.data.cheapestPrice.price),
                releaseDate: new Date(game.releaseDate),
              };
            })
            .catch(err => {
              // In case of error we still return some data but with a ltille error message so front end guys can handle it
              // There are many ways to handle errors but I don't think it is necessary to throw new Error if maybe only one
              // call or a few didn't work. So in this case we include a simple error message:
              return {
                name: game.title,
                salePrice: parseFloat(game.salePrice),
                cheapestPrice: 0,
                releaseDate: new Date(game.releaseDate),
                message: 'Not able to retrieve the cheapest price',
              };
            }),
        );
      });

      forkJoin(gameInfo).subscribe(
        (data: IGame[] | IError[]) => resolve(data),
        (error: any) => {
          // Here yeah we throw new Error cause if this does not work then we have nothing
          // This is done this way cause we don't have too much data, with larger sets of data
          // another approach should be considered
          throw new Error('Error fetching games data');
        },
        () => {},
      );
    });
  }
}
