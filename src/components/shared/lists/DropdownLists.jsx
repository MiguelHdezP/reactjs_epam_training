import React from "react";
import "./DropDownLists.scss"

export default function Lists({ lists = [] }) {
  return (
    <ul className="dropdown-menu">
      {lists.map((elem, index) => (
        <li className="dropdown-menu-list" key={elem + index}>
          <input type="checkbox" />
          <label htmlFor="">{elem}</label>
        </li>
      ))}
    </ul>
  );
}
