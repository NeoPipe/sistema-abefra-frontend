import api from "../../config/api";
import { validateLocalToken } from "../Auth";

const path = "/v1/stock-movement/";

const getStockMovement = async (productId?: string) => {
  validateLocalToken();

  const response = await api
    .get(path, { params: { productId } })
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return [];
    });

  return response;
};

export { getStockMovement };
