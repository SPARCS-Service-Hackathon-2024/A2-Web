import React, { useState } from "react";
import styled from "styled-components";
import { FaMapMarker } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { HiOutlineBellAlert } from "react-icons/hi2";
import MediaQuery from "react-responsive";
const Header = () => {
  const [currentValue, setCurrentValue] = useState("대전광역시 동구");

  const map_index = [
    "대전광역시 서구",
    "대전광역시 중구",
    "대전광역시 유성구",
    "대전광역시 동구",
    "대전광역시 대덕구",
  ];
  const handleChange = (event) => {
    setCurrentValue(event.target.value);
  };

  return (
    <div>
      <MediaQuery maxWidth={430}>
        {/* 아이폰 화면 크기에 맞는 스타일 */}
        <div style={{ display: "flex" }}>
          <avatar style={{ position: "relative", top: "15px", left: "10px" }}>
            <FaMapMarker size={30} color="FF772A" />
          </avatar>
          <select
            onChange={handleChange}
            style={{
              border: "none",
              outline: "none",
              position: "relative",
              top: "15px",
              left: "10px",
              fontSize: "15px",
              fontFamily: "Pretendard",
            }}
            value={currentValue}
          >
            <option value={map_index[0]}>{map_index[0]}</option>
            <option value={map_index[1]}>{map_index[1]}</option>
            <option value={map_index[2]}>{map_index[2]}</option>
            <option value={map_index[3]}>{map_index[3]}</option>
            <option value={map_index[4]}>{map_index[4]}</option>
          </select>
          <search style={{ position: "absolute", top: "15px", right: "45px" }}>
            <FaSearch size={30} color="FF772A" />
          </search>
          <alert
            style={{
              position: "absolute",
              top: "15px",
              right: "10px",
            }}
          >
            <HiOutlineBellAlert size={30} color="FF772A" />
          </alert>
        </div>
      </MediaQuery>
      <MediaQuery minWidth={431}>
        {/* 아이폰 화면 크기보다 큰 화면에 대한 스타일 */}
        <div style={{ display: "flex" }}>
          <avatar style={{ position: "relative", top: "15px", left: "230px" }}>
            <FaMapMarker size={15} color="FF772A" />
          </avatar>
          <select
            onChange={handleChange}
            style={{
              border: "none",
              outline: "none",
              position: "relative",
              top: "15px",
              left: "230px",
              fontSize: "8px",
              fontFamily: "Pretendard",
            }}
            value={currentValue}
          >
            <option value={map_index[0]}>{map_index[0]}</option>
            <option value={map_index[1]}>{map_index[1]}</option>
            <option value={map_index[2]}>{map_index[2]}</option>
            <option value={map_index[3]}>{map_index[3]}</option>
            <option value={map_index[4]}>{map_index[4]}</option>
          </select>
          <search style={{ position: "relative", top: "15px", left: "280px" }}>
            <FaSearch size={15} color="FF772A" />
          </search>
          <alert style={{ position: "relative", top: "15px", left: "285px" }}>
            <HiOutlineBellAlert size={15} color="FF772A" />
          </alert>
        </div>
      </MediaQuery>
    </div>
  );
};

export default Header;
