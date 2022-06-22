export interface Gainers {
  [index: number]: {
    Company: string;
    Change_Percent: string;
    Current_Price: number;
    Last_1_Days_Price: number;
    Date: string | null;
    Comments: string;
  };
}
