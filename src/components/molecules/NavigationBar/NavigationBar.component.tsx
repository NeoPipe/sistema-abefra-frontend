import { colors } from "../../../assets/styles/variables";
import Typography from "../../atoms/Typography";
import NavigationBar, { ColWrapper } from "./NavigationBar.style";

interface NavigationBarComponentInterface {
  title: string;
}

const NavigationBarComponent = ({ title }: NavigationBarComponentInterface) => {
  return (
    <NavigationBar>
      <ColWrapper md={4}></ColWrapper>
      <ColWrapper md={4} $centralized>
        <Typography color={colors.white}>{title}</Typography>
      </ColWrapper>
      <ColWrapper md={4}></ColWrapper>
    </NavigationBar>
  );
};

export default NavigationBarComponent;
