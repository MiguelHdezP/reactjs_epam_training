import React from "react";
import "./MultiSelect.scss";
import ActionButton from "../buttons/action-button/ActionButton";
import DropdownLists from "../lists/DropdownLists";

export default function MultiSelect({ options }) {
  return (
    <div className="multiselect-dropdown" id="valueItemDrop">
      <ActionButton text="Select Genre" classStyle={"multi-select-style"} />
      <DropdownLists lists={options} />
    </div>
  );
}
