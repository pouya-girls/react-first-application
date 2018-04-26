import {connect} from 'react-redux'
import TablePresentationComponent from "./TablePresentationComponent";
import {createDeleteAction, createEditAction} from "../Redux/Actions/PhoneActions";
import {push} from 'react-router-redux'

const mapStateToProps = state => {
    return {
        pb: state.phone
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: index => dispatch(createDeleteAction(index)),
        onEdit: index =>{
            dispatch(createEditAction(index))
            dispatch(push('/edit'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TablePresentationComponent)