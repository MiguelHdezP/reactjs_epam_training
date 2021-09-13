import React, { Component } from "react";
import "./styles/layout.scss";
import Counter from "./components/counter/Counter";
import SearchBar from "./components/search-bar/SearchBar";
import Headings from "./components/headings/Headings";
import Label from "./components/shared/label/Label";
import MultiSelect from "./components/shared/multi-select/MultiSelect";

export default class App extends Component {
  render() {
    return (
      <main className="container">
        <section className="container-section">
          <Headings type={"h1"} text={"Counter"} />
          <Counter />
        </section>
        <section className="container-section">
          <Headings type={"h1"} text={"Search Bar"} />
          <SearchBar />
        </section>
        <section className="container-section">
          <Headings type={"h1"} text={"Genre Toggle"} />
          <div style={{ margin: "10px" }}>
            <Label text={"Genre"} />
            <MultiSelect
              options={[
                "Select Genre",
                "Crime",
                "Documentary",
                "Horror",
                "Comedy",
              ]}
            />
          </div>
        </section>
      </main>
    );
  }
}
