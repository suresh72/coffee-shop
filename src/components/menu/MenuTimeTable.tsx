import React from "react";
import "../../styles/menutimetable.css";

export const MenuTimeTable = () => {
  return (
    <div className="menutimetable">
      <span className="menutimetable__btn-find">Find Your Time ☕</span>

      <ul className="menutimetable__lists">
        <li className="menutimetable__item flex">
          <span className="open-day"> Sunday</span>
          <span className="open-time">Closed</span>
        </li>
        <li className="menutimetable__item flex">
          <span className="open-day"> Monday</span>
          <span className="open-time">7.00am - 3.00pm</span>
        </li>
        <li className="menutimetable__item flex">
          <span className="open-day"> Tuesday</span>
          <span className="open-time">7.00am - 3.00pm</span>
        </li>
        <li className="menutimetable__item flex">
          <span className="open-day"> Wednesday</span>
          <span className="open-time">7.00am - 3.00pm</span>
        </li>
        <li className="menutimetable__item flex">
          <span className="open-day"> Thursday</span>
          <span className="open-time">7.00am - 3.00pm</span>
        </li>
        <li className="menutimetable__item flex">
          <span className="open-day"> Friday</span>
          <span className="open-time">7.00am - 3.00pm</span>
        </li>
        <li className="menutimetable__item flex">
          <span className="open-day"> Saturday</span>
          <span className="open-time">9.00am - 2.00pm</span>
        </li>
      </ul>
    </div>
  );
};
