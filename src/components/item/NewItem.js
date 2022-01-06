import { Component } from "react";
import { connect } from 'react-redux'
import { generateID } from "../core/id-gen";
import { addItem } from '../store/actions/itemActions'
import { addItemToList } from '../store/actions/listActions'

class NewItem extends Component {
    state = {
        name: null,
        id: null,
        complete: false,
        listID: null,
        formID: generateID()
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state);
        this.props.addItemToList(this.state);
        document.getElementById(this.state.formID).firstChild.value = '';
    }

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            id: generateID(),
            listID: this.props.forList
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} id={this.state.formID}>
                    <input type='text' placeholder='New Item' onChange={this.onChange} id='name' required></input>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(addItem(item)),
        addItemToList: (item) => dispatch(addItemToList(item))
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);