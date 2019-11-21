
import * as React from 'react'

import TextInput from '../controls/TextInput';
import Button from '../controls/Button';

import NavBar from './NavBar';

type ThisProps = {
    // username: string
}
//   container.StateProps
//   & container.ConnectedDispatch
//   & container.AttributeProps

type ComponentState = {} & {
    username: string
    password: string
}


// TODO: Change to React.FC and remove all react components. 
class DemoComponent extends React.Component<ThisProps, ComponentState> {
    constructor(props: ThisProps) {
        super(props)
        this.state = {
            password: "",
            username: ""
        }
        this.onUsernameChanged = this.onUsernameChanged.bind(this)
        this.onPasswordChanged = this.onPasswordChanged.bind(this)
        this.onSubmitPressed = this.onSubmitPressed.bind(this)
    }


    // FIXME: Get this working like the example in PersonalTracker, without using Bulma. (localhost:3000/demo)

    public render() {
        return (
            <>
                <NavBar />

                <div id='main'>
                    <aside id="sidebar1" className="sidebar">
                        This is a sidebar
                    </aside>

                    <section className="blade listings">
                        <div className="blade-title">
                            Pomodoros
                        </div>
                        <div className="blade-body">
                            <div className="list-item" >
                                "pomodoro.planned}",
                                "pomodoro.actual}",
                                "startTime}",
                                "pomodoro.status}"
                                    <br />
                                <Button onClick={this.onSubmitPressed} text="Login" />
                                <Button onClick={this.onSubmitPressed} text="Login" />
                                <Button onClick={this.onSubmitPressed} text="Login" />
                            </div>
                            <div className="list-item" >
                                "pomodoro.planned}",
                                "pomodoro.actual}",
                                "startTime}",
                                "pomodoro.status}"
                                    <br />
                                <Button onClick={this.onSubmitPressed} text="Login" />
                                <Button onClick={this.onSubmitPressed} text="Login" />
                                <Button onClick={this.onSubmitPressed} text="Login" />
                            </div>
                            <div className="list-item" >
                                "pomodoro.planned}",
                                "pomodoro.actual}",
                                "startTime}",
                                "pomodoro.status}"
                                    <br />
                                <Button onClick={this.onSubmitPressed} text="Login" />
                                <Button onClick={this.onSubmitPressed} text="Login" />
                                <Button onClick={this.onSubmitPressed} text="Login" />
                            </div>
                        </div>
                    </section>

                    <div className="blade">
                        <div className="blade-title">
                            This is the app content
                        </div>
                        <div className="blade-body">
                            <section className="section">
                                <div className="box">
                                    <TextInput
                                        inputType="text"
                                        label="Username"
                                        name="username"
                                        placeholder="Enter a value"
                                        value={this.state.username}
                                        size={30}
                                        onChange={this.onUsernameChanged} />
                                    <TextInput
                                        inputType="password"
                                        label="Password"
                                        name="password"
                                        placeholder="Enter a value"
                                        value={this.state.password}
                                        size={30}
                                        onChange={this.onPasswordChanged} />
                                    <Button onClick={this.onSubmitPressed} text="Login" />
                                </div>
                            </section>

                            <section className="section">
                                <div className="box">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Key</th>
                                                <th>Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>isAuthenticated</td>
                                                <td> JSON.stringify(this.props.isAuthenticated) </td>
                                            </tr>
                                            <tr>
                                                <td>raw auth</td>
                                                <td><div className="textValue"> this.props.token </div></td>
                                            </tr>
                                            <tr>
                                                <td>Header Claims</td>
                                                <td><div className="textValue"> JSON.stringify(this.props.headerClaims) </div></td>
                                            </tr>
                                            <tr>
                                                <td>Payload Claims</td>
                                                <td><div className="textValue"> JSON.stringify(this.props.payloadClaims) </div></td>
                                            </tr>

                                        </tbody>
                                    </table>

                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                <aside id="statusbar">
                    (1) | (9) | (7)
                </aside>
            </>)
    }

    private onUsernameChanged(event: React.SyntheticEvent<HTMLInputElement>) {
        event.preventDefault()
        this.setState({ ...this.state, username: event.currentTarget.value })
    }

    private onPasswordChanged(event: React.SyntheticEvent<HTMLInputElement>) {
        event.preventDefault()
        this.setState({ ...this.state, password: event.currentTarget.value })
    }

    private onSubmitPressed(event: React.SyntheticEvent<HTMLButtonElement>) {
        event.preventDefault()
        // this.props.login!({
        //   password: this.state.password,
        //   username: this.state.username
        // });  
    }
}

export default DemoComponent;