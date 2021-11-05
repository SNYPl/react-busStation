import React from "react";
import Stations from "./stations/Stations";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

const StationContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #383333;
`;

const Dashboard = () => {
  const stationData = useSelector((state) => state.dashboardReducer.data);
  const userName = useSelector((state) => state.loginReducer.user.name);

  const dispatch = useDispatch();

  const selectStation = (e) => {
    dispatch({ type: "selectStation", playload: e.target });
  };

  const logoutHandler = () => {
    dispatch({ type: "logout" });
  };

  return (
    <>
      <h2
        style={{
          position: "absolute",
          top: "10%",
          left: "45%",
          color: "#fff",
        }}
      >
        Hello {userName}
      </h2>
      <StationContainer>
        <NavLink
          to="/login"
          style={{
            position: "absolute",
            top: "20%",
            left: "50%",
            color: "#fff",
          }}
          onClick={logoutHandler}
        >
          Logout
        </NavLink>
        {stationData.map((item) => {
          return (
            <Stations
              color={item.color}
              key={item.id}
              clicked={selectStation}
              id={item.id}
              clsName={item.isChecked ? "checked" : null}
              checked={item.isChecked}
            >
              {item.label}
            </Stations>
          );
        })}
      </StationContainer>
    </>
  );
};

export default Dashboard;
