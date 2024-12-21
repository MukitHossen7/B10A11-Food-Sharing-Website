import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-r flex items-center justify-center">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-center text-teal-600 mb-6">
            Login to Your Account
          </h2>

          <form className="">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition-all"
            >
              Login
            </button>
          </form>
          <div className="divider text-gray-600 mt-4">Or login with Google</div>

          <div className="text-center mt-4">
            <button className="flex items-center gap-2 justify-center mt-2 py-2 px-4 w-full rounded-lg border-2 border-teal-500 text-teal-500 font-medium hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-700 hover:text-white transition-all">
              <FcGoogle className="text-2xl" /> Login with Google
            </button>
          </div>
          <p className="text-center mt-4 text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-teal-500 font-medium hover:underline"
            >
              Signup here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
