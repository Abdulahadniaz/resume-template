import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface LayoutProps {
  pageTitle: string;
  children?: ReactNode;
}
const Layout = (props: LayoutProps) => {
  const { pageTitle, children } = props;
  return (
    <>
      <Box as="main">{children}</Box>
    </>
  );
};
export default Layout;
