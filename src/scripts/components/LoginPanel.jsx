import React from 'react';

// Components
import LoginButton from './LoginButton.jsx';

var LoginPanel = React.createClass({

	styles: {
		width: 360,
		margin: '100px auto',
		textAlign: 'center'
	},

	render() {
		return (
			<div style={this.styles}>
				<h1>The Likescape</h1>
				<LoginButton/>
				<p>View all the Instagram pictures you have liked.</p>
			</div>
		)
	}
});

export default LoginPanel;
