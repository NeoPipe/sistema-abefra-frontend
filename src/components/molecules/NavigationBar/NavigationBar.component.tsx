import { useLocation } from "react-router-dom";
import { colors, sizes } from "../../../assets/styles/variables";
import { useNavigation } from "../../../shared/useNavigation";
import Typography from "../../atoms/Typography";
import NavigationBar, { IconWrapper } from "./NavigationBar.style";
import { FaArrowLeft } from "react-icons/fa";

interface NavigationBarComponentInterface {
  title: string;
}

const NavigationBarComponent = ({ title }: NavigationBarComponentInterface) => {
  const { goBack } = useNavigation();

  const path = useLocation().pathname;
  console.log(path);

  return (
    <NavigationBar>
      <IconWrapper>
        <FaArrowLeft
          style={{ color: colors.white, fontSize: sizes.size24 }}
          onClick={() => goBack()}
        />
      </IconWrapper>
      <Typography color={colors.white} as="h2">
        {title}
      </Typography>
    </NavigationBar>
  );
};

export default NavigationBarComponent;
