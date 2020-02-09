import React, {Component} from "react"

const {Provider, Consumer} = React.createContext();

class UserContextProvider extends Component {
	state = {
		username: "Bob Proppies"
	}

	changeName = (username) => {
		this.setState({username})
	}

	render() {
		const {username} = this.state
		return (
			<Provider value={{username, changeName: this.changeName}}>
				{this.props.children}
			</Provider>
		)
	}
}

export {UserContextProvider, Consumer as UserContextConsumer};