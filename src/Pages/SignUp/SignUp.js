import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const SignUp = () => {
  const [error, setError] = useState("");
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSignUp = (data) => {
    //console.log(data);
    setSpinner(true);
    setError("");
    fetch("https://test.nexisltd.com/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        first_name: data.firstName,
        last_Name: data.lastName,
        phone_number: data.mobile,
        email: data.email,
        password: data.password,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        setSpinner(false);
        //console.log(result);
        if (result.sucess) {
          setError("");
          navigate("/register/login");
        } else {
          setError(result.error);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      {spinner && <Spinner></Spinner>}
      <h1 className="text-4xl text-center my-6 font-bold text-primary">
        SignUp
      </h1>

      <div>
        <form onSubmit={handleSubmit(handleSignUp)} className="flex flex-col ">
          <div>
            <input
              type="text"
              name="firstName"
              id=""
              placeholder="Write First name"
              className="input input-bordered w-full max-w-x my-3"
              {...register("firstName", {
                required: "Please Enter Fisrt Name",
              })}
            />
            {errors.firstName && (
              <span className="text-red-600">{errors.firstName.message}</span>
            )}
          </div>
          <div>
            <input
              className="input input-bordered w-full max-w-x my-3"
              type="text"
              name="lastName"
              id=""
              placeholder="Write Last name"
              {...register("lastName", {
                required: "Please Enter Last Name",
              })}
            />
            {errors.lastName && (
              <span className="text-red-600">{errors.lastName.message}</span>
            )}
          </div>
          <div>
            <input
              className="input input-bordered w-full max-w-x my-3"
              type="text"
              name="mobile"
              id=""
              placeholder="Write Your Mobile Number"
              {...register("mobile", {
                required: "Please Enter Mobile Number",
              })}
            />
            {errors.mobile && (
              <span className="text-red-600">{errors.mobile.message}</span>
            )}
          </div>
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
        <Link className="text-info" to="/register/login">
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
