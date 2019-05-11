export interface IPhotos {
  name: string;
  url: string;
}

export interface ILoan {
  readonly id: number;
  readonly url: string;
  readonly name: string;
  readonly story: string;
  readonly purpose: string;
  readonly photos: IPhotos[];
  readonly userId: number;
  readonly nickName: string;
  readonly termInMonths: number;
  readonly interestRate: number;
  readonly revenueRate: number;
  readonly annuity: number;
  readonly premium: number;
  readonly rating: string;
  readonly topped: boolean;
  readonly amount: number;
  readonly remainingInvestment: number;
  readonly investmentRate: number;
  readonly covered: boolean;
  readonly reservedAmount: number;
  readonly zonkyPlusAmount: number;
  readonly datePublished: string;
  readonly deadline: string;
  readonly myOtherInvestments: any;
  readonly borrowerRelatedInvestmentInfo: any;
  readonly investmentsCount: number;
  readonly questionsCount: number;
  readonly region: string;
  readonly mainIncomeType: string;
  readonly questionsAllowed: boolean;
  readonly activeLoansCount: number;
  readonly insuranceActive: boolean;
  readonly insuranceHistory: any[];
  readonly fastcash: boolean;
  readonly multicash: boolean;
  readonly annuityWithInsurance: number;
}
