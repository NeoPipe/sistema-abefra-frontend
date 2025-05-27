import api from "../../config/api";
import type { SignInResponseInterface } from "../../models/interfaces/auth";

const path = "/v1/products";

const getAll = async () =>
  await api.get<SignInResponseInterface>(path).then((res) => {
    console.log(res.data);
  });

export { getAll };
