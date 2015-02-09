var React = require('react'),
	URL = require('./URL'),
	config = require('./Config');

var LoginButton = React.createClass({

	render() {
		return (
			<a className="login-button"
				href={URL.auth + config.clientID +
				URL.redirectParam + URL.redirect +
				URL.responseType}>Login</a>
		)
	}
});

module.exports = LoginButton;
