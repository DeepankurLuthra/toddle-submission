import { React, useState } from 'react';

function DeleteIcon({disabled, onClick}) {
  	const [fillColor, setFillColor] = useState('#BDBDBD');

	const getStyles = () => {
		if (disabled) {
			return {
				opacity: '0.5',
				cursor: 'not-allowed',
			};
		}
		return { cursor: 'pointer' };
	};
	const onClickHandler = (event) => {
		if (disabled) {
			return;
		}
		onClick(event);
	};

	const mouseOverHandler = () => {
		if (disabled) {
			return;
		}
		setFillColor('#00C6CC');
	};
	const mouseLeaveHandler = () => {
		if (disabled) {
			return;
		}
		setFillColor('#BDBDBD');
	};
  return (
    <svg style={getStyles()} width="22" height="22" viewBox="0 0 1024 1024" onClick={(event)=>onClickHandler(event)} onMouseLeave={(event)=>mouseLeaveHandler(event)} onMouseOver={(event)=>mouseOverHandler(event)}>
  <path fill={fillColor} d="M128 320v640c0 35.2 28.8 64 64 64h576c35.2 0 64-28.8 64-64v-640h-704zM320 896h-64v-448h64v448zM448 896h-64v-448h64v448zM576 896h-64v-448h64v448zM704 896h-64v-448h64v448z"></path>
  <path fill={fillColor} d="M848 128h-208v-80c0-26.4-21.6-48-48-48h-224c-26.4 0-48 21.6-48 48v80h-208c-26.4 0-48 21.6-48 48v80h832v-80c0-26.4-21.6-48-48-48zM576 128h-192v-63.198h192v63.198z"></path>  
  </svg>
  )
}

export default DeleteIcon