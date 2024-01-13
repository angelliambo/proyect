import { useEffect } from "react";

interface ComponentProps {
  useLocation
}

const Component = ({ useLocation }: ComponentProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default Component;
