import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "api";
import { APP_TOKEN } from "utils/constants";
import { UserType } from "types";
import CustomButton from "components/CustomButton";

type Props = {
  setUser: (user: UserType) => void;
};

export default function SignInContainer({ setUser }: Props) {
  const { enqueueSnackbar } = useSnackbar();

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await loginWithGoogle();

      const token = await response?.user?.getIdToken(true);

      localStorage.setItem(APP_TOKEN, token);

      setUser({
        displayName: response?.user?.displayName,
        picture: response?.user?.photoURL,
        email: response?.user?.email,
      });

      navigate("/dashboard");
    } catch (error: any) {
      enqueueSnackbar(error?.message, { variant: "error" });
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <CustomButton
        label="Sign in with Google"
        variant="primary"
        onClick={handleLogin}
      />
    </div>
  );
}
