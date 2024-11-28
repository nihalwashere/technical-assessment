import { Outlet } from "react-router-dom";
import Nav from "components/Nav";
import { UserType } from "types";

type Props = {
  user: UserType;
  onLogout: () => void;
};

export default function DefaultLayout({ user, onLogout }: Props) {
  return (
    <div className="flex">
      {/* hiding nav bar on mobile */}
      <div className="hidden md:block">
        <Nav user={user} onLogout={onLogout} />
      </div>

      <div className="w-full min-h-screen sm:h-screen overflow-y-scroll overflow-x-scroll">
        <Outlet />
      </div>
    </div>
  );
}
