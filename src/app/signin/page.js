"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useState } from "react";

const SignUpPage = () => {
  

  const formSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log();
    const { data, error } = await authClient.signIn.email({
      email, // user email address
      password, // user password -> min 8 characters by default
      callbackURL: "/",
    });
    console.log(data, error);

    if (data) {
      setToggleBtn(true);
    }
  };

  //  Hello#123

  return (
    <Form
      onSubmit={formSubmit}
      className="flex w-96 flex-col gap-4 mx-auto my-15 p-5 border shadow-md rounded-xl"
    >
      <TextField
        isRequired
        name="email"
        type="email"
        validate={(value) => {
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
            return "Please enter a valid email address";
          }
          return null;
        }}
      >
        <Label>Email</Label>
        <Input placeholder="Enter your email" />
        <FieldError />
      </TextField>
      <TextField
        isRequired
        minLength={8}
        name="password"
        type="password"
        validate={(value) => {
          if (value.length < 8) {
            return "Password must be at least 8 characters";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least one uppercase letter";
          }
          if (!/[0-9]/.test(value)) {
            return "Password must contain at least one number";
          }
          return null;
        }}
      >
        <Label>Password</Label>
        <Input placeholder="Enter your password" />
        <Description>
          Must be at least 8 characters with 1 uppercase and 1 number
        </Description>
        <FieldError />
      </TextField>
      <div className="flex justify-center mt-5">
        <Button type="submit">SignIn</Button>
      </div>
    </Form>
  );
};

export default SignUpPage;
