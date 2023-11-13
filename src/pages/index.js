import * as loginService from "@/services/auth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginForm from "@/components/LoginForm";
import { login } from "@/redux/actions/auth";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (credentials) => {
    try {
      const user = await loginService.login(credentials);
      dispatch(login(user));
      router.push("/home");
    } catch (error) {
      toast.error(`Login failed as ${error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="sm:w-1/2 md:w-1/2 lg:w-1/3 p-10 mx-auto border border-[#ababab] rounded-lg">
        <div className="text-center">
          <p className="font-TTHovesProTrialDemiBold text-3xl pb-3">My Todos</p>
          <h2 className="font-TTHovesProTrialDemiBold text-darkblue text-sm text-center">
            Already you are registered,
          </h2>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
