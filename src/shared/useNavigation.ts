import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const goTo = (path: string) => navigate(path);

  const goToHome = () => goTo("/");

  const goToSignIn = () => goTo("/signin");

  return {
    goBack,
    goToHome,
    goToSignIn,
  };
};
