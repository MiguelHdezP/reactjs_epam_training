import React from "react";
import "./MultiSelect.scss";
import Button from "../buttons/simple-button/Button";
import DropdownLists from "../lists/DropdownLists";

export default function MultiSelect({ options }) {
  return (
    <div className="dropdown" id="valueItemDrop">
      <Button text="Select Genre" classStyle={"multi-select-style"} />
      <DropdownLists lists={options} />
    </div>
  );
}
