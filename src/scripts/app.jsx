import React from 'react';
import UserToken from './UserToken';
import Header from './components/Header.jsx';
import Gallery from './components/Gallery.jsx';
import LoginPanel from './components/LoginPanel.jsx';

const App = React.createClass({

	getInitialState() {
		return {
			authenticated: false,
			galleryZoom: 3
		}
	},

	componentDidMount() {
		var authenticated = UserToken.tryObtain();
		this.setState({
			authenticated: authenticated
		});
	},

	setGalleryZoom(range) {
		this.setState({
			galleryZoom: range
		});
	},

	render() {
		if (this.state.authenticated) {
			return (
				<div>
					<Header onRangeChange={this.setGalleryZoom}
							initialRange={this.state.galleryZoom}/>

					<Gallery count='30'
							 zoom={this.state.galleryZoom}/>
				</div>
			)
		} else {
			return <LoginPanel/>
		}
	}
});

React.render(
	<App/>,
	document.getElementById('app-container')
);
