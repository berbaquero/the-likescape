import React from 'react';
import URL from './../URL';
import UserToken from '../UserToken';

var Header = React.createClass({

	signOut(ev) {
		ev.preventDefault();
		UserToken.remove();
	},

	styles: {
		avatar: {
			borderRadius: '50%',
			width: 40,
			display: 'block',
			marginBottom: 10
		},
		signOut: {
			width: 40,
			display: 'block',
			textAlign: 'center'
		},
		signOutIcon: {
			width: 20
		}
	}
	,

	getInitialState() {
		return {
			imageURL: '',
			userName: ''
		}
	},

	componentDidMount() {
		let userURL = URL.base + URL.userInfo +
				URL.accessToken + UserToken.key,
			thisComponent = this;
		JSONP.get(userURL, function(response) {
			let data = response.data;
			thisComponent.setState({
				imageURL: data.profile_picture,
				userName: data.full_name || data.username
			});
		});
	},

	render() {
		return (
			<header>
				<img src={this.state.imageURL}
					style={this.styles.avatar}
					title={this.state.userName}/>
				<a href='#sign-out'
					onClick={this.signOut}
					style={this.styles.signOut}
					title='Sign Out'>
					<img src='/images/sign-out.svg'
						style={this.styles.signOutIcon}/>
				</a>
			</header>
		)
	}
});

export default Header;
