import React from 'react';

const MoreButton = React.createClass({

	styles: {
		margin: '2em auto'
	},

	render() {
		return (
			<button onClick={this.props.onClick}
					className={'btn-simple ui-w-50 ' + (this.props.loading ? 'loading' : '')}
					style={this.styles}>{this.props.loading ? 'Loading...' : 'Load More'}</button>
		)
	}
});

export default MoreButton;
