import React from "react";
import "./EditMovieForm.scss";
import ModalContainer from "../shared/modal-container/ModalContainer";
import Headings from "../shared/headings/Headings";
import ActionButton from "../shared/buttons/action-button/ActionButton";
import CloseButton from "../shared/buttons/close-button/CloseButton";
import {
  InputTitle,
  InputDate,
  InputURL,
  InputRating,
  InputGenre,
  InputMinutes,
  InputTextarea,
} from "../movie-form-elements/MovieFormElements";

export default function EditMovieForm({ click }) {
  return (
    <ModalContainer>
      <>
        <CloseButton click={click} styleAdjustment="addMovie-closeButton" />
        <Headings
          type="h1"
          text="Edit Movie"
          styleAdjustment="addMovie-heading"
        />
        <form className="addMovie-form">
          <InputTitle />
          <InputDate />
          <InputURL />
          <InputRating />
          <InputGenre />
          <InputMinutes />
          <InputTextarea styleAdjustments="addMovie-fieldset-textarea" />
          <fieldset className="addMovie-actionButtons">
            <ActionButton
              text="Reset"
              click={() => {}}
              styleAdjustments="addMovie-resetButton"
            />
            <ActionButton text="submit" click={() => {}} />
          </fieldset>
        </form>
      </>
    </ModalContainer>
  );
}
