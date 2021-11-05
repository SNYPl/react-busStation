import React from "react";
import styled from "styled-components";

const Stations = styled.div`
  width: 60px;
  height: 60px;
  background-color:${(props) => props.color}};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  margin:0 8px;
  text-align:center;
  cursor:pointer;
  transition: all 0.3s linear;
  

  &:hover {
      transform:scale(1.2);
  }

  &.checked {
      transform:scale(1.5);
      background-color:#fff;
      color:#000;
  }
`;

const Station = (props) => {
  return (
    <>
      <Stations
        color={props.color}
        onClick={props.clicked}
        id={props.id}
        className={props.clsName}
        checked={props.checked}
      >
        {props.children}
      </Stations>
    </>
  );
};

export default Station;
