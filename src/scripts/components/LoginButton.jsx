import React from 'react';
import URL from './../URL';
import config from './../Config';

var LoginButton = React.createClass({

	render() {
		return (
			<a className="btn-simple"
				href={URL.auth + config.clientID +
				URL.redirectParam + URL.redirect +
				URL.responseType}>Login with Instagram</a>
		)
	}
});

export default LoginButton;
