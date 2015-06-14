import React from 'react';
import URL from './../URL';
import UserToken from '../UserToken';

const Header = React.createClass({

	signOut(ev) {
		ev.preventDefault();
		UserToken.remove();
	},

	styles: {
		avatar: {
			borderRadius: '50%',
			width: 40,
			display: 'block',
			marginBottom: 10,
			alignSelf: 'center'
		},
		signOut: {
			width: 40,
			display: 'block',
			textAlign: 'center',
			alignSelf: 'center'
		},
		signOutIcon: {
			width: 20
		},
		range: {
			width: 64
		},
		title: {
			fontWeight: '500',
			color: '#748695'
		}
	},

	handleRangeChange(ev) {
		const newRange = ev.target.value;
		this.setState({
			range: newRange
		});
		this.props.onRangeChange(newRange);
	},

	getInitialState() {
		return {
			imageURL: '',
			userName: '',
			range: this.props.zoom
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
				<span style={this.styles.title}>The Likescape</span>

				<input type="range"
					   min='1'
					   max='4'
					   value={this.state.range}
					   onChange={this.handleRangeChange}
					   style={this.styles.range}/>

				<div className='header-options'>

					<img src={this.state.imageURL}
						 style={this.styles.avatar}
						 title={this.state.userName}/>

					<a href='#sign-out'
					   onClick={this.signOut}
					   style={this.styles.signOut}
					   title='Sign Out'>

						<img src='images/sign-out.svg'
							 style={this.styles.signOutIcon}/>
					</a>
				</div>
			</header>
		)
	}
});

export default Header;
