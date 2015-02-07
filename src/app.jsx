var React = require('react');

var store = window.localStorage;

var CONFIG = {
	clientID: 'a83f87bc74c94b7ca864d1cf635974f8',
};

var URL = {
	base: 'https://api.instagram.com/v1',
	auth: 'https://api.instagram.com/oauth/authorize?client_id=',
	redirectParam: '&redirect_uri=',
	responseType: '&response_type=token',
	redirect: 'http://oogwenklikes.dev/',
	userLikes: '/users/self/media/liked?access_token='
};

var UserToken = {

	key: '',

	tryObtain() {
		// Get from Store
		var token = this.get();
		if (token) {
			return true;
		}

		// Get from Instagram
		token = location.hash;
		if (token) {
			var match = token.match(/access_token=(.*)/);
			if (match) {
				var userToken = match[1];
				store.setItem('user:token', userToken);
				this.key = userToken;
				return true;
			}
		}

		// Force Login flow
		return false;
	},

	get() {
		var keyValue = store.getItem('user:token');
		if (keyValue) {
			this.key = keyValue;
		}
		return this.key;
	}
};

var Authenticator = React.createClass({

	getInitialState() {
		return {
			authenticated: false
		}
	},

	componentDidMount() {
		var authenticated = UserToken.tryObtain();
		this.setState({
			authenticated: authenticated
		});
	},

	render() {

		return (
			this.state.authenticated ? <Gallery/> :
				<a className="login-button" href={URL.auth + CONFIG.clientID +
				URL.redirectParam + URL.redirect + URL.responseType}>Login</a>
		)
	}
});

var Image = React.createClass({

	imageStyles: {
		opacity: '0',
		maxWidth: '100%',
		transition: 'opacity 300ms ease 300ms'
	},

	getInitialState() {
		return {
			styles: this.imageStyles
		}
	},

	revealAnimation() {
		this.state.styles.opacity = '1';
		this.setState({
			styles: this.state.styles
		});
	},

	render() {
		return (
			<div>
				<img className="image" src={this.props.source} onLoad={this.revealAnimation} style={this.state.styles}/>
				<div>{this.props.title}</div>
			</div>
		)
	}
});

var Gallery = React.createClass({

	getInitialState() {
		return {
			photos: []
		}
	},

	componentDidMount() {
		var dis = this;
		JSONP.get(URL.base + URL.userLikes + UserToken.key, function(response) {
			console.log(response.data);
			dis.setState({
				photos: response.data
			});
		});
	},

	render() {
		var images = this.state.photos.map(function(photo) {
			return (
				<Image source={photo.images.standard_resolution.url}
					title={photo.caption.text} />
			)
		});

		return (
			<div className="gallery">
				{images}
			</div>
		);
	}
});

var App = React.createClass({

	render() {
		return (
			<Authenticator/>
		)
	}
});

React.render(<App/>, document.getElementById('app-container'));
