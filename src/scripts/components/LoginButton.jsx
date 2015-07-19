import React from 'react';
import URL from './../URL';
import config from './../Config';

const LoginButton = React.createClass({

	requestURL: URL.auth + config.clientID + URL.redirectParam + URL.appBase + URL.responseType,

	render() {
		return (
			<a className="btn-simple"
			   href={this.requestURL}>Login with Instagram</a>
		)
	}
});

export default LoginButton;
