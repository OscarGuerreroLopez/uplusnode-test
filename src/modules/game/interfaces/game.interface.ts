export interface IGame {
  readonly name: string;
  readonly salePrice: number;
  readonly cheapestPrice: number;
  readonly releaseDate: Date;
}

export interface IError {
  readonly name: string;
  readonly salePrice: number;
  readonly cheapestPrice: number;
  readonly releaseDate: Date;
  readonly message: string;
}
