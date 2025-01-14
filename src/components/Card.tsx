import React, { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

const Card = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  const { theme } = useContext(DarkModeContext);
  return (
    <div className={`card card--${theme}`}>
      <div className="card__header">{title}</div>
      <div className="card__body">
        <div className="courses">{children}</div>
      </div>
    </div>
  );
};

export default Card;
