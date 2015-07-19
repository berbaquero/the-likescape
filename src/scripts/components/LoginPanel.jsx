import React from 'react';
import LoginButton from './LoginButton.jsx';
import URLs from './../URL';

const manifestURL = URLs.appBase + URLs.manifest;

const LoginPanel = React.createClass({

	styles: {
		panel: {
			textAlign: 'center'
		},
		heart: {
			color: '#c6544f'
		}
	},

	getInitialState() {
		return {
			showInstallButton: false
		}
	},

	requestInstall() {
		window.navigator.mozApps.install(manifestURL);
	},

	componentDidMount() {
		const mozApp = window.navigator.mozApps;
		if (!mozApp) {
			return;
		}
		const request = mozApp.checkInstalled(manifestURL);
		const self = this;
		request.onsuccess = function() {
			if (!request.result) {
				self.setState({
					showInstallButton: true
				});
			}
		};
	},

	render() {
		return (
			<div style={this.styles.panel}>
				<img src='images/icons/icon128.png'
					 srcSet='images/icons/icon256.png 2x' />

				<h1>The Likescape</h1>

				<div className='ui-mrgn-y'>
					<p>
						View all the Instagram pictures you have
						<span style={this.styles.heart}> &hearts;</span>
						liked.
					</p>
					<LoginButton/>
				</div>

				{this.state.showInstallButton ?
					(	<div className='ui-mrgn-y'
							 style={{marginTop: '5em'}}>
							<p>Optionally, install The Likescape as a standalone app</p>
							<button className='btn-simple'
									onClick={this.requestInstall}>🚀 Install App</button>
						</div>
					)
					: ''
				}
			</div>
		)
	}
});

export default LoginPanel;
