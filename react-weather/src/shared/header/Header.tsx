import Select from "react-select";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { Theme } from "../../context/ThemeContext";
import { useTheme } from "../../hooks/useTheme";
import s from "./Header.module.scss";
type Props = {};

const Header = (props: Props) => {
  const theme = useTheme();

  const options = [
    { value: "city-1", label: "Киев" },
    { value: "city-2", label: "Львов" },
    { value: "city-3", label: "Днепр" },
  ];

  const back =
    theme.theme === Theme.DARK ? "#4F4F4F" : "rgba(71, 147, 255, 0.2)";

  const colorStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: back,
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: "100",
    }),
    option: (styles: any) => {
      return {
        ...styles,
        backgroundColor: back,
        ":active": {
          ...styles[":active"],
          backgroundColor: "#4793ff",
        },
      };
    },

    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? "#fff" : "#000",
    }),
  };

  function changeTheme() {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}> React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
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
