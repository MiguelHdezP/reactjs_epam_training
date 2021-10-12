import React from "react";
import "./DeleteMovieForm.scss";
import ModalContainer from "../shared/modal-container/ModalContainer";
import Headings from "../shared/headings/Headings";
import ActionButton from "../shared/buttons/action-button/ActionButton";
import CloseButton from "../shared/buttons/close-button/CloseButton";

export default function DeleteMovieForm({ click }) {
  return (
    <ModalContainer>
      <>
        <CloseButton click={click} styleAdjustment="addMovie-closeButton" />
        <Headings
          type="h1"
          text="Delete Movie"
          styleAdjustment="addMovie-heading"
        />
        <p>Are you sure you want to delete this movie?</p>
        <form className="addMovie-form">
          <fieldset className="addMovie-actionButtons">
            <ActionButton text="Confirm" click={() => {}} />
          </fieldset>
        </form>
      </>
    </ModalContainer>
  );
}
