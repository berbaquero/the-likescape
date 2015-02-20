var React = require('react');

var Modal = React.createClass({

	getInitialState() {
		return {
			shown: false
		}
	},

	killClick(ev) {
		ev.stopPropagation();
	},

	render() {
		var photoURL = this.props.photoURL,
			style = photoURL ? {display: 'block'} : {display: 'none'};

		return (
			<div className='modal'
				style={style}
				onClick={this.props.onRequestClose}>
				<img className='image-modal'
					src={photoURL}
					onClick={this.killClick} />
			</div>
		)
	}
});

module.exports = Modal;
