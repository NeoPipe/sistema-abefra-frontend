import Typography from "./Typography.style";

interface TypographyComponentInterface
  extends React.ComponentPropsWithRef<typeof Typography> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fullCentralized?: boolean;
  marginBottom?: string;
}

const TypographyComponent: React.FC<TypographyComponentInterface> = ({
  children,
  as = "h1",
  color,
  fullCentralized,
  marginBottom,
  ...rest
}: TypographyComponentInterface) => {
  return (
    <Typography
      as={as}
      $color={color}
      $fullCentralized={fullCentralized}
      $marginBottom={marginBottom}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default TypographyComponent;
