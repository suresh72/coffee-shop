import React from "react";
import { Link } from "react-router-dom";

interface ReadMoreButtonProps {
  link: string;
}

export const ReadMoreButton = ({ link }: ReadMoreButtonProps) => {
  return (
    <div className="flex">
      <Link to={link} className="menu__btn-readmore button">
        Read More
      </Link>
    </div>
  );
};
