import React from 'react';

const Modal = React.createClass({

	render() {
		return (
			<div className='modal anim-reveal'
				 onClick={this.props.onRequestClose}>
				<img className='image-modal'
					 src={this.props.photoURL}/>
			</div>
		)
	}
});

export default Modal;
