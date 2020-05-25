import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm"


function NewKegForm(props) {
    return(
        <React.Fragment>
            <ReusableForm
                formSubmissionHandler={handleNewKegFormSubmission}
                buttonText="Add new keg"/>
        </React.Fragment>
    );
    
    function handleNewKegFormSubmission(event) {
        event.preventDefault();
        props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcohol: event.target.alcohol.value, id: v4()});
    }
}

NewKegForm.propTypes = {
    onNewKegCreation: PropTypes.func
};

export default NewKegForm;