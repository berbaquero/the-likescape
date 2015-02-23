import React from 'react';
import TimeSince from '../TimeSince';

var TimeAgo = React.createClass({

	render() {

		var timeSince = TimeSince(this.props.timestamp);

		return (
			<span className='time-ago'>{timeSince}</span>
		)
	}
});

export default TimeAgo;
