import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
    fetch("https://test.nexisltd.com/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        localStorage.setItem("ultimateAccesstoken", result.access_token);
        localStorage.setItem("ultimateRefressToken", result.refresh_token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1 className="text-2xl text-center my-6">Login</h1>

      <div>
        <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col ">
          <div>
            <input
              className="input input-bordered w-full max-w-x my-3"
              type="email"
              name="email"
              id=""
              placeholder="Write Your Email"
              {...register("email", {
                required: "Please Enter Email",
              })}
            />
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
          </div>
          <div>
            <input
              className="input input-bordered w-full max-w-x my-3"
              type="password"
              name="password"
              id=""
              placeholder="Write Password"
              {...register("password", {
                required: "Please Enter Password",
                minLength: {
                  value: 8,
                  message: "Password should at least 8 characters",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-600">{errors.password.message}</span>
            )}
          </div>
          <input
            className="btn btn-primary my-3"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <p>
        Already Have an Account ?{" "}
        <Link className="text-info" to="/register/signup">
          Please Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
