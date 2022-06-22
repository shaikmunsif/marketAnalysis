export interface GainersByName {
  status: number;
  error: null | string;
  companies: {
    Company: string;
    Change_Percent: string;
    Current_Price: number;
    Last_1_Days_Price: number;
    Date: string | null;
    Comments: string;
  }[];
}
