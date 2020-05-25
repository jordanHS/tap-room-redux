import { connect } from 'react-redux';
import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from"./KegDetail";
import PropTypes from "prop-types";
import * as a from './../actions';

class KegControl extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            masterKegList: [],
            selectedKeg: null,
            editing: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = () => {
        if (this.state.selectedKeg != null) {
          this.setState({
            formVisibleOnPage: false,
            selectedKeg: null
          });
        } else {
          const { dispatch } = this.props;
          const action = a.toggleForm();

          dispatch(action);
        }
      }
    
    handleAddingNewKegToList = (newKeg) => {
      const { dispatch } = this.props;
      const action = a.addKeg(newKeg)
      dispatch(action);
      const action2 = a.toggleForm();
      dispatch(action2);
    }

    handleChangingSelectedKeg = (id) => {
       const selectedKeg = this.props.masterKegList[id];
       this.setState({selectedKeg: selectedKeg});
    }

    handleDeletingKeg = (id) => {
        const { dispatch } = this.props;
        const action = a.deleteKeg(id);
        dispatch(action);
        this.state({selectedKeg: null});
      }

    render() {
        let currentlyVisibleState = null;
        let buttonText = null;
    
        if(this.state.selectedKeg != null) {
            currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingDelete = {this.handleDeletingKeg}/>
            buttonText = "Return to Keg";
        }
        else if(this.state.selectedKeg != null) {
            currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} />
            buttonText = "Return to Keg List";
        }
        else if(this.props.formVisibleOnPage) {
            currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToList}/>
            buttonText = "Return to Keg List";
        } else {
           currentlyVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>
           buttonText = "Add keg";
            }
        return (
            <React.Fragment>
                {currentlyVisibleState}
                <button onClick={this.handleClick}>{buttonText}</button>
            </React.Fragment>
            );
        }
    }

    KegControl.propTypes = {
      masterKegList: PropTypes.object
    };

    const mapStateToProps = state => {
      return{
        masterKegList: state.masterKegList,
        formVisibleOnPage: state.formVisibleOnPage,
      }
    }

    KegControl = connect(mapStateToProps)(KegControl);

    export default KegControl;