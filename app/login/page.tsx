import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  return (
    <div className="bg-gradient-to-r grid   place-items-center  from-violet-500 to-fuchsia-500 w-full min-h-screen">
      <form action="" className=" bg-white m-10 py-10 rounded-md shadow-lg">
        <div className=" p-6">
          <section>
            <h1 className="text-center text-4xl text-[#896880]">Sign In</h1>
          </section>
          <section>
            <div className="p-4">
              <input
                type="text"
                name=""
                id=""
                placeholder="username or email"
                className="border px-6 rounded-lg py-3 text-[#896880] shadow-md"
              />
            </div>
            <div className="p-4">
              <input
                type="password"
                name=""
                id=""
                placeholder="password "
                className="border px-6 rounded-lg py-3 shadow-md"
              />
            </div>
            <div className="grid place-items-center py-6">
              <button className="shadow-lg rounded-full bg-[#bd59d5] text-white px-10 py-2">
                SIGN IN
              </button>
            </div>
            <p className="text-center p-4">or login with</p>
            <div className="grid place-items-center">
              <section className="flex gap-4 p-4">
                <button className="border rounded-full p-3">
                  <FaFacebookF size="1.5em" />
                </button>
                <button className="border rounded-full p-3">
                  <FcGoogle size="1.5em" />
                </button>
              </section>
            </div>
          </section>
          <section className="grid place-items-center">
            <button className="shadow-lg rounded-full border hover:bg-[#bd59d5] text-[#bd59d5] hover:text-white px-10 py-2">
              Sign up
            </button>{" "}
          </section>
        </div>
      </form>
    </div>
  );
};

export default Login;
