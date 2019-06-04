export enum BeerCategory {
  Ale,
  PaleAle,
  IndianPaleAle,
  Lambic,
  Weissbier,
  Stout,
  Porter
}

export class Beer {
  name: string;
  country: string;
  alcoholByVolume: number;
  category: BeerCategory;
}
