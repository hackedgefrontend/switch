import React from 'react';
import PropTypes from 'prop-types';

require('./shimmer.scss');

export const Shimmer = ({ classType }) => (
	<div className={'dashboard-timeline-wrapper ' + classType}>
		<div className="timeline-item">
			<div className="animated-background">
				<div className="background-masker header-right" />
				<div className="background-masker header-bottom" />
				<div className="background-masker subheader-right" />
				<div className="background-masker subheader-bottom" />
				<div className="background-masker content-first-end" />
			</div>
		</div>
	</div>
);
export const TabComponentShimmer = ({ classType }) => (
	<div className={'shimmerWrapper ' + classType}>
		<div className="component-item">
			<div className="animated-background row-head" />
			<div className="animated-background row-subHead" />
			<div className="animated-background  row-input" />
			<div className="animated-background  row-head mt40" />
			<div className="animated-background  row-subHead" />
			<div className="animated-background  row-textarea" />
		</div>
	</div>
);

Shimmer.propTypes = { classType: PropTypes.string };
export default Shimmer;
