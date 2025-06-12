import type { SignInResponseInterface } from "../auth";

interface StockProductInterface {
  productDescription: string;
  quantity: number;
  dueDate: string;
}

export type { SignInResponseInterface, StockProductInterface };
