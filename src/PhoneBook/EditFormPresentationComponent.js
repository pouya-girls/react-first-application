import React, {Component} from 'react'

export default class EditFormPresentationComponent extends Component {
    constructor(props) {
        super(props)

        this._txtFirstNameChanged = this._txtFirstNameChanged.bind(this)
        this._txtSurnameChanged = this._txtSurnameChanged.bind(this)
        this._txtPhoneChanged = this._txtPhoneChanged.bind(this)
        this._btnUpdateClicked = this._btnUpdateClicked.bind(this)

        this.state = this.props.p
    }

    componentWillReceiveProps(nextProps) {
        this.setState(nextProps.p)
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

    _btnUpdateClicked() {
        this.props.onUpdate(this.props.index, this.state)
    }

    render() {
        console.log(this.props.isVisible)
        if (this.props.isVisible) {
            return (
                <div>
                    <div>
                        <label>First Name:</label>
                        <input value={this.state.firstName} onChange={this._txtFirstNameChanged}/>
                    </div>
                    <div>
                        <label>Surname:</label>
                        <input value={this.state.surname} onChange={this._txtSurnameChanged}/>
                    </div>
                    <div>
                        <label>Phone:</label>
                        <input value={this.state.phone} onChange={this._txtPhoneChanged}/>
                    </div>
                    <div>
                        <button onClick={this._btnUpdateClicked}>Update</button>
                    </div>
                </div>
            )
        } else {
            return <div>No item selected for edit</div>
        }
    }
}
