import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [spinner, setSpinner] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    setSpinner(true);
    //console.log(data);
    setError("");
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
        //console.log(result);
        if (result.access_token) {
          toast.success("Login Sucessfully");
          localStorage.setItem("ultimateAccesstoken", result.access_token);
          localStorage.setItem("ultimateRefressToken", result.refresh_token);
          setSpinner(false);
          navigate("/");
        } else {
          setSpinner(false);
          setError(result.error);
        }
      })
      .catch((err) => {
        //console.log(err);
      });
  };
  return (
    <div>
      {spinner && <Spinner></Spinner>}
      <h1 className="text-4xl text-center my-6 font-bold text-primary">
        Please Login
      </h1>

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
          {error && <p className="text-red-500">{error}</p>}
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
