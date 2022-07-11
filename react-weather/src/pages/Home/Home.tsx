import React, { useEffect } from "react";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import ThisDay from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import Days from "./Days/Days";

import s from "./Home.module.scss";
type Props = {};

const Home = (props: Props) => {
  const dispatch = useCustomDispatch();
  const weather = useCustomSelector(
    (state) => state.currentWeatherSliceReducer
  );
  useEffect(() => {
    dispatch(fetchCurrentWeather("paris"));
  }, []);

  return (
    <div className={s.home}>
      <div className={s.wrapper}>
        <ThisDay weather={weather} />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};
export default Home;
