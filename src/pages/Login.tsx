import LoginForm from "@/components/ui/LoginForm";
import CirclesBg from "@/components/icons/CirclesBg";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center bg-login-gradient text-white p-8 relative overflow-hidden">
        <div className="text-start relative z-10">
          <h1 className="text-5xl font-bold mb-4">GoFinance</h1>
          <p className="text-xl mb-6">
            The most popular peer to peer lending at SEA
          </p>
          <button className="btn-primary">Read More</button>
        </div>
        <div className="absolute bottom-0 left-0 opacity-10 text-[#0575E6]">
          <CirclesBg />
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex items-center justify-center bg-white">
        <div className="max-w-md w-full p-8">
          <h2 className="text-2xl font-bold mb-2">Hello Again!</h2>
          <p className="mb-8">Welcome Back</p>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
