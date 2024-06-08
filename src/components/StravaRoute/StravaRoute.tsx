import React from 'react';

interface Props {
	// Define your component's props here
}

const StravaRoute: React.FC<Props> = (props) => {
	return (
		<div
			className="strava-embed-placeholder" 
			data-embed-type="route" 
			data-embed-id="3234342608525362660" 
			data-full-width="true" 
			data-style="standard" 
			data-surface-type="true" 
			data-map-hash="12.35/44.62894/-63.56883" 
			data-from-embed="true" 
		/>
	);
};

export default StravaRoute;