import { connect } from 'react-redux';
import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from"./KegDetail";

class KegControl extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            formVisibleOnPage: false,
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
          this.setState(prevState => ({
            formVisibleOnPage: !prevState.formVisibleOnPage,
          }));
        }
      }
    
    handleAddingNewKegToList = (newKeg) => {
      const { dispatch } = this.props;
      const { id, name, brand, price, alcohol } = newKeg;
      const action = {
        type: 'ADD_TICKET',
        id: id,
        name: name,
        brand: brand,
        price: price,
        alcohol: alcohol,
      }
      dispatch(action);
      this.setState({formVisibleOnPage: false});
    }

    handleChangingSelectedKeg = (id) => {
        const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
        this.setState({selectedKeg: selectedKeg});
    }

    handleDeletingKeg = (id) => {
        const { dispatch } = this.props;
        const action = {
          type: 'DELETE_KEG',
          id: id
        }
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
        else if(this.state.formVisibleOnPage) {
            currentlyVisibleState = <NewKegForm onNewKegCreation = {this.handleAddingNewKegToList}/>
            buttonText = "Return to Keg List";
        } else {
           currentlyVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg}/>
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

    KegControl = connect()(KegControl);

    export default KegControl;