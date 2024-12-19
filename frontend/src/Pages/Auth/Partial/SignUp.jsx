import useAxiosPublic from "@/Hooks/Fetcher/useAxiosPublic";
import { button } from "@/Utils/Class/button";
import { input } from "@/Utils/Class/input";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaUserAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const SignUp = () => {
  const [term, setTerm] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showPass2, setShowPass2] = useState(false);
  const axiosPublic = useAxiosPublic();
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const name = firstName + " " + lastName;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    const re_password = e.target.re_password.value;

    if(password !== re_password){
      setLoader(false);
      return toast.error('Password not match')
    }

    const info = {name, email, password, phone}
    const res = await axiosPublic.post('/api/create-customer', info);

    if(res.data.status_code === 409) {
      toast.error(res.data.message);
      setLoader(false);
    }
    if(res.data.status_code === 200) {
      toast.success(res.data.message);
      e.target.reset();
      setLoader(false);
    }
  }

  return (
    <div className="bg-color_4/30 px-6 py-8 lg:flex-1">
      <h1 className="uppercase text-xl lg:text-2xl font-semibold text-color_2/50 mb-3">
        create an account
      </h1>
      <hr />
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="">
            <label className="font-semibold">
              First Name
              <span className="text-red-400 ml-1 text-sm">(required)</span>{" "}
            </label>
            <input
              type="text"
              name="firstName"
              className={input.form}
              placeholder="Type Here"
              required
            />
          </div>
          <div className="">
            <label className="font-semibold">
              Last Name
              <span className="text-red-400 ml-1 text-sm">(required)</span>{" "}
            </label>
            <input
              type="text"
              name="lastName"
              className={input.form}
              placeholder="Type Here"
              required
            />
          </div>
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
          <div className="">
            <label className="font-semibold">
              Phone
              <span className="text-red-400 ml-1 text-sm">(required)</span>{" "}
            </label>
            <input
              type="text"
              name="phone"
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
          <div className="relative">
            <label className="font-semibold">
              Re-Type Password
              <span className="text-red-400 ml-1 text-sm">(required)</span>{" "}
            </label>
            <input
              type={showPass2 ? "text" : "password"}
              name="re_password"
              className={input.form}
              placeholder="Type Here"
              required
            />
            <div className="absolute right-2 top-9">
              {showPass2 ? (
                <span>
                  <FaEye
                    onClick={() => setShowPass2(!showPass2)}
                    className="text-gray-400"
                  />
                </span>
              ) : (
                <span>
                  <FaEyeSlash
                    onClick={() => setShowPass2(!showPass2)}
                    className="text-gray-400"
                  />
                </span>
              )}
            </div>
          </div>
        </div>
        <p className="my-3 flex items-center gap-2">
          <input onChange={() => setTerm(!term)} type="checkbox" id="term" />
          <label className="text-gray-600" htmlFor="term">
            I Accept your terms & conditions
          </label>
        </p>
        <button
          disabled={!term || loader}
          type="submit"
          className={`${button.form} ${!term && "cursor-not-allowed"}`}
        >
          {
            loader ? 'loading...' : <> <FaUserAlt className="text-gray-100" />
            Create Account </>
          }
        </button>
      </form>
    </div>
  );
};

export default SignUp;
