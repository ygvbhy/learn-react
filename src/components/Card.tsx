import React from "react";

const Card = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="card">
      <div className="card__header">{title}</div>
      <div className="card__body">
        <div className="courses">{children}</div>
      </div>
    </div>
  );
};

export default Card;
