import React from 'react';
import UserToken from './UserToken';

// Components
import Header from './components/Header.jsx';
import Gallery from './components/Gallery.jsx';
import LoginPanel from './components/LoginPanel.jsx';

var App = React.createClass({

	getInitialState() {
		return {
			authenticated: false
		}
	},

	componentDidMount() {
		var authenticated = UserToken.tryObtain();
		this.setState({
			authenticated: authenticated
		});
	},

	render() {
		if (this.state.authenticated) {
			return (
				<div>
					<Header/>
					<Gallery count='30' />
				</div>
			)
		} else {
			return <LoginPanel/>
		}
	}
});

React.render(
	<App/>,
	document.getElementById('app-container')
);
