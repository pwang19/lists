import { connect } from "react-redux";

const Item = (props) => {
    return props.name
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps)(Item);