import Item from "../item/Item";
import { connect } from 'react-redux';
import NewItem from "../item/NewItem";
import { Component } from "react";

class List extends Component {
    render() {
        const listID = this.props.thisList.id
        const listIndex = this.props.list.allIDs.indexOf(listID)
        const list = this.props.list.lists[listIndex]
        return (
            <div className='container'>
                <h3>{list.name}</h3>
                {list.items.map((item) => {
                    return (
                        <div>
                            <label>
                                <input type="checkbox" />
                                <span><Item name={item.name} key={item.id} complete={item.complete} /></span>
                            </label>
                        </div>
                    )
                })}
                <NewItem forList={list.id} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}


export default connect(mapStateToProps)(List)