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
					 srcSet='images/icons/icon256.png 2x'/>

				<h1>The Likescape</h1>

				<section className='ui-mrgn-y'>
					<p>
						View all the Instagram pictures you have
						<span style={this.styles.heart}> &hearts;</span>
						liked.
					</p>
					<LoginButton/>
				</section>

				{this.state.showInstallButton ?
					(    <section className='ui-mrgn-y ui-mrgn-t-5'>
							<p>Optionally, install The Likescape as a standalone app</p>
							<button className='btn-simple'
									onClick={this.requestInstall}>🚀 Install App</button>
						</section>
					)
					: ''
				}

				<hr className='ui-mrgn-t-3 ui-w-50 ui-brdr ui-brdr-clr-sec'/>

				<section className='ui-mrgn-t-5'>
					<a href="https://medium.com/@berbaquero/this-is-the-likescape-759b0aefe43d"
					   target='_blank'
					   className='ui-color-main'>
						Read about The Likescape</a>
				</section>

				<footer className='ui-mrgn-t-5'>
					<a href="http://berbaquero.com/"
					   target='_blank'
					   className='ui-link ui-heading ui-color-main ui-txt-bold my-home-link'>
						Bernardo Baquero Stand</a>
				</footer>
			</div>
		)
	}
});

export default LoginPanel;
