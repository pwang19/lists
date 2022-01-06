import { connect } from "react-redux";

let state = {}

const SaveCollection = (props) => {
    state = props
    return (
        <div className='save'>
            <form onSubmit={onSubmit}>
                <button className='btn'>Save</button>
            </form>
        </div>
    )
}

const onSubmit = (e) => {
    e.preventDefault()
    window.localStorage.setItem('list-collection', JSON.stringify(state))
    console.log('saved to localStorage');
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(SaveCollection);