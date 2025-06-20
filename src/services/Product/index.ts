import api from "../../config/api";
import { validateLocalToken } from "../Auth";
import { toast } from "react-toastify";
import type { ProductsInterface } from "../../models/interfaces/product";

const path = "/v1/products";

const getProducts = async () => {
  validateLocalToken();

  const response = await api.get<ProductsInterface>(path).then((res) => {
    return res.data;
  });

  return response;
};

const postProduct = async (description: string) => {
  validateLocalToken();

  const promise = api.post(path, { description: description }).then((res) => {
    console.log(res);
    return res.data;
  });
  toast.promise(promise, {
    pending: "Carregando...",
    success: "Produto adicionado!",
  });
  const response = promise.then((res) => {
    return res.data;
  });
  return response;
};

export { getProducts, postProduct };
