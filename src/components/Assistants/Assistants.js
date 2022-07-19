import React from "react";

const Assistant = (props) => {
  const style = props.style;
  const data = props.data.data;
  const groupName = props.data.groupName;

  return (
    <div className={style.wrapper__item__assistant}>
      {data
        .filter((student) => student.group === groupName && student.assistant)
        .map((student) => (
          <ol>
            <li>{student.id}</li>
            <li>{student.name}</li>
            <li>{String(student.assistant)}</li>
            <li>{student.group}</li>
          </ol>
        ))}
    </div>
  );
};

export default Assistant;
