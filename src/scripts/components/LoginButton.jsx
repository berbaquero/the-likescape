import React from 'react';
import URL from './../URL';
import config from './../Config';

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

export default LoginButton;
