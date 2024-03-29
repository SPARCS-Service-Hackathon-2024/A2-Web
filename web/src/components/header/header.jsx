import React, { useState } from "react";
import styled from "styled-components";
import { FaMapMarker } from "react-icons/fa";
import profileIcon from "../icons/profile.png";
import { FaSearch } from "react-icons/fa";
import { HiOutlineBellAlert } from "react-icons/hi2";
import NavigationBar from "../navigation/NavigationBar";
import MediaQuery from "react-responsive";
const Header = () => {
  const [currentValue, setCurrentValue] = useState("우리아이소아과");

  if (localStorage.getItem("hospital") !== null) {
    setCurrentValue(localStorage.getItem("hospital"));
  }

  const map_index = [
    "우리아이소아과",
    "조이소아과",
    "한밭에소아청소년과의원",
    "바른소아청소년과의원",
    "탄방엠블병원",
  ];
  const handleChange = (event) => {
    setCurrentValue(event.target.value);
  };

  return (
    <div>
      {/* 아이폰 화면 크기에 맞는 스타일 */}
      <div style={{ display: "flex" }}>
        <avatar style={{ position: "relative", top: "17px", left: "10px" }}>
          <img src={profileIcon} alt="Profile Icon" />
        </avatar>
        <select
          onChange={handleChange}
          style={{
            border: "none",
            outline: "none",
            position: "absolute",
            top: "70%",
            left: "13%",
            fontSize: "15px",
            fontFamily: "Pretendard-Bold",
          }}
          value={currentValue}
        >
          <option value={map_index[0]}>{map_index[0]}</option>
          <option value={map_index[1]}>{map_index[1]}</option>
          <option value={map_index[2]}>{map_index[2]}</option>
          <option value={map_index[3]}>{map_index[3]}</option>
          <option value={map_index[4]}>{map_index[4]}</option>
        </select>
        <search style={{ position: "absolute", top: "50%", right: "13%" }}>
          <button
            style={{
              background: "white",
              border: "white",
              margin: "0px",
            }}
          >
            <FaSearch size={25} color="FF772A" />
          </button>
        </search>
        <alert
          style={{
            position: "absolute",
            top: "50%",
            right: "5%",
          }}
        >
          <button
            style={{
              background: "white",
              border: "white",
              margin: "0px",
            }}
          >
            <HiOutlineBellAlert size={25} color="FF772A" />
          </button>
        </alert>
      </div>
    </div>
  );
};

export default Header;
