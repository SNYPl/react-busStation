import React from "react";
import styled from "styled-components";
import Input from "../input/Input";
import Button from "../button/Button";

import { useDispatch, useSelector } from "react-redux";

const LoginWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  const dispatch = useDispatch();

  const clickbtn = (e) => {
    e.preventDefault();
    dispatch({ type: "loginHandler" });
  };

  const inputNameHandler = (e) => {
    dispatch({ type: "inputName", value: e.target.value });
  };

  const inputPasswordHandler = (e) => {
    dispatch({ type: "inputPassword", value: e.target.value });
  };

  return (
    <LoginWrapper>
      <LoginForm>
        <Input id="user" type="text" onChange={inputNameHandler}>
          Username
        </Input>
        <Input id="password" type="password" onChange={inputPasswordHandler}>
          Password
        </Input>
        <Button id="loginBtn" clicked={clickbtn}>
          Login
        </Button>
      </LoginForm>
    </LoginWrapper>
  );
};

export default Login;
