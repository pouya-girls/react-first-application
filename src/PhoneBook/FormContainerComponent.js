import {connect} from 'react-redux'
import {push} from 'react-router-redux'
import FormPresentationComponent from "./FormPresentationComponent";
import {createAddAction} from "../Redux/Actions/PhoneActions";

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSave: phone => {
            dispatch(createAddAction(phone))
            dispatch(push('/'))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPresentationComponent)