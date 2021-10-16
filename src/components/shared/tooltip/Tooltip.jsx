import Proptypes from "prop-types";
import React from "react";
import "./Tooltip.scss";
import CloseButton from "../buttons/close-button/CloseButton";

export default function Tooltip({
  text1 = "",
  text2 = "",
  closeTooltip,
  toggleModalEdit,
  toggleModalDelete,
}) {
  return (
    <ul className="tooltip">
      <li className="tooltip-option">
        <CloseButton click={closeTooltip} />
      </li>
      <li className="tooltip-option">
        <button className="tooltip-option-button" onClick={toggleModalEdit}>
          {text1}
        </button>
      </li>
      <li className="tooltip-option">
        <button className="tooltip-option-button" onClick={toggleModalDelete}>
          {text2}
        </button>
      </li>
    </ul>
  );
}

Tooltip.propTypes = {
  text1: Proptypes.string,
  text2: Proptypes.string,
  click: Proptypes.func,
  toggleModalEdit: Proptypes.func,
  toggleModalDelete: Proptypes.func,
};
