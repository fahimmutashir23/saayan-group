import useUser from "@/Hooks/Apis/Users/useUser";
import useAxiosPublic from "@/Hooks/Fetcher/useAxiosPublic";
import { button } from "@/Utils/Class/button";
import { input } from "@/Utils/Class/input";
import LoaderBtn from "@/Utils/Loader/LoaderBtn";
import { setToken } from "@/Utils/SetToken/setToken";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaLockOpen } from "react-icons/fa";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  const axiosPublic = useAxiosPublic();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const [, , userFetch] = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const email = e.target.email.value;
    const password = e.target.password.value;

    const info = {email, password}
    
    const res = await axiosPublic.post('/api/customer-auth', info);
    if(res.data.status_code === 409) {
      toast.error(res.data.message);
      setLoader(false);
    }
    if(res.data.status_code === 200) {
      setToken(res.data.token);
      toast.success(res.data.message);
      e.target.reset();
      userFetch();
      setLoader(false);
      navigate('/account')
    }
  }

  return (
    <div className="bg-color_4/30 px-6 py-8 lg:flex-1">
      <h1 className="uppercase text-xl lg:text-2xl font-semibold text-color_2/50 mb-3">
        already registered
      </h1>
      <hr />
      <form onSubmit={handleSubmit} className="mt-3 space-y-4 w-2/3">
        <div className="">
          <label className="font-semibold">
            Email
            <span className="text-red-400 ml-1 text-sm">(required)</span>{" "}
          </label>
          <input
            type="email"
            name="email"
            className={input.form}
            placeholder="Type Here"
            required
          />
        </div>
        <div className="relative">
          <label className="font-semibold">
            Password
            <span className="text-red-400 ml-1 text-sm">(required)</span>{" "}
          </label>
          <input
            type={showPass ? "text" : "password"}
            name="password"
            className={input.form}
            placeholder="Type Here"
            required
          />
          <div className="absolute right-2 top-9">
              {showPass ? (
                <span>
                  <FaEye
                    onClick={() => setShowPass(!showPass)}
                    className="text-gray-400"
                  />
                </span>
              ) : (
                <span>
                  <FaEyeSlash
                    onClick={() => setShowPass(!showPass)}
                    className="text-gray-400"
                  />
                </span>
              )}
            </div>
        </div>
        <button type="submit" className={button.form}>
          <FaLockOpen className="text-gray-100" />
          {loader ? <LoaderBtn /> :'Login'}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
