
import * as React from 'react'
// import * as container from 'src/jscommon/components/loginComponent/loginComponentContainer'
// import Button from 'src/jscommon/controls/Button'
// import TextInput from 'src/jscommon/controls/TextInput'
// import MainMenu from './MainMenu';

type ThisProps = {}
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
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="my-important-menu" href="/" >
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                            <span aria-hidden="true" />
                        </a>
                    </div>
                    <div className="navbar-menu" id="my-important-menu">
                        <div className="navbar-end">
                            <a className="navbar-item" href="/">Home</a><a className="navbar-item" href="/Login">Login</a>
                        </div>
                    </div>
                </nav>

                <div id='authenticated'>
                    <aside id="sidebar">
                        This is a sidebar
                    </aside>

                    <div className="appcontent">
                        This is the app content
                        <div className="container-fluid" >
                            <section className="section">
                                <div className="container box">

                                    <input type="text" name="username" placeholder="Enter a value"
                                        value='this.state.username' size={30} />
                                    <input type="password" name="password" placeholder="Enter a value"
                                        value='this.state.password' size={30} />
                                    {/* <button type="button" className="btn btn-primary" text="Login" /> */}

                                    {/* <TextInput
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
                <Button onClick={this.onSubmitPressed} text="Login" /> */}
                                </div>
                            </section>

                            <section className="section">
                                <div className="container box">
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
        // this.setState({ ...this.state, username: event.currentTarget.value })    
    }

    private onPasswordChanged(event: React.SyntheticEvent<HTMLInputElement>) {
        event.preventDefault()
        // this.setState({ ...this.state, password: event.currentTarget.value })    
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