import api from "../../config/api";
import type { SignInResponseInterface } from "../../models/interfaces/auth";

const path = "/v1/products";

const getProducts = async () => {
  const response = await api.get<SignInResponseInterface>(path).then((res) => {
    return res.data;
  });

  return response;
}

const postProduct = async (description: string) => {
  console.log(description);

  const response = await api.post(path, {description: description}).then(res => {
    console.log(res);
    return res.data
  });

  return response;
}

export { getProducts, postProduct };
