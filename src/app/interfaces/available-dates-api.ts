export interface AvailableDatesApi {
  status: number;
  error: null | string;
  dates: {
    date: Date;
  }[];
}
