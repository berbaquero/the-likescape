var React = require('react');

var Modal = React.createClass({

	killClick(ev) {
		ev.stopPropagation();
	},

	render() {
		return (
			<div className='modal'
				onClick={this.props.onRequestClose}>
				<img className='image-modal'
					src={this.props.photoURL}
					onClick={this.killClick} />
			</div>
		)
	}
});

module.exports = Modal;
