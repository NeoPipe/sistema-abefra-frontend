import api from "../../config/api";
import type {
  SignInRequestInterface,
  SignInResponseInterface,
} from "../../models/interfaces/auth";

const path = "/v1/auth";

const signin = async (data: SignInRequestInterface) =>
  await api.post<SignInResponseInterface>(path + "/login", data).then((res) => {
    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${res.data["accessToken"]}`;

    return res.status;
  });

export { signin };
