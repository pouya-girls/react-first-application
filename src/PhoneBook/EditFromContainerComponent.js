import {connect} from 'react-redux'
import {createAddAction, createUpdateAction} from "../Redux/Actions/PhoneActions";
import EditFormPresentationComponent from "./EditFormPresentationComponent";

const mapStateToProps = state => {
    const prop = {}

    prop.isVisible = state.edit_index !== null
    prop.index = state.edit_index
    if(state.edit_index !== null) {
        prop.p = state.phone[state.edit_index]
    } else {
        prop.p = {
            firstName: '',
            surname: '',
            phone: ''
        }
    }

    return prop
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdate: (index, phone) => dispatch(createUpdateAction(index ,phone))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditFormPresentationComponent)