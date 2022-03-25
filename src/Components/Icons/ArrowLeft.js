import React, { useEffect, useState } from 'react';

const ArrowLeft = ({ onClick, disabled }) => {
	const [fillColor, setFillColor] = useState('#BDBDBD');
	useEffect(()=>{
		setFillColor("#BDBDBD")
	},[disabled])

	const getStyles = () => {
		if (disabled) {
			return {
				opacity: '0.5',
				cursor: 'not-allowed',
        transform: "rotate(180deg)",
			};
		}
		return { cursor: 'pointer',
          transform: "rotate(180deg)",
 };
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
		<svg
			style={getStyles()}
			width='22'
			height='22'
			viewBox='0 0 1024 1024'
			onClick={(event) => onClickHandler(event)}
			onMouseOver={(event) => mouseOverHandler(event)}
			onMouseLeave={(event) => mouseLeaveHandler(event)}>
			<path fill={fillColor} d='M992 512l-480-480v288h-512v384h512v288z'></path>{' '}
		</svg>
	);
};

export default ArrowLeft;
