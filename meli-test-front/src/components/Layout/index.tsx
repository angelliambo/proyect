import { Outlet } from "react-router-dom";

interface ComponentProps { }

const Component = ({ }: ComponentProps) => {
  return (
    <Outlet />
  );
};

export default Component;
