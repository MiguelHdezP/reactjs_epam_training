import React from "react";
import "./MultiSelect.scss";
import SimpleButton from "../buttons/simple-button/SimpleButton"
import DropdownLists from "../lists/DropdownLists";

export default function MultiSelect({ options }) {
  return (
    <div className="multiselect-dropdown" id="valueItemDrop">
      <SimpleButton text="Select Genre" classStyle={"multi-select-style"} />
      <DropdownLists lists={options} />
    </div>
  );
}
