import {connect} from 'react-redux'
import FormPresentationComponent from "./FormPresentationComponent";
import {createAddAction} from "../Redux/Actions/PhoneActions";

const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSave: phone => dispatch(createAddAction(phone))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPresentationComponent)