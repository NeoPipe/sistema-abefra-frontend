import api from "../../config/api";
import { toast } from "react-toastify";
import { validateLocalToken } from "../Auth";
import type { StockProductInterface } from "../../models/interfaces/stock-product";

const path = "/v1/stock/";

const getStock = async () => {
  validateLocalToken();

  const response = await api
    .get<StockProductInterface>(path)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.status;
    });

  return response;
};

const getStockByDate = async (startDate?: number, endDate?: number) => {
  validateLocalToken();

  const startDueDate = new Date();
  const endDueDate = new Date();

  startDueDate.setTime(startDueDate.getTime() + startDate);
  endDueDate.setTime(endDueDate.getTime() + endDate);

  const params = {
    startDueDate: startDueDate.toISOString(),
    endDueDate: endDueDate.toISOString(),
  };

  const response = await api
    .get<StockProductInterface>(path, { params })
    .then((res) => {
      return res.data;
    });

  return response;
};

const addToStock = async (
  productId: string,
  quantity: number,
  dueDate: string
) => {
  validateLocalToken();

  const promise = api.post(path, { productId, quantity, dueDate, status: 1 });
  toast.promise(promise, {
    pending: "Carregando...",
    success: "Item adicionado ao estoque!",
  });

  const response = promise.then((res) => {
    return res.data;
  });

  return response;
};

const editFromStock = async (
  productId: string,
  quantity: number,
  removeReasonId: string
) => {
  validateLocalToken();

  const promise = api.patch(
    path + productId + "/remove",
    { quantity, removeReasonId },
    { params: { id: productId } }
  );
  toast.promise(promise, {
    pending: "Carregando...",
    success: "Alterado quantidade do item!",
  });

  const response = promise.then((res) => {
    return res.data;
  });
  return response;
};

const deleteFromStock = async (productId: string) => {
  validateLocalToken();

  const promise = api.patch(path + productId + "/remove", { quantity: 0 });
  toast.promise(promise, {
    pending: "Carregando...",
    success: "Item removido do estoque!",
  });

  const response = promise.then((res) => {
    return res.data;
  });
  return response;
};

export { getStock, getStockByDate, addToStock, editFromStock, deleteFromStock };
