import React, {Component} from "react"
import Header from "./Header"
import {UserContextConsumer} from "./userContext"
import './App.css'

class App extends Component {
  state = {
    username: ""
  }

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <div className="tc">
        <Header />
          <UserContextConsumer>
            {({username, changeName}) => (
              <main>
                <p className="main">No new notifications, <h3>{username}!</h3></p>
                <input
                    type="text"
                    name="username"
                    placeholder="New username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <br />
                <button onClick={() => changeName(this.state.username)}>Change Username</button>
                <p>{this.state.username}</p>
              </main>
            )}
          </UserContextConsumer>
      </div>
    )      
  }
}

export default App