export interface ITable {
  layoutFix?: boolean;
  tableHeader: string[];
  tableBody: JSX.Element[] | JSX.Element[][];
}
