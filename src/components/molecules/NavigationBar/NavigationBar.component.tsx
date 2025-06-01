import { useLocation } from "react-router-dom";
import { colors } from "../../../assets/styles/variables";
import { useNavigation } from "../../../shared/useNavigation";
import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";
import NavigationBar, { ColWrapper } from "./NavigationBar.style";

interface NavigationBarComponentInterface {
  title: string;
}

const NavigationBarComponent = ({ title }: NavigationBarComponentInterface) => {
  const { goBack } = useNavigation();

  const path = useLocation().pathname;
  console.log(path);

  const backwardArrow = `<-`;

  return (
    <NavigationBar>
      <ColWrapper xs={4} md={4}>
        <Button hideButton={path == "/"} onClick={() => goBack()}>
          {backwardArrow}
        </Button>
      </ColWrapper>
      <ColWrapper xs={4} md={4} $centralized>
        <Typography color={colors.white} as="h2">
          {title}
        </Typography>
      </ColWrapper>
      <ColWrapper xs={4} md={4}></ColWrapper>
    </NavigationBar>
  );
};

export default NavigationBarComponent;
