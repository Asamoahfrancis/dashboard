"use client";
import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },

    onSubmit: async (values) => {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          username: values.username,
          password: values.password,
        }),
      });
      if (response?.ok) {
        router.push("/");
        router.refresh();
      }
      console.log("response from signout", { response });

      formik.resetForm();
    },
  });

  return (
    <div className="bg-gradient-to-r md:grid    place-items-center  from-violet-500 to-fuchsia-500 w-full min-h-screen">
      <form
        onSubmit={formik.handleSubmit}
        action=""
        className="m-4 mt-0 translate-y-20 md:translate-y-0  bg-white md:m-10 md:py-10 rounded-md shadow-lg "
      >
        <div className="grid place-items-center">
          <Link
            href="/"
            className="text-4xl text-center  text-[#7572d8] font-bold"
          >
            Sneat
          </Link>
        </div>

        <div className=" md:p-6 p-2">
          <section>
            <h1 className="text-center text-base text-[#896880] py-6 md:py-0">
              Sign Up
            </h1>
          </section>
          <section>
            <div className="md:p-4 flex justify-center md:flex-none py-3">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter username "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                className="border md:px-6 py-3 text-[#896880] text-center rounded-lg md:py-3  shadow-md"
              />
            </div>
            <div className="md:p-4  flex justify-center md:flex-none py-3">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password "
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="border md:px-6 py-3 text-center rounded-lg md:py-3 shadow-md"
              />
            </div>
            <div className="grid place-items-center py-6">
              <button
                type="submit"
                className=" shadow-[4px_5px_20px_10px_rgb(189,89,213,0.2)] rounded-full bg-[rgb(189,89,213)] text-white px-10 py-2"
              >
                SIGN UP
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
            <Link
              href="/signin"
              className="rounded-full hover:shadow-[4px_5px_20px_10px_rgb(189,89,213,0.2)]  hover:bg-[#bd59d5] text-[#bd59d5] hover:text-white px-10 py-2"
            >
              Sign In
            </Link>{" "}
          </section>
        </div>
      </form>
    </div>
  );
};

export default Login;
