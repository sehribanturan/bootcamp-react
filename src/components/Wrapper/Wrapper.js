import React from "react";
import Assistants from "../Assistants/Assistants";
import Students from "../Students/Students";
import style from "./wrapper.module.scss";
import DATA from "../../data/data.json";

const Wrapper = () => {
  const groups = DATA.reduce((result, item) => {
    result[item.group] = [];
    return result;
  }, {});
  return (
    <div className={style.wrapper}>
      {Object.keys(groups).map((group) => (
        <div className={style.wrapper__item} key={group}>
          <div className={style.wrapper__item__title}>
            <span>{group}</span>
          </div>
          <Students data={{ groupName: group, data: DATA }} style={style} />
          <Assistants data={{ groupName: group, data: DATA }} style={style} />
        </div>
      ))}
    </div>
  );
};

export default Wrapper;
