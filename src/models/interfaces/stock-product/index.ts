import type { SignInResponseInterface } from "../auth";

interface StockProductInterface {
  id: string,
  productDescription: string;
  quantity: number;
  dueDate: string;
}

export type { SignInResponseInterface, StockProductInterface };
