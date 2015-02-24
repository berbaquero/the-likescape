import React from 'react';

// Components
import LoginButton from './LoginButton.jsx';

var LoginPanel = React.createClass({

	styles: {
		panel: {
			width: 360,
			margin: '100px auto',
			textAlign: 'center'
		},
		heart: {
			color: '#c6544f'
		}
	},

	render() {
		return (
			<div style={this.styles.panel}>
				<h1>The Likescape</h1>
				<LoginButton/>
				<p>
					View all the Instagram pictures you have
					<span style={this.styles.heart}> &hearts;</span>
					 liked.
				</p>
			</div>
		)
	}
});

export default LoginPanel;
