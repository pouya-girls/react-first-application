import React, {Component} from 'react'

export default class TablePresentationComponent extends Component {
    constructor(props) {
        super(props)

        this._showPhones = this._showPhones.bind(this)
    }

    _showPhones() {
        console.log(this.props.pb)
        return this.props.pb.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.firstName}</td>
                    <td>{item.surname}</td>
                    <td>{item.phone}</td>
                    <td>
                        <button onClick={() => this.props.onDelete(index)}>Delete</button>
                        <button onClick={() => this.props.onEdit(index)}>Update</button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Surname</th>
                        <th>Phone</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this._showPhones()}
                    </tbody>
                </table>
            </div>
        )
    }
}