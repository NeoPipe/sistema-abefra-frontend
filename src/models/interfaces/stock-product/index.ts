import type { SignInResponseInterface } from "../auth";

interface StockProductInterface {
  description: string;
  quantity: number;
  dueDate: string;
}

export type { SignInResponseInterface, StockProductInterface };
