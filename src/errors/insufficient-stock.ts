import { Errors } from "@/protocols";

export function insufficientStockError(): Errors {
  return {
    name: "InsufficientStockError",
    message: "Quantidade não pode ser maior do que o estoque",
  };
}
