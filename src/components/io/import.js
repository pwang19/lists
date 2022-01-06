import { Component } from "react";
import { connect } from "react-redux";
import { addListToCollection } from "../store/actions/collectionActions";
import { addItem } from "../store/actions/itemActions";
import { createList } from "../store/actions/listActions";

class ImportCollection extends Component {
    onSubmit = (e) => {
        e.preventDefault()
        const imported = JSON.parse(document.getElementById("import-area").value)
        imported.list.lists.map(list => {
            this.props.createList(list)
            this.props.addListToCollection(list)
            return 0
        })
        imported.item.items.map(item => {
            this.props.addItem(item)
            return 0
        })
    }

    render() {
        return (
            <div className='import'>
                <form onSubmit={this.onSubmit}>
                    <div class="input-field">
                        <textarea id="import-area" class="materialize-textarea" placeholder='import a collection...'></textarea>
                    </div>
                    <button className='btn'>Import</button>
                </form>
            </div>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) => dispatch(addItem(item)),
        createList: (list) => dispatch(createList(list)),
        addListToCollection: (list) => dispatch(addListToCollection(list))
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, mapDispatchToProps)(ImportCollection);