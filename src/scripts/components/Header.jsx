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
			fontWeight: '500'
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
			range: this.props.initialRange
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
			<header className='ui-brdr-box'>
				<div className='header-wrapper ui-brdr-b ui-brdr-clr-sec ui-flx-spc-btwn-x ui-flx-cntr-y'>
					<a href='/'
					   className='ui-txt-bold ui-no-underln ui-color-main'>The Likescape</a>

					<input type="range"
						   min='1'
						   max='4'
						   value={this.state.range}
						   onChange={this.handleRangeChange}
						   style={this.styles.range}/>

					<div className='ui-flx-cntr-x'>

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
				</div>
			</header>
		)
	}
});

export default Header;
