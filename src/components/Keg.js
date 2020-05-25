import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
    return (
        <React.Fragment>
            <div onClick = {() => props.whenKegClicked(props.id)}>
                <h2>{props.name}</h2>
                <h3>{props.brand}</h3>
                <h3>{props.price}</h3>
                <h3>{props.alcohol}</h3>
                <hr/>
            </div>
        </React.Fragment>
    );
}

Keg.propTypes = {
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.string,
    alcohol: PropTypes.string,
    id: PropTypes.string,
    whenKegClicked: PropTypes.func
}

export default Keg;