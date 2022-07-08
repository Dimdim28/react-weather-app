import React from "react";
import Select from "react-select";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import s from "./Header.module.scss";
type Props = {};

const Header = (props: Props) => {
  const options = [
    { value: "city-1", label: "Киев" },
    { value: "city-2", label: "Львов" },
    { value: "city-3", label: "Днепр" },
  ];

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: "100",
    }),
  };
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}> React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}>
          <GlobalSvgSelector id="change-theme" />
        </div>
        <Select
          defaultValue={options[0]}
          styles={colorStyles}
          options={options}
        />
      </div>
    </header>
  );
};

export default Header;
