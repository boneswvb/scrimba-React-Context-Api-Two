import React from "react"
import './App.css'
import Header from "./Header"
import UserContext from "./userContext"

function App() {
  return (
    <div className="tc">
      <Header />
      <main>
        <UserContext.Consumer>
          {username => (
              <p className="main">No new notifications, <h3>{username}!</h3></p>
          )}
        </UserContext.Consumer>
      </main>
      <input
        type="text"
        name="username"
        placeholder="New username"
        value={""}
        onChange={""}
      />
      <br />
      <button onClick={""}>Change Username</button>
      <p>text</p>  
    </div>
  )
}

export default App