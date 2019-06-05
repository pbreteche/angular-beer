export enum BeerCategory {
  Ale = 'Ale',
  PaleAle = 'Pale Ale',
  IndianPaleAle = 'I.P.A.',
  Lambic = 'Lambic',
  Weissbier = 'Weissbier',
  Stout = 'Stout',
  Porter = 'Porter',
}

export class Beer {
  name: string;
  country: string;
  alcoholByVolume: number;
  category: BeerCategory;
}
