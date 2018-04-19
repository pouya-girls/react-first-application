import React, {Component} from 'react'

export default class FormPresentationComponent extends Component{
    constructor(props) {
        super(props)

        this._txtFirstNameChanged = this._txtFirstNameChanged.bind(this)
        this._txtSurnameChanged = this._txtSurnameChanged.bind(this)
        this._txtPhoneChanged = this._txtPhoneChanged.bind(this)
        this._btnSaveClicked = this._btnSaveClicked.bind(this)

        this.state = {
            firstName: '',
            surname: '',
            phone: ''
        }
    }

    _txtFirstNameChanged(event) {
        console.log(event.target.value)
        this.setState({firstName: event.target.value})
    }

    _txtSurnameChanged(event) {
        console.log(event.target.value)
        this.setState({surname: event.target.value})
    }

    _txtPhoneChanged(event) {
        console.log(event.target.value)
        this.setState({phone: event.target.value})
    }

    _btnSaveClicked() {
        this.props.onSave(this.state)
    }

    render() {
        return (
            <div>
                <div>
                    <label>First Name:</label>
                    <input onChange={this._txtFirstNameChanged}/>
                </div>
                <div>
                    <label>Surname:</label>
                    <input onChange={this._txtSurnameChanged}/>
                </div>
                <div>
                    <label>Phone:</label>
                    <input onChange={this._txtPhoneChanged}/>
                </div>
                <div>
                    <button onClick={this._btnSaveClicked}>Save</button>
                </div>
            </div>
        )
    }
}
