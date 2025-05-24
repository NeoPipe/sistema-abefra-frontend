import type { JSX } from "react";
import NavigationBar from "../../molecules/NavigationBar";
import MainPageTemplate from "./MainPageTemplate.style";

interface MainPageTemplateComponentInterface {
  children?: JSX.Element | JSX.Element[];
  pageName: string;
}

const MainPageTemplateComponent = ({
  children,
  pageName,
}: MainPageTemplateComponentInterface) => {
  return (
    <MainPageTemplate>
      <NavigationBar title={pageName} />
      {children}
    </MainPageTemplate>
  );
};

export default MainPageTemplateComponent;
