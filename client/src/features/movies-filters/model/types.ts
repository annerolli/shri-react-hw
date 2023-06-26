export enum Filters {
  TITLE = 'title',
  GENRE = 'genre',
  CINEMA = 'cinema',
}

export type FilterMap = Partial<Record<Filters, string | null>>;

export type FilterStrategy = (value: string, filter: string) => boolean;
