import { useWindowSize } from "../../hooks/useWindowSize";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

export const Header = ({ shouldShow }) => {
  const { width } = useWindowSize();
  const isDesktop = width >= 768;

  if (isDesktop) {
    return <DesktopHeader shouldShow={shouldShow} />;
  }

  return <MobileHeader shouldShow={shouldShow} />;
};
