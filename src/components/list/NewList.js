import { Component } from "react";
import { connect } from 'react-redux'
import { createList } from '../store/actions/listActions'
import { addListToCollection } from '../store/actions/collectionActions'
import { generateID } from "../core/id-gen";

class NewList extends Component {

    state = {
        name: null,
        items: null,
        id: null
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createList(this.state);
        this.props.addListToCollection(this.state);
        document.getElementById('new-list-form').firstChild.value = '';
    }

    onChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
            id: generateID(),
            items: []
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} id='new-list-form'>
                    <input type='text' placeholder='New List' onChange={this.onChange} id='name' required></input>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createList: (list) => dispatch(createList(list)),
        addListToCollection: (list) => dispatch(addListToCollection(list))
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, mapDispatchToProps)(NewList);