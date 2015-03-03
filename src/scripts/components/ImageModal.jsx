var React = require('react');

var Modal = React.createClass({

	render() {
		return (
			<div className='modal'
				onClick={this.props.onRequestClose}>
				<img className='image-modal'
					src={this.props.photoURL} />
			</div>
		)
	}
});

module.exports = Modal;
