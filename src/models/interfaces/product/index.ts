interface SignInRequestInterface {
  username: string;
  password: string;
}

interface SignInResponseInterface {
  accessToken: string;
}

export type { SignInRequestInterface, SignInResponseInterface };
