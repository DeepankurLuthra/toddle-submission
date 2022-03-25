import {React, useState} from 'react'

function MoveIcon({disabled, onClick}) {
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
<path fill={fillColor} xmlns="http://www.w3.org/2000/svg" d="M575.488 189.472v258.016h256v-128l192.512 192.512-192.512 192.48v-130.976h-256v258.016h128.992l-192.48 192.48-192.512-192.48h128v-258.016h-256v129.984l-191.488-191.488 191.488-191.488v126.976h256v-258.016h-124.992l189.504-189.472 189.504 189.472h-126.016z"/>
   </svg>  )
}

export default MoveIcon