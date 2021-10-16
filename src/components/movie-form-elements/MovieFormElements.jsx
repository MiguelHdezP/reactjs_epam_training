import React from "react";
import "./MovieFormElements.scss";
import Label from "../shared/label/Label";
import InputText from "../shared/inputText/InputText";
import DatePicker from "../shared/buttons/date-picker/DatePicker";
import MultiSelect from "../shared/multi-select/MultiSelect";
import TextArea from "../shared/textarea/TextArea";

export function InputTitle({ styleAdjustments = "" }) {
  return (
    <fieldset className={`inputTitle ${styleAdjustments}`}>
      <Label text="title" forText="title" />
      <InputText
        id="title"
        name="title"
        placeholderText="Movie name"
        classStyle="inputWidth"
      />
    </fieldset>
  );
}

export function InputDate({ styleAdjustments = "" }) {
  return (
    <fieldset className={`inputDate ${styleAdjustments}`}>
      <Label text="Release Date" forText="date" />
      <DatePicker id="date" name="date" />
    </fieldset>
  );
}

export function InputURL({ styleAdjustments = "" }) {
  return (
    <fieldset className={`inputURL ${styleAdjustments}`}>
      <Label text="Movie URL" forText="url" />
      <InputText
        id="url"
        name="url"
        placeholderText="http://"
        classStyle="inputWidth"
      />
    </fieldset>
  );
}

export function InputRating({ styleAdjustments = "" }) {
  return (
    <fieldset className={`inputRating ${styleAdjustments}`}>
      <Label text="Rating" forText="rating" />
      <InputText
        id="rating"
        name="raiting"
        placeholderText="7.8"
        classStyle="inputWidth"
      />
    </fieldset>
  );
}

export function InputGenre({ styleAdjustments = "" }) {
  return (
    <fieldset className={`inputGenre ${styleAdjustments}`}>
      <Label text="genre" forText="multiselect" />
      <MultiSelect options={[]} />
    </fieldset>
  );
}

export function InputMinutes({ styleAdjustments = "" }) {
  return (
    <fieldset className={`inputMinutes ${styleAdjustments}`}>
      <Label text="runtime" forText="minutes" />
      <InputText
        id="minutes"
        name="minutes"
        placeholderText="minutes"
        classStyle="inputWidth"
      />
    </fieldset>
  );
}

export function InputTextarea({ styleAdjustments = "" }) {
  return (
    <fieldset className={`inputTextarea ${styleAdjustments}`}>
      <Label text="overview" forText="overview" />
      <TextArea id="overview" name="overview" rows={8} />
    </fieldset>
  );
}
