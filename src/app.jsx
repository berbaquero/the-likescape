var React = require('react'),
	UserToken = require('./UserToken'),
	// Components
	LoginButton = require('./LoginButton.jsx'),
	Gallery = require('./Gallery.jsx');

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
			return <Gallery count='30' />
		} else {
			return <LoginButton/>
		}
	}
});

React.render(<App/>, document.getElementById('app-container'));
