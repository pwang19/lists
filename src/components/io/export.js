import { connect } from "react-redux";

let state = {}

const ExportCollection = (props) => {
    state = props
    return (
        <div className='export'>
            <form onSubmit={onSubmit}>
                <button className='btn'>Export</button>
            </form>
        </div>
    )
}

const onSubmit = (e) => {
    e.preventDefault()
    console.log(JSON.stringify(state))
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(ExportCollection);