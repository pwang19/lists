import { Component } from "react";
import { connect } from "react-redux";
import List from "../list/List";

class Collection extends Component {
    state = {

    }

    render() {
        if (!this.props.collection.lists.length) {
            return null
        }
        return (
            <div>
                {this.props.collection.lists.length && this.props.collection.lists.map((list) => {
                    return (
                        <List thisList={list} />
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(Collection)