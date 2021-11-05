import React from "react";

import styled from "styled-components";

const DefaultInput = styled.input`
  width: 100%;
  margin-bottom: 25px;
  padding: 16px 90px 17px 48px;
  border-radius: 32px;
  border: solid 1px #2b55df;
  background-color: #fff;
  margin-top: 5px;
`;

const Input = (props) => {
  return (
    <>
      <label htmlFor={props.id}>{props.children}</label>
      <DefaultInput id={props.id} type={props.type} onChange={props.onChange} />
    </>
  );
};

export default Input;
