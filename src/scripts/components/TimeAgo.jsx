var React = require('react'),
	TimeSince = require('../TimeSince');

var TimeAgo = React.createClass({

	render() {

		var timeSince = TimeSince(this.props.timestamp);

		return (
			<span className='time-ago'>{timeSince}</span>
		)
	}
});

module.exports = TimeAgo;
