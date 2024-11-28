import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSnackbar } from "notistack";

// layouts
import DefaultLayout from "layouts/default";

// containers

// auth
import SignInContainer from "containers/auth/signin";

// dashboard
import DashboardContainer from "containers/dashboard";

// components
import Loader from "components/Loader";
import PageNotFound from "components/PageNotFound";
import ProtectedRoute from "components/ProtectedRoute";

// utils
import { useMergeState } from "utils/custom-hooks";

// constants
import { APP_TOKEN } from "utils/constants";

// api
import { logout, verifyUser } from "api";
import { UserType } from "types";

type StateType = {
  isLoggedIn: boolean;
  user: UserType;
};

export default function RoutesContainer() {
  const { enqueueSnackbar } = useSnackbar();

  const [state, setState] = useMergeState<StateType>({
    isLoggedIn: false,
    user: {
      displayName: "",
      picture: "",
      email: "",
    },
  });

  const isAppLoading = localStorage.getItem(APP_TOKEN) && !state?.isLoggedIn;

  const setUser = (user: UserType) => {
    setState({ isLoggedIn: true, user });
  };

  const onLogout = async () => {
    try {
      await logout();

      localStorage.removeItem(APP_TOKEN);

      setState({
        isLoggedIn: false,
        user: {
          displayName: "",
          picture: "",
          email: "",
        },
      });
    } catch (error) {
      enqueueSnackbar("Failed to logout.", { variant: "error" });
    }

    window.location.href = "/";
  };

  const init = async () => {
    try {
      if (!localStorage.getItem(APP_TOKEN)) {
        return;
      }

      const response = await verifyUser();

      setUser({
        displayName: response?.data?.displayName,
        picture: response?.data?.picture,
        email: response?.data?.email,
      });
    } catch (error: any) {
      localStorage.removeItem(APP_TOKEN);
      window.location.href = "/";
      enqueueSnackbar("Please sign in to continue...", { variant: "error" });
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div>
      {isAppLoading ? (
        <div className="w-full h-screen flex justify-center mt-10">
          <Loader loading={isAppLoading} />
        </div>
      ) : (
        <Routes>
          <Route
            path="signin"
            element={<SignInContainer setUser={setUser} />}
          />

          <Route
            path="/"
            element={<ProtectedRoute isLoggedIn={state?.isLoggedIn} />}
          >
            <Route
              element={<DefaultLayout user={state?.user} onLogout={onLogout} />}
            >
              <Route path="dashboard" element={<DashboardContainer />} />
            </Route>

            <Route
              path="/"
              element={
                <Navigate to={state?.isLoggedIn ? "/dashboard" : "/signin"} />
              }
            />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}
    </div>
  );
}
