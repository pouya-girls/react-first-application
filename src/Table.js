import React, {Component} from 'react'

export default class Table extends Component {
    _showPhones() {
        console.log(this.props.pb)
        return this.props.pb.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.firstName}</td>
                    <td>{item.surname}</td>
                    <td>{item.phone}</td>
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