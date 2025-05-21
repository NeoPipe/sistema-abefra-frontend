import api from "../../config/api";
import type { SignInInterface } from "../../models/interfaces/auth";

const path = "/v1/auth";

const signin = (data: SignInInterface) => {
  api.post(path + "/login", data).then((res) => {
    api.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${res.data["accessToken"]}`;
  });
};

export { signin };
